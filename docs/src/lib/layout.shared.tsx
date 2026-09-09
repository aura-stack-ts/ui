import { appName, gitConfig } from "./shared"
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

export function baseOptions(): BaseLayoutProps {
    return {
        nav: {
            title: appName,
            url: "/",
        },
        githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    }
}
