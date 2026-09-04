import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Sun, Moon, Monitor } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const LANGUAGES = [
    { value: "en", label: "English (EN)" },
    { value: "es", label: "Spanish (ES)" },
    { value: "fr", label: "French (FR)" },
    { value: "de", label: "German (DE)" },
    { value: "zh", label: "Chinese (ZH)" },
]

const TIMEZONES = [
    {
        group: "North America",
        items: [
            { value: "utc-8", label: "UTC-8 (Pacific Zone)" },
            { value: "utc-7", label: "UTC-7 (Mountain Zone)" },
            { value: "utc-6", label: "UTC-6 (Central Zone)" },
            { value: "utc-5", label: "UTC-5 (Eastern Zone)" },
        ],
    },
    {
        group: "Europe & Africa",
        items: [
            { value: "utc+0", label: "UTC+0 (Greenwich Zone)" },
            { value: "utc+1", label: "UTC+1 (Central European Zone)" },
            { value: "utc+2", label: "UTC+2 (Eastern European Zone)" },
            { value: "utc+1", label: "UTC+1 (Central Africa Zone)" },
        ],
    },
    {
        group: "Asia",
        items: [
            { value: "utc+3", label: "UTC+3 (Moscow Zone)" },
            { value: "utc+5:30", label: "UTC+5:30 (India Zone)" },
            { value: "utc+8", label: "UTC+8 (China Zone)" },
            { value: "utc+9", label: "UTC+9 (Japan Zone)" },
        ],
    },
]

const FIRST_DAY_OF_WEEK_OPTIONS = [
    { value: "sunday", label: "Sunday" },
    { value: "monday", label: "Monday" },
]

const DATE_FORMAT_OPTIONS = [
    { value: "mm/dd/yyyy", label: "MM/DD/YYYY" },
    { value: "dd/mm/yyyy", label: "DD/MM/YYYY" },
    { value: "yyyy/mm/dd", label: "YYYY/MM/DD" },
]

export const Preferences = () => {
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>Manage your application preferences.</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="space-y-8">
                <FieldGroup>
                    <Field>
                        <FieldLabel>Theme</FieldLabel>
                        <ToggleGroup className="w-full grid grid-cols-3" type="single" defaultValue="system" spacing={4}>
                            <ToggleGroupItem className="h-auto aspect-video" value="light" variant="outline">
                                <Sun />
                                Light
                            </ToggleGroupItem>
                            <ToggleGroupItem className="h-auto aspect-video" value="dark" variant="outline">
                                <Moon />
                                Dark
                            </ToggleGroupItem>
                            <ToggleGroupItem className="h-auto aspect-video" value="system" variant="outline">
                                <Monitor />
                                System
                            </ToggleGroupItem>
                        </ToggleGroup>
                        <FieldDescription>
                            System follows your OS setting and switches automatically at sunrise and sunset.
                        </FieldDescription>
                    </Field>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel>Language</FieldLabel>
                            <Select defaultValue="en">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a language" />
                                </SelectTrigger>
                                <SelectContent>
                                    {LANGUAGES.map(({ value, label }) => (
                                        <SelectItem className="w-full" key={value} value={value}>
                                            {label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>
                        <Field>
                            <FieldLabel>Time Zone</FieldLabel>
                            <Select defaultValue="utc+0">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a time zone" />
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
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel>First Day of the Week</FieldLabel>
                            <Select defaultValue="monday">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a time zone" />
                                </SelectTrigger>
                                <SelectContent>
                                    {FIRST_DAY_OF_WEEK_OPTIONS.map(({ value, label }) => (
                                        <SelectItem className="w-full" key={value} value={value}>
                                            {label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>
                        <Field>
                            <FieldLabel>Date Format</FieldLabel>
                            <Select defaultValue="mm/dd/yyyy">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a time zone" />
                                </SelectTrigger>
                                <SelectContent>
                                    {DATE_FORMAT_OPTIONS.map(({ value, label }) => (
                                        <SelectItem className="w-full" key={value} value={value}>
                                            {label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>
                    </div>
                    <Field className="items-center" orientation="horizontal">
                        <FieldContent>
                            <FieldLabel htmlFor="reduced-motion">Reduced Motion</FieldLabel>
                            <FieldDescription>Disables transitions and animations throughout the interface.</FieldDescription>
                        </FieldContent>
                        <Switch id="reduced-motion" />
                    </Field>
                    <Field className="items-center" orientation="horizontal">
                        <FieldContent>
                            <FieldLabel htmlFor="in-app-sounds">In App Sounds</FieldLabel>
                            <FieldDescription>Enables or disables sounds within the application.</FieldDescription>
                        </FieldContent>
                        <Switch id="in-app-sounds" />
                    </Field>
                </FieldGroup>
                <div className="space-x-2">
                    <Button variant="outline" type="button">
                        Cancel
                    </Button>
                    <Button type="submit">Save Changes</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Preferences
