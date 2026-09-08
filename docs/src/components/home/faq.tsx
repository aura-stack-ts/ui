import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "../ui/accordion"

export const FAQ = () => {
    return (
        <div className="w-11/12 mx-auto text-center space-y-6">
            <div className="space-y-3">
                <h2 className="text-3xl font-semibold text-foreground">Frequently asked questions</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Browse questions by topic. Click any question to reveal the answer.
                </p>
            </div>
            <Accordion className="max-w-2xl mx-auto text-left" type="single" collapsible defaultValue="what-is-aura-ui">
                <AccordionItem value="what-is-aura-ui">
                    <AccordionTrigger>What is Aura UI?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        Aura UI provides components and application blocks built specifically for Aura Stack features.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="need-aura-ui">
                    <AccordionTrigger>Do I need Aura Auth?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        Aura UI authentication components and blocks are designed to integrate directly with Aura Auth.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="where-does-code-live">
                    <AccordionTrigger>Does the component code live in my project?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        Yes. Components are installed directly into your codebase, allowing you to modify and extend them as
                        needed.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="supported-frameworks">
                    <AccordionTrigger>Which frameworks are supported?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        Aura UI provides implementations for React, Next.js, React Router, Nuxt, SvelteKit, Astro, and TanStack
                        Start.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
