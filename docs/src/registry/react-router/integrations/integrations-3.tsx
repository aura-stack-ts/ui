"use client"

import type { ComponentType, SVGProps } from "react"
import { useDisconnectProvider, useRevokeToken, useRefreshUserInfo, useSignIn } from "@aura-stack/react-router/client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FigmaIcon } from "@/components/icons/figma"
import { NotionIcon } from "@/components/icons/notion"
import { GitHubIcon } from "@/components/icons/github"
import { GitLabIcon } from "@/components/icons/gitlab"
import { DiscordIcon } from "@/components/icons/discord"
import { DribbbleIcon } from "@/components/icons/dribbble"
import { PinterestIcon } from "@/components/icons/pinterest"
import { BitbucketIcon } from "@/components/icons/bitbucket"
import { MoreVertical, RotateCw, Unplug, Trash2, Cog, Plug } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ConnectionStatus = "connected" | "needs-review" | "not-connected"

interface Integration {
    id: string
    name: string
    description: string
    status: ConnectionStatus
    icon: ComponentType<SVGProps<SVGSVGElement>>
}

interface IntegrationCategory {
    title: string
    description: string
    integrations: Integration[]
}

const CATEGORIES: IntegrationCategory[] = [
    {
        title: "Hosted Git Platforms",
        description: "Connect your repositories for CI/CD and code insights.",
        integrations: [
            {
                id: "github",
                name: "GitHub",
                description: "Connect your GitHub repositories for CI/CD and code insights.",
                status: "needs-review",
                icon: GitHubIcon,
            },
            {
                id: "gitlab",
                name: "GitLab",
                description: "Sync code changes and merge requests.",
                status: "connected",
                icon: GitLabIcon,
            },
            {
                id: "bitbucket",
                name: "Bitbucket",
                description: "Manage your Bitbucket repositories and pipelines.",
                status: "connected",
                icon: BitbucketIcon,
            },
        ],
    },
    {
        title: "Design & Collaboration",
        description: "Share design assets, moodboards, and UI inspiration.",
        integrations: [
            {
                id: "figma",
                name: "Figma",
                description: "Share design assets and collaborate on UI.",
                status: "connected",
                icon: FigmaIcon,
            },
            {
                id: "dribbble",
                name: "Dribbble",
                description: "Discover and share design inspiration.",
                status: "needs-review",
                icon: DribbbleIcon,
            },
            {
                id: "pinterest",
                name: "Pinterest",
                description: "Discover and save design ideas.",
                status: "connected",
                icon: PinterestIcon,
            },
        ],
    },
    {
        title: "Productivity & Communication",
        description: "Connect your team tools for better collaboration.",
        integrations: [
            {
                id: "discord",
                name: "Discord",
                description: "Connect your Discord server for real-time communication.",
                status: "not-connected",
                icon: DiscordIcon,
            },
            {
                id: "notion",
                name: "Notion",
                description: "Create and manage notes and documentation.",
                status: "not-connected",
                icon: NotionIcon,
            },
        ],
    },
]

const StatusBadge = ({ status }: { status: ConnectionStatus }) => {
    if (status === "connected") {
        return (
            <Badge variant="outline" className="border-emerald-800 bg-emerald-950/60 text-emerald-400">
                <span className="mr-1 inline-block size-1.5 rounded-full bg-emerald-400" />
                Connected
            </Badge>
        )
    }
    if (status === "not-connected") {
        return (
            <Badge variant="outline" className="text-muted-foreground border-muted/60 bg-muted/40">
                Not Connected
            </Badge>
        )
    }

    return (
        <Badge variant="outline" className="border-amber-800 bg-amber-950/60 text-amber-400">
            <span className="mr-1 inline-block size-1.5 rounded-full bg-amber-400" />
            Needs Review
        </Badge>
    )
}

const IntegrationRow = ({ integration }: { integration: Integration }) => {
    const { id, name, description, status } = integration
    const { isPending: isSigningIn, signIn } = useSignIn()
    const { isPending: isRefreshing, refreshUserInfo } = useRefreshUserInfo()
    const { isPending: isRevokePending, revokeToken } = useRevokeToken()
    const { isPending: isDisconnecting, disconnectProvider } = useDisconnectProvider()

    const isAnyPending = isSigningIn || isRefreshing || isRevokePending || isDisconnecting

    return (
        <Item className="py-3.5 border-0 border-t border-border rounded-none first:border-t-0">
            <ItemMedia variant="default">
                <span className="flex size-9 items-center justify-center rounded-lg bg-muted/60 ring-1 ring-border">
                    <integration.icon className="size-5" />
                </span>
            </ItemMedia>
            <ItemContent>
                <ItemTitle>{name}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
            </ItemContent>
            <ItemActions>
                <StatusBadge status={status} />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon-sm">
                            <MoreVertical className="size-4" />
                            <span className="sr-only">More options</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-max" align="end">
                        {status !== "not-connected" && (
                            <DropdownMenuItem className="min-w-max" disabled={isAnyPending} onClick={() => refreshUserInfo(id)}>
                                <RotateCw className="size-4 mr-2" />
                                {status === "needs-review" ? "Re-Authenticate" : "Refresh"}
                            </DropdownMenuItem>
                        )}
                        {status === "not-connected" && (
                            <DropdownMenuItem className="min-w-max" disabled={isAnyPending} onClick={() => signIn(id)}>
                                <Plug className="size-4 mr-2" />
                                Connect
                            </DropdownMenuItem>
                        )}
                        {status !== "not-connected" && (
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <Cog className="size-4 mr-2" />
                                    View Details
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent sideOffset={8}>
                                        <DropdownMenuItem>Scopes</DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                        )}
                        {status !== "not-connected" && (
                            <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="min-w-max"
                                    variant="destructive"
                                    disabled={isAnyPending}
                                    onClick={() => disconnectProvider(id)}
                                >
                                    <Unplug className="size-4 mr-2" />
                                    Disconnect
                                </DropdownMenuItem>
                            </>
                        )}
                        {status === "connected" && (
                            <DropdownMenuItem
                                className="min-w-max"
                                variant="destructive"
                                disabled={isAnyPending}
                                onClick={() => revokeToken(id)}
                            >
                                <Trash2 className="size-4 mr-2" />
                                Remove Token
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </ItemActions>
        </Item>
    )
}

const CategorySection = ({ category }: { category: IntegrationCategory }) => {
    return (
        <Card className="p-0">
            <CardHeader className="px-4 pt-4 pb-0">
                <CardTitle className="text-sm">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
                <ItemGroup className="gap-0">
                    {category.integrations.map((integration) => (
                        <IntegrationRow key={integration.id} integration={integration} />
                    ))}
                </ItemGroup>
            </CardContent>
        </Card>
    )
}

export const Integrations = () => {
    return (
        <Card className="w-full max-w-3xl space-y-4">
            <CardHeader>
                <CardTitle className="text-lg">App Connections</CardTitle>
                <CardDescription>Manage third-party services for workflow automation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                {CATEGORIES.map((category) => (
                    <CategorySection key={category.title} category={category} />
                ))}
            </CardContent>
        </Card>
    )
}

export default Integrations
