"use client"
import { Link } from "react-router"
import { useAuthActions } from "@aura-stack/react-router/client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHubIcon } from "@/components/icons/github"
import { GitLabIcon } from "@/components/icons/gitlab"
import type { FormEvent } from "react"

export const SignUp = () => {
    const { signIn, signInCredentials, isPending } = useAuthActions()

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        await signInCredentials({
            payload: {
                username: email,
                password,
            },
        })
    }

    const onGitLabSignIn = async () => {
        await signIn("gitlab", { redirect: true })
    }

    const onGitHubSignIn = async () => {
        await signIn("github", { redirect: true })
    }

    return (
        <Card className="w-full max-w-lg px-6 py-8 sm:p-12 relative gap-6">
            <CardHeader className="text-center gap-6 p-0">
                <div className="flex flex-col gap-1">
                    <CardTitle className="text-2xl font-medium text-card-foreground">Welcome to Aura Stack</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground font-normal">
                        Enter your credentials below to log in to your account
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="@container p-0">
                <form onSubmit={onSubmit}>
                    <FieldGroup className="gap-6">
                        <Field className="grid md:grid-cols-2 md:gap-6 gap-3">
                            <Button
                                variant="outline"
                                type="button"
                                className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
                                disabled={isPending}
                                onClick={onGitHubSignIn}
                            >
                                <GitHubIcon />
                                <span className="@sm:hidden">GitHub</span>
                                <span className="hidden @sm:block">Sign in with GitHub</span>
                            </Button>
                            <Button
                                variant="outline"
                                type="button"
                                className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
                                disabled={isPending}
                                onClick={onGitLabSignIn}
                            >
                                <GitLabIcon />
                                <span className="@sm:hidden">GitLab</span>
                                <span className="hidden @sm:block">Sign in with GitLab</span>
                            </Button>
                        </Field>
                        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-sm text-muted-foreground bg-transparent">
                            <span className="px-4">or continue with</span>
                        </FieldSeparator>
                        <div className="flex flex-col gap-4">
                            <Field className="gap-1.5">
                                <FieldLabel htmlFor="name" className="text-sm">
                                    Name
                                </FieldLabel>
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    autoComplete="name"
                                    placeholder="John Doe"
                                    aria-label="Name"
                                    className="dark:bg-background h-9 shadow-xs"
                                />
                            </Field>
                            <Field className="gap-1.5">
                                <FieldLabel htmlFor="email" className="text-sm">
                                    Email
                                </FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    placeholder="name@example.com"
                                    aria-label="Email"
                                    className="dark:bg-background h-9 shadow-xs"
                                />
                            </Field>
                            <Field className="gap-1.5">
                                <FieldLabel className="text-sm" htmlFor="password">
                                    Password
                                </FieldLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    autoComplete="new-password"
                                    aria-label="Password"
                                    className="dark:bg-background h-9 shadow-xs"
                                />
                            </Field>
                        </div>
                        <Field className="gap-4">
                            <Button
                                type="submit"
                                size="lg"
                                className="rounded-lg h-10 hover:bg-primary/80 cursor-pointer"
                                disabled={isPending}
                            >
                                Create account
                            </Button>
                            <FieldDescription className="mb-0 text-center text-sm font-normal text-muted-foreground">
                                Already have an account?{" "}
                                <Link to="#" className="font-medium text-card-foreground">
                                    Sign In
                                </Link>
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}

export default SignUp
