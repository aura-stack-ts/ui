import { useUpdateSession } from "@aura-stack/react-router/client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

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
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your account settings and preferences.</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent>
                <form className="w-full space-y-8" action={onSubmit}>
                    <FieldGroup>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel>First Name</FieldLabel>
                                <Input
                                    type="text"
                                    name="firstName"
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
                            <FieldLabel>Phone Number</FieldLabel>
                            <Input
                                type="tel"
                                name="phone"
                                placeholder="+1 (555) 123-4567"
                                aria-label="Phone Number"
                                autoComplete="tel"
                            />
                        </Field>
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
                    <div className="space-x-2">
                        <Button variant="outline">Cancel</Button>
                        <Button type="submit" disabled={isPending}>
                            {isPending ? "Saving..." : "Save Changes"}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default Profile
