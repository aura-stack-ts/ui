"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldSeparator, FieldTitle } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const THEMES = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
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
    { value: "yyyy-mm-dd", label: "YYYY-MM-DD" },
]

const TIME_FORMAT_OPTIONS = [
    { value: "12h", label: "12h" },
    { value: "24h", label: "24h" },
]

const FIRST_DAY_OF_WEEK_OPTIONS = [
    { value: "sunday", label: "Sunday" },
    { value: "monday", label: "Monday" },
]

export const Preferences = () => {
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle>App Preferences</CardTitle>
                <CardDescription>Manage your interface settings, regional standards and other preferences.</CardDescription>
            </CardHeader>
            <Card className="mx-4">
                <FieldGroup>
                    <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>Theme</FieldTitle>
                            <FieldDescription>Applies across system navigation and UI components.</FieldDescription>
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
                    <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>Language</FieldTitle>
                            <FieldDescription>Determines application UI and dynamic messaging language.</FieldDescription>
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
                    <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>Time Zone</FieldTitle>
                            <FieldDescription>Used for scheduling, logs, and activity timestamps.</FieldDescription>
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
                    <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>Date Format</FieldTitle>
                            <FieldDescription>Preview: 24/09/2026.</FieldDescription>
                        </FieldContent>
                        <Select defaultValue="dd/mm/yyyy">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a date format" />
                            </SelectTrigger>
                            <SelectContent>
                                {DATE_FORMAT_OPTIONS.map(({ value, label }) => (
                                    <SelectItem key={value} value={value}>
                                        {label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Field>
                    <FieldSeparator />
                    <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>Time Format</FieldTitle>
                            <FieldDescription>Preview: 02:45 PM.</FieldDescription>
                        </FieldContent>
                        <Select defaultValue="12h">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a time format" />
                            </SelectTrigger>
                            <SelectContent>
                                {TIME_FORMAT_OPTIONS.map(({ value, label }) => (
                                    <SelectItem key={value} value={value}>
                                        {label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Field>
                    <FieldSeparator />
                    <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>First Day of the Week</FieldTitle>
                            <FieldDescription>Sets the starting column for calendar views.</FieldDescription>
                        </FieldContent>
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
                </FieldGroup>
            </Card>
            <CardFooter className="mt-2 space-x-2 justify-end">
                <Button variant="outline" type="button">
                    Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
            </CardFooter>
        </Card>
    )
}

export default Preferences
