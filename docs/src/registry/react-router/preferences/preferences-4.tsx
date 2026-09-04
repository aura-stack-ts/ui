import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"

export const Preferences = () => {
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>Manage your application preferences.</CardDescription>
            </CardHeader>
            <CardContent className="mt-4 space-y-8">
                <Separator />
                <FieldSet>
                    <FieldLegend>Accessibility</FieldLegend>
                    <FieldDescription>Adjust the accessibility settings of the application.</FieldDescription>
                    <FieldGroup>
                        <Field className="items-center" orientation="horizontal">
                            <FieldContent>
                                <FieldLabel htmlFor="reduced-motion">Reduced Motion</FieldLabel>
                                <FieldDescription>Disables transitions and animations throughout the interface.</FieldDescription>
                            </FieldContent>
                            <Switch id="reduced-motion" />
                        </Field>
                        <Field className="items-center" orientation="horizontal">
                            <FieldContent>
                                <FieldLabel htmlFor="high-contrast">High Contrast</FieldLabel>
                                <FieldDescription>
                                    Increases the contrast of the interface for better visibility.
                                </FieldDescription>
                            </FieldContent>
                            <Switch id="high-contrast" />
                        </Field>
                    </FieldGroup>
                </FieldSet>
                <Separator />
                <FieldSet>
                    <FieldLegend>Audio & Feedback</FieldLegend>
                    <FieldDescription>Manage audio settings and feedback preferences.</FieldDescription>
                    <FieldGroup>
                        <Field className="items-center" orientation="horizontal">
                            <FieldContent>
                                <FieldLabel htmlFor="in-app-sounds">In-App Sounds</FieldLabel>
                                <FieldDescription>Play audio cues for key actions and system notifications.</FieldDescription>
                            </FieldContent>
                            <Switch id="in-app-sounds" />
                        </Field>
                        <Field className="items-center" orientation="horizontal">
                            <FieldContent>
                                <FieldLabel htmlFor="haptic-feedback">Haptic Feedback</FieldLabel>
                                <FieldDescription>Provides subtle vibrations during touch interactions.</FieldDescription>
                            </FieldContent>
                            <Switch id="haptic-feedback" />
                        </Field>
                    </FieldGroup>
                </FieldSet>
                <Separator />
                <FieldSet>
                    <FieldLegend>Navigation & Layout</FieldLegend>
                    <FieldDescription>Customize the navigation and layout preferences of the application.</FieldDescription>
                    <FieldGroup>
                        <Field className="items-center" orientation="horizontal">
                            <FieldContent>
                                <FieldLabel htmlFor="collapse-sidebar">Collapse Sidebar by Default</FieldLabel>
                                <FieldDescription>
                                    Collapses the sidebar by default when the application is opened.
                                </FieldDescription>
                            </FieldContent>
                            <Switch id="collapse-sidebar" />
                        </Field>
                        <Field className="items-center" orientation="horizontal">
                            <FieldContent>
                                <FieldLabel htmlFor="tab-layout">Tab Layout Preference</FieldLabel>
                                <FieldDescription>Select how overflowing navigation tabs are displayed.</FieldDescription>
                            </FieldContent>
                            <ToggleGroup type="single" defaultValue="scroll">
                                <ToggleGroupItem value="scroll" variant="outline" aria-label="Scroll">
                                    Scroll
                                </ToggleGroupItem>
                                <ToggleGroupItem value="overflow" variant="outline" aria-label="Overflow">
                                    Overflow
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </Field>
                    </FieldGroup>
                </FieldSet>
            </CardContent>
            <CardFooter className="mt-6 space-x-2">
                <Button variant="outline" type="button">
                    Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
            </CardFooter>
        </Card>
    )
}

export default Preferences
