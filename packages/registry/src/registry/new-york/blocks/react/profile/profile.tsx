"use client"

import { useUpdateSession } from "@aura-stack/react"
import { Upload, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { useFileUpload } from "@/hooks/use-file-upload"

export const Profile = () => {
    const { updateSession, isPending } = useUpdateSession()
    const [{ files }, { openFileDialog, removeFile, getInputProps }] = useFileUpload({ accept: "image/*" })
    const previewURL = files[0]?.preview

    const onSubmit = async (formData: FormData) => {
        await updateSession({
            session: {
                user: {
                    name: formData.get("fullName") as string,
                    username: formData.get("username") as string,
                    email: formData.get("email") as string,
                },
            },
        })
    }

    return (
        <form className="w-full space-y-8" action={onSubmit}>
            <div className="flex items-start justify-start gap-x-4">
                <Avatar className="size-16">
                    <AvatarImage src={previewURL} alt="Avatar" aria-label="Preview of uploaded image" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-4">
                    <div>
                        <h2 className="text-base font-semibold">John Doe</h2>
                        <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    </div>
                    <div className="space-x-2">
                        <div className="relative inline-block">
                            <Button onClick={openFileDialog} aria-haspopup="dialog">
                                <Upload />
                                {previewURL ? "Change" : "Upload"}
                            </Button>
                            <Input
                                {...getInputProps()}
                                className="sr-only"
                                type="file"
                                aria-label="Upload avatar"
                                tabIndex={-1}
                            />
                        </div>
                        <Button
                            size="icon"
                            variant="destructive"
                            onClick={() => removeFile(files[0]?.id)}
                            aria-label="Remove avatar"
                        >
                            <Trash2 />
                        </Button>
                    </div>
                </div>
            </div>
            <FieldGroup>
                <Field>
                    <FieldLabel>Full Name</FieldLabel>
                    <Input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        aria-label="Full Name"
                        autoComplete="name"
                    />
                </Field>
                <Field>
                    <FieldLabel>Username</FieldLabel>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        aria-label="Username"
                        autoComplete="username"
                        required
                    />
                    <FieldDescription>
                        This is your public display name. You can only change this once every 30 days.
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        aria-label="Email"
                        autoComplete="email"
                        required
                    />
                </Field>
                <Field>
                    <FieldLabel>Biography</FieldLabel>
                    <Textarea name="biography" placeholder="Enter your biography" maxLength={160} />
                </Field>
                <Field>
                    <FieldLabel>Website</FieldLabel>
                    <Input
                        type="url"
                        name="website"
                        placeholder="Enter your website URL"
                        aria-label="Website"
                        autoComplete="url"
                    />
                </Field>
            </FieldGroup>
            <div className="space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button type="submit" disabled={isPending}>
                    {isPending ? "Saving..." : "Save Changes"}
                </Button>
            </div>
        </form>
    )
}

export default Profile
