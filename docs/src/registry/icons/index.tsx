"use client"
import { AtlassianIcon } from "@/components/icons/atlassian"
import { BitbucketIcon } from "@/components/icons/bitbucket"
import { DiscordIcon } from "@/components/icons/discord"
import { DribbbleIcon } from "@/components/icons/dribbble"
import { DropboxIcon } from "@/components/icons/dropbox"
import { FigmaIcon } from "@/components/icons/figma"
import { GitHubIcon } from "@/components/icons/github"
import { GitLabIcon } from "@/components/icons/gitlab"
import { NotionIcon } from "@/components/icons/notion"
import { PinterestIcon } from "@/components/icons/pinterest"
import { SpotifyIcon } from "@/components/icons/spotify"
import { StravaIcon } from "@/components/icons/strava"
import { TwitchIcon } from "@/components/icons/twitch"
import { XIcon } from "@/components/icons/x"
import type { ComponentType } from "react"

export const icons: Record<string, ComponentType> = {
    atlassian: AtlassianIcon,
    github: GitHubIcon,
    bitbucket: BitbucketIcon,
    discord: DiscordIcon,
    dribbble: DribbbleIcon,
    dropbox: DropboxIcon,
    figma: FigmaIcon,
    gitlab: GitLabIcon,
    notion: NotionIcon,
    pinterest: PinterestIcon,
    spotify: SpotifyIcon,
    strava: StravaIcon,
    twitch: TwitchIcon,
    x: XIcon,
}

export const Icons = () => {
    return (
        <figure className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {Object.values(icons).map((Icon, index) => (
                <figcaption
                    className="flex items-center justify-center aspect-square border border-border rounded-md"
                    key={index}
                >
                    <Icon key={index} />
                </figcaption>
            ))}
        </figure>
    )
}
