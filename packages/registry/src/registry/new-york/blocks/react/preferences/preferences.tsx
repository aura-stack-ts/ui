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
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "zh", label: "Chinese" },
]

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

const FIRST_DAY_OF_WEEK_OPTIONS = [
    { value: "sunday", label: "Sunday" },
    { value: "monday", label: "Monday" },
]

export const Preferences = () => {
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Update your personal information and account settings below.</CardDescription>
            </CardHeader>
            <Card className="mx-4">
                <FieldGroup>
                    <Field className="px-4 grid grid-cols-2" orientation="horizontal">
                        <FieldContent>
                            <FieldTitle>Theme</FieldTitle>
                            <FieldDescription>Select your preferred theme.</FieldDescription>
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
                            <FieldDescription>Select your preferred language.</FieldDescription>
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
                            <FieldDescription>Select your preferred time zone.</FieldDescription>
                        </FieldContent>
                        <Select defaultValue="est">
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
                            <FieldTitle>First Day of the Week</FieldTitle>
                            <FieldDescription>Select the first day of the week.</FieldDescription>
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
            <CardFooter className="space-x-2 justify-end">
                <Button variant="outline" type="button">
                    Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
            </CardFooter>
        </Card>
    )
}

export default Preferences
