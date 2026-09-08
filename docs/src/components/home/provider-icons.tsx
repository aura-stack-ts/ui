import Link from "next/link"
import { icons } from "@/registry/icons"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const ProviderIcons = () => {
    return (
        <div className="w-11/12 mx-auto text-center space-y-8">
            <div className="space-y-4">
                <Badge className="border-border" variant="secondary">
                    Supported Identity Providers
                </Badge>
                <h3 className="text-3xl font-semibold text-foreground">Provider Icons</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Every OAuth provider Aura Auth supports, as a standalone icon component, used in the provider button and
                    connected-integrations block, or drop them anywhere you need a brand mark.
                </p>
            </div>
            <div className="preview-fade-bottom">
                <div className="grid grid-cols-4 border border-border rounded-sm bg-background sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10">
                    {Object.values(icons).map((Icon, index) => (
                        <div
                            className="svg-icon flex items-center justify-center aspect-square border-b border-r border-border transition-colors hover:bg-foreground/20 md:last:hidden md:nth-last-[2]:hidden lg:last:flex lg:nth-last-[2]:flex"
                            key={index}
                        >
                            <Icon key={index} />
                        </div>
                    ))}
                </div>
            </div>
            <Button size="lg" variant="outline" asChild>
                <Link href="/docs/icons" className="text-base">
                    Browse All 20+ Icons
                    <ArrowRight className="ml-2 size-4" />
                </Link>
            </Button>
        </div>
    )
}
