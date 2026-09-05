"use client"

import { useEffect, useState } from "react"
import { useIsProviderConnected, useProviderTokens, useRevokeToken, useSignIn } from "@aura-stack/next/client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FigmaIcon } from "@/components/icons/figma"
import { NotionIcon } from "@/components/icons/notion"
import { GitHubIcon } from "@/components/icons/github"
import { DiscordIcon } from "@/components/icons/discord"
import { TwitchIcon } from "@/components/icons/twitch"
import { AtlassianIcon } from "@/components/icons/atlassian"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const INTEGRATIONS = [
    {
        id: "github",
        name: "GitHub",
        icon: GitHubIcon,
        used: "Used for sign-in and profile management.",
        scopes: ["read:user", "user:email"],
    },
    {
        id: "figma",
        name: "Figma",
        icon: FigmaIcon,
        used: "Used for design collaboration and prototyping.",
        scopes: ["file:read", "file:write"],
    },
    {
        id: "notion",
        name: "Notion",
        icon: NotionIcon,
        used: "Used for note-taking and documentation.",
        scopes: ["database:read", "database:write"],
    },
    {
        id: "discord",
        name: "Discord",
        icon: DiscordIcon,
        used: "Used for community chat and notifications.",
        scopes: ["identify", "guilds"],
    },
    {
        id: "twitch",
        name: "Twitch",
        icon: TwitchIcon,
        used: "Used for streaming and content creation.",
        scopes: ["user:read:email", "user:read:follows"],
    },
    {
        id: "atlassian",
        name: "Atlassian",
        icon: AtlassianIcon,
        used: "Used for Jira and team workspace sync.",
        scopes: ["read:jira-work", "write:jira-work"],
    },
] as const

const CONNECTED_PROVIDERS = {
    github: true,
    figma: false,
    notion: false,
    discord: true,
    twitch: false,
    atlassian: false,
} as const

export const Integrations = () => {
    const { isPending: isSignInPending, signIn } = useSignIn()
    /**
     * Revoke oauth token for a given provider. This will disconnect the provider from
     * the user's account and remove any associated data.
     *
     * @see https://aura-stack-auth.vercel.app/docs/api-reference/client/functions/revokeToken
     * @see https://aura-stack-auth.vercel.app/docs/api-reference/client/functions/disconnectProvider
     */
    const { isPending: isRevokeTokenPending, revokeToken } = useRevokeToken()
    const { isPending: isProviderTokensPending } = useProviderTokens()
    const { isPending: isIsProviderConnectedPending, isProviderConnected } = useIsProviderConnected()
    const [connectedProviders, setConnectedProviders] = useState(CONNECTED_PROVIDERS)

    const isAnyPending = isSignInPending || isRevokeTokenPending || isIsProviderConnectedPending || isProviderTokensPending

    const handleIntegrationClick = async (provider: keyof typeof CONNECTED_PROVIDERS) => {
        const isConnected = connectedProviders[provider]
        if (isConnected) {
            await revokeToken(provider)
            setConnectedProviders((prev) => ({ ...prev, [provider]: false }))
        } else {
            await signIn(provider)
            setConnectedProviders((prev) => ({ ...prev, [provider]: true }))
        }
    }

    useEffect(() => {
        if (!isIsProviderConnectedPending) return

        const fetchConnectedProviders = async () => {
            const providers = await Promise.all(
                Object.keys(CONNECTED_PROVIDERS).map(async (provider) => {
                    const isConnected = await isProviderConnected(provider)
                    return { [provider]: isConnected }
                })
            )
            setConnectedProviders(Object.assign({}, ...providers))
        }
        fetchConnectedProviders()
    }, [isProviderConnected, isIsProviderConnectedPending])

    return (
        <Card className="w-full max-w-3xl pb-10 space-y-4 bg-card">
            <CardHeader>
                <CardTitle>Connected Integrations</CardTitle>
                <CardDescription>Manage connected accounts and OAuth integrations for your user profile.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {INTEGRATIONS.map((integration) => {
                    const isConnected = connectedProviders[integration.id]
                    return (
                        <Card key={integration.id}>
                            <CardHeader className="space-y-2">
                                <integration.icon className="size-7" />
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CardTitle className="flex items-center justify-between">
                                    <span>{integration.name}</span>
                                    <Badge
                                        className="data-[state=connected]:text-emerald-400 data-[state=connected]:border-emerald-400 data-[state=connected]:bg-emerald-900/45"
                                        data-state={isConnected ? "connected" : "not-connected"}
                                        variant="outline"
                                    >
                                        {isConnected ? "Connected" : "Not Connected"}
                                    </Badge>
                                </CardTitle>
                                <CardDescription>{integration.used}</CardDescription>
                                <Button
                                    className="w-full mt-2"
                                    variant={isConnected ? "destructive" : "default"}
                                    disabled={isAnyPending}
                                    onClick={() => handleIntegrationClick(integration.id)}
                                >
                                    {isConnected ? "Disconnect" : "Connect"}
                                </Button>
                            </CardContent>
                        </Card>
                    )
                })}
            </CardContent>
            <CardFooter>
                <CardDescription>
                    Need help? View
                    <Button variant="link" asChild>
                        <a href="https://aura-stack-auth.vercel.app/docs/introduction" target="_blank" rel="noopener noreferrer">
                            OAuth Docs
                        </a>
                    </Button>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}

export default Integrations
