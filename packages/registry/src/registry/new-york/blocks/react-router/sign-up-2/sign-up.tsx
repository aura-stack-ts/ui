"use client"

import { Link } from "react-router"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSignUp } from "@aura-stack/react-router/client"

export const SignUp = () => {
    const { signUp, isPending } = useSignUp()

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const username = formData.get("username") as string
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        const confirmPassword = formData.get("confirmPassword") as string

        if (password !== confirmPassword) {
            return
        }
        await signUp({
            payload: {
                username,
                email,
                password,
            },
            redirect: false,
        })
    }

    return (
        <section className="w-full max-w-lg flex flex-col items-center justify-center gap-y-6">
            <Card className="w-full py-8 gap-6">
                <CardHeader className="text-center gap-6 p-0">
                    <div className="flex flex-col gap-1">
                        <CardTitle className="text-2xl font-medium text-card-foreground">Welcome to Aura Stack</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground font-normal">
                            Fill in the form below to create your account
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="w-full">
                    <form method="POST" onSubmit={onSubmit}>
                        <FieldGroup className="gap-6">
                            <div className="flex flex-col gap-4">
                                <Field className="gap-1.5">
                                    <FieldLabel htmlFor="username" className="text-sm">
                                        Username
                                    </FieldLabel>
                                    <Input
                                        id="username"
                                        type="text"
                                        name="username"
                                        required
                                        placeholder="johndoe"
                                        aria-label="Username"
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
                                        placeholder="name@example.com"
                                        aria-label="Email"
                                        className="dark:bg-background h-9 shadow-xs"
                                    />
                                </Field>
                                <FieldGroup className="flex-row">
                                    <Field className="gap-1.5">
                                        <FieldLabel className="text-sm" htmlFor="password">
                                            Password
                                        </FieldLabel>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            aria-label="Password"
                                            className="dark:bg-background h-9 shadow-xs"
                                        />
                                    </Field>
                                    <Field className="gap-1.5">
                                        <FieldLabel className="text-sm" htmlFor="confirmPassword">
                                            Confirm Password
                                        </FieldLabel>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            name="confirmPassword"
                                            required
                                            aria-label="Confirm Password"
                                            className="dark:bg-background h-9 shadow-xs"
                                        />
                                    </Field>
                                </FieldGroup>
                            </div>
                            <Field className="gap-4">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="rounded-lg h-10 hover:bg-primary/80 cursor-pointer"
                                    disabled={isPending}
                                >
                                    Create Account
                                </Button>

                                <FieldDescription className="mb-0 text-center text-sm font-normal text-muted-foreground">
                                    Already have an account?{" "}
                                    <Link to="#" className="font-medium text-card-foreground">
                                        Sign in
                                    </Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            <FieldDescription className="max-w-sm text-center text-sm leading-snug">
                By creating an account, you agree to our <Link to="#">Terms of Service</Link> and{" "}
                <Link to="#">Privacy Policy</Link>.
            </FieldDescription>
        </section>
    )
}

export default SignUp
