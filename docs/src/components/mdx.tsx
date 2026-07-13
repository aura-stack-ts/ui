import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import * as TabsComponents from "fumadocs-ui/components/tabs"
import * as StepComponents from "fumadocs-ui/components/steps"
import { ComponentPreview } from "@/components/preview"
import { BlockPreview } from "@/components/block-preview"
import { Icons } from "@/registry/icons/index"

export function getMDXComponents(components?: MDXComponents) {
    return {
        ...defaultMdxComponents,
        ...TabsComponents,
        ...StepComponents,
        ...components,
        ComponentPreview,
        BlockPreview,
        Icons,
    } satisfies MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
    type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
