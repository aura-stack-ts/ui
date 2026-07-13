"use client"

import Link from "next/link"
import { useAuthActions } from "@aura-stack/next/client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel, FieldSeparator, FieldDescription } from "@/components/ui/field"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHubIcon } from "@/components/icons/github"
import { GitLabIcon } from "@/components/icons/gitlab"
import type { FormEvent } from "react"

export const SignIn = () => {
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
            redirect: false,
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
            <CardContent className="p-0">
                <form onSubmit={onSubmit}>
                    <FieldGroup className="gap-6">
                        <div className="flex flex-col gap-4">
                            <Field className="gap-1.5">
                                <FieldLabel htmlFor="email" className="text-sm text-muted-foreground font-normal">
                                    Email
                                </FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="aurastackjs@gmail.com"
                                    required
                                    className="dark:bg-background h-9 shadow-xs"
                                />
                            </Field>
                            <Field className="gap-1.5">
                                <div className="flex items-center">
                                    <FieldLabel className="text-sm text-muted-foreground font-normal" htmlFor="password">
                                        Password
                                    </FieldLabel>
                                    <Link href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    required
                                    className="dark:bg-background h-9 shadow-xs"
                                />
                            </Field>
                        </div>
                        <Field>
                            <Button
                                type="submit"
                                size="lg"
                                className="rounded-lg h-10 hover:bg-primary/80 cursor-pointer"
                                disabled={isPending}
                            >
                                Sign in
                            </Button>
                        </Field>
                        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-sm text-muted-foreground bg-transparent">
                            <span className="px-4">or continue with</span>
                        </FieldSeparator>
                        <Field className="space-y-2">
                            <Button
                                variant="outline"
                                type="button"
                                className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
                                disabled={isPending}
                                onClick={onGitHubSignIn}
                            >
                                <GitHubIcon />
                                Sign in with GitHub
                            </Button>
                            <Button
                                variant="outline"
                                type="button"
                                className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
                                disabled={isPending}
                                onClick={onGitLabSignIn}
                            >
                                <GitLabIcon />
                                Sign in with GitLab
                            </Button>
                            <FieldDescription className="mb-0 text-center text-sm font-normal text-muted-foreground">
                                Don&apos;t have an account?{" "}
                                <Link href="#" className="font-medium text-card-foreground">
                                    Sign Up
                                </Link>
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}

export default SignIn
