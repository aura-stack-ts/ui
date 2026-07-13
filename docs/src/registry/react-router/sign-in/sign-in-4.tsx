"use client"

import { Link } from "react-router"
import { useSignInCredentials } from "@aura-stack/react-router/client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import type { FormEvent } from "react"

export const SignIn = () => {
    const { signInCredentials, isPending } = useSignInCredentials()

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

    return (
        <form className="w-full mx-auto px-6 max-w-md" onSubmit={onSubmit}>
            <FieldGroup className="gap-6">
                <div className="flex flex-col gap-1 text-center">
                    <h1 className="text-2xl font-medium text-card-foreground">Welcome to Aura Stack</h1>
                    <p className="text-sm text-muted-foreground font-normal">
                        Enter your credentials below to log in to your account
                    </p>
                </div>
                <Field className="gap-1.5">
                    <FieldLabel htmlFor="email" className="text-sm">
                        Email
                    </FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="aurastackjs@gmail.com"
                        aria-label="Email"
                        className="dark:bg-background h-9 shadow-xs"
                    />
                </Field>
                <Field className="gap-1.5">
                    <div className="flex items-center">
                        <FieldLabel className="text-sm" htmlFor="password">
                            Password
                        </FieldLabel>
                        <Link to="#" className="ml-auto text-sm text-muted-foreground underline-offset-2 hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        required
                        placeholder="••••••••"
                        aria-label="Password"
                        className="dark:bg-background h-9 shadow-xs"
                    />
                </Field>
                <Field className="gap-4">
                    <Button
                        type="submit"
                        size="lg"
                        className="rounded-lg h-10 hover:bg-primary/80 cursor-pointer"
                        disabled={isPending}
                    >
                        Sign in
                    </Button>
                </Field>
                <FieldDescription className="px-6 text-center text-sm leading-snug">
                    By signing in, you agree to our <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>.
                </FieldDescription>
                <FieldDescription className="text-center text-sm font-normal text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link to="#" className="font-medium text-card-foreground">
                        Sign Up
                    </Link>
                </FieldDescription>
            </FieldGroup>
        </form>
    )
}

export default SignIn
