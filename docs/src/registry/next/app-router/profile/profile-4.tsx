"use client"

import { useUpdateSession } from "@aura-stack/next/client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Trash2, Upload, Phone, AtSign } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
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

const LANGUAGES = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "zh", label: "Chinese" },
]

export const Profile = () => {
    const { updateSession, isPending } = useUpdateSession()
    const [{ files }, { openFileDialog, getInputProps, removeFile }] = useFileUpload({
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
            <form className="w-full space-y-8" action={onSubmit}>
                <CardContent className="space-y-8">
                    <div className="flex items-start justify-start gap-x-4">
                        <div className="flex items-start justify-start gap-x-4">
                            <Avatar className="size-16">
                                <AvatarImage src={previewURL} alt="Avatar" aria-label="Preview of uploaded image" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-base font-semibold">John Doe</h2>
                                    <span className="block text-sm text-muted-foreground">
                                        PNG or JPG up to 2 MB. Square crops look best.
                                    </span>
                                </div>
                                <div className="space-x-2">
                                    <div className="relative inline-block">
                                        <Button type="button" onClick={openFileDialog} aria-haspopup="dialog">
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
                                        type="button"
                                        onClick={() => removeFile(files[0]?.id)}
                                        aria-label="Remove avatar"
                                    >
                                        <Trash2 />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <FieldSet>
                        <FieldLegend>Personal Information</FieldLegend>
                        <FieldDescription>Update your personal information below.</FieldDescription>
                        <FieldGroup>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel>First Name</FieldLabel>
                                    <Input
                                        type="text"
                                        name="fistName"
                                        placeholder="Enter your first name"
                                        aria-label="First Name"
                                        autoComplete="given-name"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel>Last Name</FieldLabel>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        placeholder="Enter your last name"
                                        aria-label="Last Name"
                                        autoComplete="family-name"
                                        required
                                    />
                                </Field>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel>Username</FieldLabel>
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
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel>Phone Number</FieldLabel>
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
                            </div>
                        </FieldGroup>
                    </FieldSet>
                    <Separator />
                    <FieldSet>
                        <FieldLegend>Regional Settings</FieldLegend>
                        <FieldDescription>Choose your preferred timezone and language for the application.</FieldDescription>
                        <FieldGroup>
                            <div className="grid grid-cols-2 gap-4">
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
                                <Field>
                                    <FieldLabel>Language</FieldLabel>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {LANGUAGES.map(({ value, label }) => (
                                                <SelectItem key={value} value={value}>
                                                    {label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </div>
                        </FieldGroup>
                    </FieldSet>
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
