"use client"

import { Link } from "react-router"
import { useSignIn } from "@aura-stack/react-router/client"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldDescription } from "@/components/ui/field"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AtlassianIcon } from "@/components/icons/atlassian"
import { BitbucketIcon } from "@/components/icons/bitbucket"
import { FigmaIcon } from "@/components/icons/figma"
import { GitHubIcon } from "@/components/icons/github"
import { GitLabIcon } from "@/components/icons/gitlab"
import { NotionIcon } from "@/components/icons/notion"

const providers = [
    { name: "GitHub", id: "github", icon: <GitHubIcon /> },
    { name: "GitLab", id: "gitlab", icon: <GitLabIcon /> },
    { name: "Bitbucket", id: "bitbucket", icon: <BitbucketIcon /> },
    { name: "Atlassian", id: "atlassian", icon: <AtlassianIcon /> },
    { name: "Figma", id: "figma", icon: <FigmaIcon /> },
    { name: "Notion", id: "notion", icon: <NotionIcon /> },
]

export const SignIn = () => {
    const { signIn, isPending } = useSignIn()

    const onSignIn = async (provider: string) => {
        await signIn(provider, { redirect: true })
    }

    return (
        <Card className="max-w-lg px-6 py-8 sm:p-12 relative gap-6">
            <CardHeader className="text-center gap-6 p-0">
                <div className="flex flex-col gap-1">
                    <CardTitle className="text-2xl font-medium text-card-foreground">Welcome to Aura Stack</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground font-normal">
                        Choose a provider below to sign in to your account
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <FieldGroup className="gap-4">
                    {providers.map((provider) => (
                        <Button
                            variant="outline"
                            type="button"
                            key={provider.id}
                            className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
                            disabled={isPending}
                            onClick={() => onSignIn(provider.id)}
                        >
                            {provider.icon}
                            Continue with {provider.name}
                        </Button>
                    ))}
                    <Field className="space-y-2">
                        <FieldDescription className="text-center text-sm font-normal text-muted-foreground">
                            Don&apos;t have an account?{" "}
                            <Link to="/sign-up" className="font-medium text-card-foreground">
                                Sign Up
                            </Link>
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </CardContent>
        </Card>
    )
}

export default SignIn
