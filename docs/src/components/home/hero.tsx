import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SignIn } from "@/registry/next/app-router/sign-in/sign-in"
import { Profile } from "@/registry/next/app-router/profile/profile"
import { Integrations } from "@/registry/next/app-router/integrations/integrations-3"
import { Preferences } from "@/registry/next/app-router/preferences/preferences-2"
import { ActiveSessions } from "@/registry/next/app-router/active-sessions/active-sessions"

export const Hero = () => {
    return (
        <section>
            <div className="w-11/12 mx-auto min-h-[70dvh] flex flex-col items-center justify-center text-center">
                <Badge className="border-border" variant="secondary" asChild>
                    <Link href="https://aura-stack-auth.vercel.app" target="_blank" rel="noreferrer noopener">
                        Built for Aura Auth
                    </Link>
                </Badge>
                <h1 className="max-w-4xl mt-4 mx-auto text-3xl md:text-6xl font-bold text-foreground tracking-tight">
                    Build your authentication UI.
                </h1>
                <p className="max-w-2xl mt-2 mx-auto text-xl text-muted-foreground leading-relaxed">
                    Production-ready components and application blocks built for Aura Auth. Copy the code, customize every detail,
                    and make it your own.
                </p>
                <div className="mt-12 flex gap-4 pt-4">
                    <Button variant="secondary" size="lg" asChild>
                        <Link href="/docs/installation" className="text-base">
                            Browse Components
                            <ArrowRight className="ml-2 size-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/docs/sign-in" className="text-base">
                            Explore Blocks
                            <ArrowRight className="ml-2 size-4" />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="pt-px preview-fade-bottom lg:-mt-14">
                <Image
                    className="hidden dark:block dark:md:hidden"
                    width={890}
                    height={400}
                    src="/imgs/hero-preview-dark.png"
                    alt="Hero Preview"
                />
                <Image
                    className="block dark:hidden md:hidden"
                    width={890}
                    height={400}
                    src="/imgs/hero-preview-light.png"
                    alt="Hero Preview"
                />
                <div className="hidden md:grid md:items-start md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-12 preview-column-left opacity-80 lg:mt-18">
                        <SignIn />
                        <Preferences />
                    </div>
                    <div className="hidden lg:flex lg:flex-col lg:gap-12">
                        <Profile />
                        <ActiveSessions />
                    </div>
                    <div className="flex flex-col gap-12 preview-column-right opacity-80 lg:mt-30">
                        <Integrations />
                    </div>
                </div>
            </div>
        </section>
    )
}
