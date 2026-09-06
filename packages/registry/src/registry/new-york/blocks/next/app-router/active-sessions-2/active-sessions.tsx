"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Laptop, LogOut, MapPin, Monitor, Smartphone, Tablet, Tv } from "lucide-react"
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ComponentType, SVGProps } from "react"
import type { DeviceType } from "@aura-stack/next/types"

interface Session {
    id: string
    device: string
    deviceType: DeviceType
    browser: string
    os: string
    ip: string
    location: string
    lastActive: string
    isCurrent: boolean
}

const SESSIONS: Session[] = [
    {
        id: "sess_01",
        device: "MacBook Pro",
        deviceType: "desktop",
        browser: "Chrome 126",
        os: "macOS Sequoia",
        ip: "192.168.1.42",
        location: "Austin, TX",
        lastActive: "Now",
        isCurrent: true,
    },
    {
        id: "sess_02",
        device: "Windows Desktop",
        deviceType: "desktop",
        browser: "Edge 126",
        os: "Windows 11",
        ip: "73.162.88.14",
        location: "Austin, TX",
        lastActive: "2 hours ago",
        isCurrent: false,
    },
    {
        id: "sess_03",
        device: "iPhone 15 Pro",
        deviceType: "mobile",
        browser: "Safari 18",
        os: "iOS 18.5",
        ip: "24.56.112.9",
        location: "Dallas, TX",
        lastActive: "Yesterday at 4:32 PM",
        isCurrent: false,
    },
    {
        id: "sess_04",
        device: "iPad Air",
        deviceType: "tablet",
        browser: "Safari 18",
        os: "iPadOS 18.5",
        ip: "24.56.112.9",
        location: "Dallas, TX",
        lastActive: "3 days ago",
        isCurrent: false,
    },
    {
        id: "sess_05",
        device: "Pixel 9",
        deviceType: "mobile",
        browser: "Chrome 126",
        os: "Android 15",
        ip: "98.42.77.201",
        location: "San Francisco, CA",
        lastActive: "Sep 1, 2026",
        isCurrent: false,
    },
]

const DEVICE_ICONS: Record<DeviceType, ComponentType<SVGProps<SVGSVGElement>>> = {
    desktop: Monitor,
    mobile: Smartphone,
    tablet: Tablet,
    bot: Monitor,
    tv: Tv,
    unknown: Monitor,
}

const SessionRow = ({ session }: { session: Session }) => {
    const DeviceIcon = DEVICE_ICONS[session.deviceType]

    return (
        <Item className="py-4 border-0 border-t border-border rounded-none first:border-t-0">
            <ItemMedia className="ring-1 ring-border bg-muted/60" variant="image">
                <DeviceIcon className="size-5 text-muted-foreground" />
            </ItemMedia>
            <ItemContent>
                <ItemTitle className="flex items-center gap-x-3">
                    {session.device}
                    {session.isCurrent && (
                        <Badge
                            className="h-4 text-[0.625rem] text-emerald-400 border-emerald-400 bg-emerald-900/45"
                            variant="outline"
                        >
                            Current Session
                        </Badge>
                    )}
                </ItemTitle>
                <ItemDescription>
                    {session.browser} • {session.os}
                </ItemDescription>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                        <Globe className="size-3" />
                        {session.ip}
                    </span>
                    •
                    <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3" />
                        {session.location}
                    </span>
                    •<span className="text-muted-foreground/60">{session.isCurrent ? "Active now" : session.lastActive}</span>
                </div>
            </ItemContent>
            <ItemActions>
                <Button variant={session.isCurrent ? "destructive" : "outline"}>
                    <LogOut className="size-4" />
                    {session.isCurrent ? "Log Out" : "Revoke"}
                </Button>
            </ItemActions>
        </Item>
    )
}

export const ActiveSessions = () => {
    const otherSessionsCount = SESSIONS.filter((s) => !s.isCurrent).length

    return (
        <section className="w-full max-w-3xl space-y-6">
            <CardHeader>
                <div>
                    <CardTitle className="text-lg">Active Sessions</CardTitle>
                    <CardDescription>Manage devices that are currently signed in to your account.</CardDescription>
                </div>
                <CardAction>
                    <Badge variant="secondary" className="tabular-nums">
                        <Laptop className="size-3" />
                        {SESSIONS.length} {SESSIONS.length === 1 ? "session" : "sessions"}
                    </Badge>
                </CardAction>
            </CardHeader>
            {SESSIONS.filter((s) => s.isCurrent).map((session) => {
                return (
                    <Card className="p-0" key={session.id}>
                        <SessionRow session={session} />
                    </Card>
                )
            })}
            {otherSessionsCount > 0 && (
                <Card className="p-0">
                    <CardHeader className="px-4 pt-4 pb-0">
                        <CardTitle className="text-sm">Other Sessions</CardTitle>
                        <CardDescription>
                            {otherSessionsCount} other active {otherSessionsCount === 1 ? "session" : "sessions"} on your account.
                        </CardDescription>
                        <CardAction>
                            <Button variant="destructive">
                                <LogOut className="size-4" />
                                Revoke Other Sessions
                            </Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent className="p-0">
                        <ItemGroup className="gap-0">
                            {SESSIONS.filter((s) => !s.isCurrent).map((session) => (
                                <SessionRow key={session.id} session={session} />
                            ))}
                        </ItemGroup>
                    </CardContent>
                    <CardFooter className="text-xs text-muted-foreground">
                        <span>If you don't recognize a session, revoke it immediately and change your password.</span>
                    </CardFooter>
                </Card>
            )}
        </section>
    )
}

export default ActiveSessions
