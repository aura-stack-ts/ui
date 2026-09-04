import { useEffect, useState } from "react"
import { useIsProviderConnected, useRevokeToken, useSignIn } from "@aura-stack/next/pages/client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FigmaIcon } from "@/components/icons/figma"
import { NotionIcon } from "@/components/icons/notion"
import { GitHubIcon } from "@/components/icons/github"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"

const INTEGRATIONS = [
    {
        id: "github",
        name: "GitHub",
        icon: GitHubIcon,
        used: "Used for sign-in",
        scopes: ["read:user", "user:email"],
    },
    {
        id: "figma",
        name: "Figma",
        icon: FigmaIcon,
        used: "Used for design collaboration",
        scopes: ["file:read", "file:write"],
    },
    {
        id: "notion",
        name: "Notion",
        icon: NotionIcon,
        used: "Used for note-taking and documentation",
        scopes: ["database:read", "database:write"],
    },
] as const

const CONNECTED_PROVIDERS = {
    github: true,
    figma: false,
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
    const [connectedProviders, setConnectedProviders] = useState(CONNECTED_PROVIDERS)

    const isAnyPending = isSignInPending || isRevokeTokenPending || isIsProviderConnectedPending

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
        <section className="w-full max-w-3xl space-y-6">
            <CardHeader>
                <CardTitle>Connected Integrations</CardTitle>
                <CardDescription>Manage connected accounts and OAuth integrations for your user profile</CardDescription>
            </CardHeader>
            <Card className="p-0">
                <ItemGroup className="gap-0">
                    {INTEGRATIONS.map((integration) => {
                        const isConnected = connectedProviders[integration.id]
                        return (
                            <Item className="border-0 border-t border-border rounded-none first:border-t-0" key={integration.id}>
                                <ItemMedia variant="default">
                                    <integration.icon className="size-8" />
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
                                    <ItemDescription>{integration.used}</ItemDescription>
                                    {isConnected && (
                                        <ItemDescription>
                                            {integration.scopes.map((scope) => (
                                                <Badge key={scope} variant="secondary" className="mr-2">
                                                    {scope}
                                                </Badge>
                                            ))}
                                        </ItemDescription>
                                    )}
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
                        )
                    })}
                </ItemGroup>
            </Card>
        </section>
    )
}

export default Integrations
