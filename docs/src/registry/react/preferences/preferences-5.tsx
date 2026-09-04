"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldContent, FieldDescription, FieldLabel, FieldSeparator, FieldTitle } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const THEMES = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
]

const INTERFACE_DENSITIES = [
    { value: "compact", label: "Compact" },
    { value: "comfortable", label: "Comfortable" },
    { value: "spacious", label: "Spacious" },
]

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

const DATE_FORMAT_OPTIONS = [
    { value: "dd/mm/yyyy", label: "DD/MM/YYYY" },
    { value: "mm/dd/yyyy", label: "MM/DD/YYYY" },
    { value: "yyyy/mm/dd", label: "YYYY/MM/DD" },
]

export const Preferences = () => {
    return (
        <section className="w-full max-w-3xl mx-auto space-y-8">
            <div>
                <CardHeader>
                    <CardTitle>Theme & Interface</CardTitle>
                    <CardDescription>
                        Customize your experience by selecting your preferred theme and interface density.
                    </CardDescription>
                </CardHeader>
                <Card className="mt-4">
                    <Field className="px-4 grid grid-cols-2 items-center!" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>Theme</FieldTitle>
                            <FieldDescription>Automatically switches based on your OS system settings.</FieldDescription>
                        </FieldContent>
                        <Select defaultValue="system">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a theme" />
                            </SelectTrigger>
                            <SelectContent>
                                {THEMES.map(({ value, label }) => (
                                    <SelectItem className="w-full" key={value} value={value}>
                                        {label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Field>
                    <FieldSeparator />
                    <Field className="px-4 grid grid-cols-2 items-center!" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>Interface Density</FieldTitle>
                            <FieldDescription>Adjusts row padding and visual spacing throughout the app.</FieldDescription>
                        </FieldContent>
                        <Select defaultValue="comfortable">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a density" />
                            </SelectTrigger>
                            <SelectContent>
                                {INTERFACE_DENSITIES.map(({ value, label }) => (
                                    <SelectItem className="w-full" key={value} value={value}>
                                        {label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Field>
                </Card>
            </div>
            <div>
                <CardHeader>
                    <CardTitle>Localization & Formatting</CardTitle>
                    <CardDescription>
                        Set your preferred language, time zone, date format, and number format to tailor the application to your
                        needs.
                    </CardDescription>
                </CardHeader>
                <Card className="mt-4">
                    <Field className="px-4 grid grid-cols-2 items-center!" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>Language</FieldTitle>
                        </FieldContent>
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
                    <FieldSeparator />
                    <Field className="px-4 grid grid-cols-2 items-center!" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>Time Zone</FieldTitle>
                        </FieldContent>
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
                    <FieldSeparator />
                    <Field className="px-4 grid grid-cols-2 items-center!" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>Date Format</FieldTitle>
                            <FieldDescription>Preview: 13/06/2026</FieldDescription>
                        </FieldContent>
                        <Select defaultValue="dd/mm/yyyy">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a date format" />
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
                </Card>
            </div>
            <div>
                <CardHeader>
                    <CardTitle>Accessibility</CardTitle>
                    <CardDescription>Customize motion, contrast, and audio feedback for better usability.</CardDescription>
                </CardHeader>
                <Card className="mt-4">
                    <Field className="px-4 items-center!" orientation="horizontal">
                        <FieldContent>
                            <FieldLabel htmlFor="reduced-motion">Reduced Motion</FieldLabel>
                            <FieldDescription>Disables transitions and animations throughout the interface.</FieldDescription>
                        </FieldContent>
                        <Switch id="reduced-motion" />
                    </Field>
                    <FieldSeparator />
                    <Field className="px-4 items-center!" orientation="horizontal">
                        <FieldContent>
                            <FieldLabel htmlFor="high-contrast">High Contrast</FieldLabel>
                            <FieldDescription>Increases the contrast of the interface for better visibility.</FieldDescription>
                        </FieldContent>
                        <Switch id="high-contrast" />
                    </Field>
                    <FieldSeparator />
                    <Field className="px-4 items-center!" orientation="horizontal">
                        <FieldContent>
                            <FieldLabel htmlFor="in-apps-sounds">In-App Sounds</FieldLabel>
                            <FieldDescription>Play audio cues for key actions and system notifications.</FieldDescription>
                        </FieldContent>
                        <Switch id="in-apps-sounds" />
                    </Field>
                </Card>
            </div>
            <div className="mt-14 space-x-2">
                <Button variant="outline" type="button">
                    Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
            </div>
        </section>
    )
}

export default Preferences
