"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const SignUp = () => {
    return (
        <Card className="max-w-lg px-6 py-8 sm:p-8 relative gap-6">
            <CardHeader className="text-center gap-6 p-0">
                <div className="flex flex-col gap-1">
                    <CardTitle className="text-2xl font-medium text-card-foreground">Welcome to Aura Stack</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground font-normal">
                        Fill in the form below to create your account
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <form>
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
                        </div>
                        <Field className="gap-4">
                            <Button type="submit" size="lg" className="rounded-lg h-10 hover:bg-primary/80 cursor-pointer">
                                Create Account
                            </Button>
                            <FieldDescription className="px-6 text-center text-sm leading-snug">
                                By creating an account, you agree to our <a href="#">Terms of Service</a> and{" "}
                                <a href="#">Privacy Policy</a>.
                            </FieldDescription>
                            <FieldDescription className="text-center text-sm font-normal text-muted-foreground">
                                Already have an account?{" "}
                                <a href="#" className="font-medium text-card-foreground">
                                    Sign in
                                </a>
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}

export default SignUp
