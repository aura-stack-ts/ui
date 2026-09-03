"use client"

import { useUpdateSession } from "@aura-stack/next/client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useFileUpload } from "@/hooks/use-file-upload"

const TIMEZONES = [
    {
        group: "North America",
        items: [
            { value: "est", label: "Eastern Standard Time" },
            { value: "cst", label: "Central Standard Time" },
            { value: "mst", label: "Mountain Standard Time" },
            { value: "pst", label: "Pacific Standard Time" },
        ],
    },
    {
        group: "Europe & Africa",
        items: [
            { value: "gmt", label: "Greenwich Mean Time" },
            { value: "cet", label: "Central European Time" },
            { value: "eet", label: "Eastern European Time" },
            { value: "cat", label: "Central Africa Time" },
        ],
    },
    {
        group: "Asia",
        items: [
            { value: "msk", label: "Moscow Time" },
            { value: "ist", label: "India Standard Time" },
            { value: "cst_china", label: "China Standard Time" },
            { value: "jst", label: "Japan Standard Time" },
        ],
    },
]

export const Profile = () => {
    const { updateSession, isPending } = useUpdateSession()
    const [{ files }, { openFileDialog, getInputProps }] = useFileUpload({
        accept: "image/*",
        maxSize: 2 * 1024 * 1024,
        maxFiles: 1,
    })
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
        <Card className="w-full max-w-2xl mx-auto space-y-8">
            <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>Update your profile information and avatar.</CardDescription>
            </CardHeader>
            <form className="w-full space-y-8" action={onSubmit}>
                <CardContent className="space-y-8">
                    <div className="flex items-start justify-start gap-x-4">
                        <Avatar className="size-16">
                            <AvatarImage src={previewURL} alt="Avatar" aria-label="Preview of uploaded image" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                            <div className="relative inline-block">
                                <Button variant="outline" aria-haspopup="dialog" onClick={openFileDialog}>
                                    {previewURL ? "Change Avatar" : "Upload Avatar"}
                                </Button>
                                <Input
                                    {...getInputProps()}
                                    className="sr-only"
                                    type="file"
                                    aria-label="Upload avatar"
                                    tabIndex={-1}
                                />
                            </div>
                            <span className="block text-sm text-muted-foreground">
                                PNG or JPG up to 2 MB. Square crops look best.
                            </span>
                        </div>
                    </div>
                    <FieldGroup>
                        <div className="grid sm:grid-cols-2 gap-4">
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
                                <FieldLabel>Role</FieldLabel>
                                <Input
                                    type="text"
                                    name="role"
                                    placeholder="e.g Software Engineer"
                                    aria-label="Role"
                                    autoComplete="role"
                                    required
                                />
                            </Field>
                        </div>
                        <Field>
                            <FieldLabel>Biography</FieldLabel>
                            <Textarea name="biography" placeholder="Enter your biography" maxLength={160} />
                            <FieldDescription>Maximum 160 characters</FieldDescription>
                        </Field>
                        <Field>
                            <FieldLabel>Timezone</FieldLabel>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                    {TIMEZONES.map(({ group, items }) => (
                                        <SelectGroup key={group}>
                                            <SelectLabel>{group}</SelectLabel>
                                            {items.map(({ value, label }) => (
                                                <SelectItem key={value} value={value}>
                                                    {label}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>
                    </FieldGroup>
                </CardContent>
                <CardFooter className="space-x-2 justify-end">
                    <Button variant="outline">Cancel</Button>
                    <Button type="submit" disabled={isPending}>
                        {isPending ? "Saving..." : "Save Changes"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default Profile
