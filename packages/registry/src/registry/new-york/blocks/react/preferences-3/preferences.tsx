"use client"

import { Button } from "@/components/ui/button"
import { Sun, Moon, Monitor } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const ACCENT_COLORS = [
    { value: "indigo", label: "Indigo", className: "bg-indigo-600" },
    { value: "emerald", label: "Emerald", className: "bg-emerald-600" },
    { value: "rose", label: "Rose", className: "bg-rose-500" },
    { value: "amber", label: "Amber", className: "bg-amber-600" },
    { value: "slate", label: "Slate", className: "bg-slate-600" },
]

const FONT_SIZES = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
    { value: "x-large", label: "Extra Large" },
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

export const Preferences = () => {
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>Manage your application preferences.</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="space-y-8">
                <FieldSet>
                    <FieldLegend>Appearance</FieldLegend>
                    <FieldDescription>Customize the look and feel of the application.</FieldDescription>
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
                        <Field>
                            <FieldLabel>Accent Color</FieldLabel>
                            <FieldDescription>Applied to buttons, links, and active states.</FieldDescription>
                            <RadioGroup className="flex gap-3" defaultValue="emerald" aria-label="Accent color">
                                {ACCENT_COLORS.map(({ value, label, className }) => {
                                    const id = `accent-${value}`
                                    return (
                                        <label
                                            key={value}
                                            htmlFor={id}
                                            className="flex cursor-pointer flex-col items-center gap-2"
                                        >
                                            <RadioGroupItem className="peer size-0 sr-only" id={id} value={value} />
                                            <span
                                                className={`size-8 rounded-full shadow-sm transition-all peer-data-[state=checked]:border-foreground peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-ring peer-data-[state=checked]:ring-offset-2 peer-data-[state=checked]:ring-offset-ring ${className}`}
                                            />
                                            <span className="text-xs text-muted-foreground">{label}</span>
                                        </label>
                                    )
                                })}
                            </RadioGroup>
                        </Field>
                    </FieldGroup>
                </FieldSet>
                <Separator />
                <FieldSet>
                    <FieldLegend>Typography and Density</FieldLegend>
                    <FieldDescription>Adjust the text size and spacing throughout the application.</FieldDescription>
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Font Size</FieldLabel>
                            <FieldDescription>
                                Font size affects the size of text throughout the application, including headings, body text, and
                                labels.
                            </FieldDescription>
                            <ToggleGroup className="w-full" type="single" defaultValue="medium" spacing={4}>
                                {FONT_SIZES.map(({ value, label }) => (
                                    <ToggleGroupItem key={value} value={value} variant="outline">
                                        {label}
                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup>
                        </Field>
                        <Field>
                            <FieldLabel>Interface Density</FieldLabel>
                            <FieldDescription>Controls padding, row height, and spacing across the app.</FieldDescription>
                            <ToggleGroup className="w-full" type="single" defaultValue="comfortable" spacing={4}>
                                {INTERFACE_DENSITIES.map(({ value, label }) => (
                                    <ToggleGroupItem key={value} value={value} variant="outline">
                                        {label}
                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup>
                        </Field>
                    </FieldGroup>
                </FieldSet>
                <Separator />
                <FieldSet>
                    <FieldLegend>Localization</FieldLegend>
                    <FieldDescription>Set your preferred language and time zone for the application.</FieldDescription>
                    <FieldGroup>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel>Language</FieldLabel>
                                <Select defaultValue="en">
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
                            <Field>
                                <FieldLabel>Time Zone</FieldLabel>
                                <Select defaultValue="utc+0">
                                    <SelectTrigger>
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
                    </FieldGroup>
                </FieldSet>
                <div className="mt-14 space-x-2">
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
