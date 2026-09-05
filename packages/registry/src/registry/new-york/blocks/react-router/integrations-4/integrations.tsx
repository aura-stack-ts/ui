import { useEffect, useState } from "react"
import { useIsProviderConnected, useRevokeToken, useSignIn } from "@aura-stack/react-router/client"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { DiscordIcon } from "@/components/icons/discord"
import { NotionIcon } from "@/components/icons/notion"
import { GitHubIcon } from "@/components/icons/github"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"

const INTEGRATIONS = [
    {
        id: "github",
        name: "GitHub",
        icon: GitHubIcon,
        description: "Connected for repository and organization code management.",
        configs: [
            {
                title: "Repository Access",
                description: "Read-only access to public repositories.",
            },
            {
                title: "Organization Access",
                description: "Read-only access to organization membership and teams.",
            },
        ],
    },
    {
        id: "discord",
        name: "Discord",
        icon: DiscordIcon,
        description: "Connected for server management, roles, and community notifications.",
        configs: [
            {
                title: "User Profile Access",
                description: "Read-only access to user profile information.",
            },
            {
                title: "Server Access",
                description: "Read-only access to server membership and roles.",
            },
        ],
    },
    {
        id: "notion",
        name: "Notion",
        icon: NotionIcon,
        description: "Connected for Notion workspace sync, note-taking, and documentation.",
        configs: [
            {
                title: "Database Access",
                description: "Read-only access to databases and pages.",
            },
        ],
    },
] as const

const CONNECTED_PROVIDERS = {
    github: true,
    discord: false,
    notion: false,
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
    const { isPending: isIsProviderConnectedPending, isProviderConnected } = useIsProviderConnected()
    const [connectedProviders, setConnectedProviders] =
        useState<Record<keyof typeof CONNECTED_PROVIDERS, boolean>>(CONNECTED_PROVIDERS)

    const isAnyPending = isSignInPending || isRevokeTokenPending || isIsProviderConnectedPending

    const handleIntegrationClick = async (provider: keyof typeof CONNECTED_PROVIDERS) => {
        const isConnected = connectedProviders[provider]
        if (isConnected) {
            const success = await revokeToken(provider)
            if (success) {
                setConnectedProviders((prev) => ({ ...prev, [provider]: false }))
            }
        } else {
            // @ts-ignore
            const { success } = await signIn(provider)
            if (success) {
                setConnectedProviders((prev) => ({ ...prev, [provider]: true }))
            }
        }
    }

    useEffect(() => {
        const fetchConnectedProviders = async () => {
            const providers = await Promise.all(
                Object.keys(CONNECTED_PROVIDERS).map(async (provider) => {
                    const isConnected = await isProviderConnected(provider)
                    return { [provider]: isConnected }
                })
            )
            setConnectedProviders(() => Object.assign({}, ...providers))
        }
        fetchConnectedProviders()
    }, [isProviderConnected])

    return (
        <section className="w-full max-w-2xl space-y-4">
            <CardHeader className="mb-8">
                <CardTitle>Connected Integrations</CardTitle>
                <CardDescription>Manage integrations and connected accounts.</CardDescription>
            </CardHeader>
            {INTEGRATIONS.map((integration) => {
                const isConnected = connectedProviders[integration.id]
                return (
                    <Card className="w-full" key={integration.id}>
                        <CardContent className="space-y-4">
                            <Item className="p-0">
                                <ItemMedia variant="default">
                                    <span className="flex size-9 items-center justify-center rounded-lg bg-muted/60 ring-1 ring-border">
                                        <integration.icon className="size-5" />
                                    </span>
                                </ItemMedia>
                                <ItemContent>
                                    <div className="flex gap-x-3">
                                        <ItemTitle>{integration.name}</ItemTitle>
                                        <Badge
                                            className="data-[state=connected]:text-emerald-400 data-[state=connected]:border-emerald-400 data-[state=connected]:bg-emerald-900/45"
                                            data-state={isConnected ? "connected" : "not-connected"}
                                            variant="outline"
                                        >
                                            {isConnected ? "Connected" : "Not Connected"}
                                        </Badge>
                                    </div>
                                    <ItemDescription>{integration.description}</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Button
                                        className="min-w-26"
                                        variant={isConnected ? "outline" : "default"}
                                        disabled={isAnyPending}
                                        onClick={() => handleIntegrationClick(integration.id)}
                                    >
                                        {isConnected ? "Disconnect" : "Connect"}
                                    </Button>
                                </ItemActions>
                            </Item>
                            {isConnected && integration.configs && (
                                <ItemGroup className="gap-2">
                                    {integration.configs.map((config, index) => (
                                        <Item className="rounded-lg bg-muted/50" key={index}>
                                            <ItemContent>
                                                <Label htmlFor={`switch-${integration.id}`}>
                                                    <ItemTitle>{config.title}</ItemTitle>
                                                </Label>
                                                <ItemDescription>{config.description}</ItemDescription>
                                            </ItemContent>
                                            <ItemActions>
                                                <Switch id={`switch-${integration.id}`} />
                                            </ItemActions>
                                        </Item>
                                    ))}
                                </ItemGroup>
                            )}
                        </CardContent>
                    </Card>
                )
            })}
        </section>
    )
}

export default Integrations
