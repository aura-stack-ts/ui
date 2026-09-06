"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LogOut, Smartphone, Monitor } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"

const SESSIONS = [
    { browser: "Chrome on Windows", type: "desktop", current: true, city: "New York", ip: "192.168.1.1" },
    { browser: "Firefox on Mac", type: "desktop", current: false, city: "San Francisco", ip: "192.168.1.2" },
    { browser: "Safari on iPhone", type: "mobile", current: false, city: "Los Angeles", ip: "192.168.1.3" },
]

export const ActiveSessions = () => {
    return (
        <section className="w-full max-w-3xl space-y-4">
            <CardHeader>
                <CardTitle className="text-lg">Active Sessions</CardTitle>
                <CardDescription>Manage your active sessions and log out of any that are no longer needed.</CardDescription>
            </CardHeader>
            <Card className="p-0 gap-0">
                <ItemGroup className="p-0 gap-0">
                    {SESSIONS.map((session, index) => (
                        <Item className="py-4 border-0 border-t border-border rounded-none first:border-t-0" key={index}>
                            <ItemMedia variant="default">
                                <span className="flex size-9 items-center justify-center rounded-lg bg-muted/60 ring-1 ring-border">
                                    {session.type === "desktop" ? (
                                        <Monitor className="size-4" />
                                    ) : (
                                        <Smartphone className="size-4" />
                                    )}
                                </span>
                            </ItemMedia>
                            <ItemContent>
                                <div className="flex gap-x-3">
                                    <ItemTitle>{session.browser}</ItemTitle>
                                    {session.current && (
                                        <Badge
                                            className="h-4 text-[0.625rem] text-emerald-400 border-emerald-400 bg-emerald-900/45"
                                            variant="outline"
                                        >
                                            Active Now
                                        </Badge>
                                    )}
                                </div>
                                <ItemDescription>
                                    {session.city} • {session.ip}
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button className="min-w-24" variant={session.current ? "destructive" : "outline"}>
                                    <LogOut className="size-4" />
                                    {session.current ? "Log Out" : "Revoke"}
                                </Button>
                            </ItemActions>
                        </Item>
                    ))}
                </ItemGroup>
                <CardFooter className="justify-end">
                    <Button variant="destructive">Sign Out All Other Sessions</Button>
                </CardFooter>
            </Card>
        </section>
    )
}

export default ActiveSessions
