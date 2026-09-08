import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GitHubIcon } from "@/components/icons/github"

export const Footer = () => {
    return (
        <footer>
            <div className="w-11/12 mx-auto pt-16">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-12">
                    <div className="col-span-2 space-y-6 md:col-span-3">
                        <Link href="/docs" className="inline-flex items-center gap-2 text-lg font-semibold text-foreground">
                            Aura UI
                        </Link>
                        <p className="text-sm leading-6 text-muted-foreground">
                            Interfaces built for Aura Stack applications. Prebuilt components and application blocks for
                            authentication.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="https://github.com/aura-stack-ts/ui"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Aura UI on GitHub"
                                className="inline-flex items-center justify-center size-9 rounded-md border border-border bg-background text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/50"
                            >
                                <GitHubIcon className="size-4" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4">Product</h3>
                        <nav className="flex flex-col gap-3">
                            <Button className="w-min px-0 text-muted-foreground" variant="link" asChild>
                                <Link href="/docs/installation">Components</Link>
                            </Button>
                            <Button className="w-min px-0 text-muted-foreground" variant="link" asChild>
                                <Link href="/docs/sign-in">Blocks</Link>
                            </Button>
                            <Button className="w-min px-0 text-muted-foreground" variant="link" asChild>
                                <Link href="/docs/icons">Icons</Link>
                            </Button>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
                        <nav className="flex flex-col gap-3">
                            <Button className="w-min px-0 text-muted-foreground" variant="link" asChild>
                                <Link href="/docs">Documentation</Link>
                            </Button>
                            <Button className="w-min px-0 text-muted-foreground" variant="link" asChild>
                                <Link href="https://github.com/aura-stack-ts/ui" target="_blank" rel="noreferrer">
                                    GitHub Repository
                                </Link>
                            </Button>
                            <Button className="w-min px-0 text-muted-foreground" variant="link" asChild>
                                <Link href="https://github.com/aura-stack-ts/ui/issues" target="_blank" rel="noreferrer">
                                    Issues
                                </Link>
                            </Button>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4">Aura Stack</h3>
                        <nav className="flex flex-col gap-3">
                            <Button className="w-min px-0 text-muted-foreground" variant="link" asChild>
                                <Link href="https://aura-stack-auth.vercel.app" target="_blank" rel="noreferrer">
                                    Aura Auth
                                </Link>
                            </Button>
                            <Button className="w-min px-0 text-muted-foreground" variant="link" asChild>
                                <Link href="https://aura-stack-router.vercel.app" target="_blank" rel="noreferrer">
                                    Aura Router
                                </Link>
                            </Button>
                            <Button className="w-min px-0 text-muted-foreground" variant="link" asChild>
                                <Link href="https://github.com/aura-stack-ts" target="_blank" rel="noreferrer">
                                    Aura Stack
                                </Link>
                            </Button>
                        </nav>
                    </div>
                </div>
                <div className="mt-10 py-4 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">© 2026 Aura Stack. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
