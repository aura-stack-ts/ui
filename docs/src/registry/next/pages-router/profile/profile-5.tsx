"use client"

import { useUpdateSession } from "@aura-stack/next/pages/client"
import { AtSign, Phone, X, Upload } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldSeparator, FieldTitle } from "@/components/ui/field"
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
    const [{ files }, { openFileDialog, removeFile, getInputProps }] = useFileUpload({ accept: "image/*" })
    const previewURL = files[0]?.preview

    const onSubmit = async (formData: FormData) => {
        const firstName = formData.get("firstName") as string
        const lastName = formData.get("lastName") as string
        const fullName = `${firstName} ${lastName}`
        await updateSession({
            session: {
                user: {
                    name: fullName,
                    email: formData.get("email") as string,
                },
            },
        })
    }

    return (
        <Card className="w-full max-w-3xl mx-auto">
            <form className="space-y-6" action={onSubmit}>
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>Update your personal information and account settings below.</CardDescription>
                </CardHeader>
                <Card className="mx-4">
                    <FieldGroup>
                        <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Profile Photo</FieldTitle>
                                <FieldDescription>Upload a photo to represent yourself.</FieldDescription>
                            </FieldContent>
                            <div className="flex items-center justify-start gap-x-4">
                                <Avatar className="size-12">
                                    <AvatarImage src={previewURL} alt="Avatar" aria-label="Preview of uploaded image" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="relative inline-block">
                                    <Button variant="outline" type="button" onClick={openFileDialog} aria-haspopup="dialog">
                                        <Upload />
                                        Change
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
                                    variant="outline"
                                    type="button"
                                    onClick={() => removeFile(files[0]?.id)}
                                    aria-label="Remove avatar"
                                >
                                    <X />
                                    Remove
                                </Button>
                            </div>
                        </Field>
                        <FieldSeparator />
                        <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Full Name</FieldTitle>
                                <FieldDescription>Used to display your name in the application.</FieldDescription>
                            </FieldContent>
                            <Input
                                type="text"
                                name="firstName"
                                placeholder="Enter your first name"
                                aria-label="First Name"
                                autoComplete="given-name"
                            />
                        </Field>
                        <FieldSeparator />
                        <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Email</FieldTitle>
                                <FieldDescription>Used to send you notifications and updates.</FieldDescription>
                            </FieldContent>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                aria-label="Email"
                                autoComplete="email"
                                required
                            />
                        </Field>
                        <FieldSeparator />
                        <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Username</FieldTitle>
                                <FieldDescription>Used to log in to your account.</FieldDescription>
                            </FieldContent>
                            <InputGroup>
                                <InputGroupInput
                                    type="text"
                                    name="username"
                                    placeholder="Enter your username"
                                    aria-label="Username"
                                    autoComplete="username"
                                />
                                <InputGroupAddon>
                                    <AtSign />
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>
                        <FieldSeparator />
                        <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Phone Number</FieldTitle>
                                <FieldDescription>Used for two-factor authentication and account recovery.</FieldDescription>
                            </FieldContent>
                            <InputGroup>
                                <InputGroupInput
                                    type="tel"
                                    name="phone"
                                    placeholder="+1 (555) 123-4567"
                                    aria-label="Phone Number"
                                    autoComplete="tel"
                                />
                                <InputGroupAddon>
                                    <Phone />
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>
                        <FieldSeparator />
                        <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Basic Information</FieldTitle>
                                <FieldDescription>Basic details about the user.</FieldDescription>
                            </FieldContent>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel>Role</FieldLabel>
                                    <Select defaultValue="software-engineer">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="software-engineer">Software Engineer</SelectItem>
                                            <SelectItem value="product-manager">Product Manager</SelectItem>
                                            <SelectItem value="designer">Designer</SelectItem>
                                            <SelectItem value="qa-engineer">QA Engineer</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <Field>
                                    <FieldLabel>Website</FieldLabel>
                                    <InputGroup>
                                        <InputGroupAddon>
                                            <InputGroupText>https://</InputGroupText>
                                        </InputGroupAddon>
                                        <InputGroupInput
                                            type="url"
                                            name="website"
                                            placeholder="Enter your website URL"
                                            aria-label="Website"
                                            autoComplete="url"
                                            maxLength={30}
                                        />
                                    </InputGroup>
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
                        </Field>
                        <FieldSeparator />
                        <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Biography</FieldTitle>
                                <FieldDescription>Write a short biography about yourself (max 160 characters).</FieldDescription>
                            </FieldContent>
                            <Textarea name="biography" placeholder="Enter your biography" maxLength={160} />
                        </Field>
                    </FieldGroup>
                </Card>
                <CardFooter className="mt-6 space-x-2 justify-end">
                    <Button variant="outline" type="button">
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isPending}>
                        {isPending ? "Saving..." : "Save Changes"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default Profile
