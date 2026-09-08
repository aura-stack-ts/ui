import Link from "next/link"
import { Button } from "@/components/ui/button"

export const CallToAction = () => {
    return (
        <div className="min-h-[60dvh] flex flex-col items-center justify-center gap-8 text-center border-y border-border py-20">
            <div className="space-y-4 max-w-2xl">
                <h3 className="text-3xl font-semibold text-foreground">Start building today</h3>
                <p className="text-lg text-muted-foreground">
                    Initialize Aura UI in your project in under a minute. No configuration, no build setup. Copy a block, connect
                    it to Aura Auth, ship a sign-in screen.
                </p>
            </div>
            <div className="flex gap-4">
                <Button variant="default" size="lg" asChild>
                    <Link href="/docs/installation" className="text-base">
                        Browse Components
                    </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <Link href="/docs/sign-in" className="text-base">
                        Explore Blocks
                    </Link>
                </Button>
            </div>
        </div>
    )
}
