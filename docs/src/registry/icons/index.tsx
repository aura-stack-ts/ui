import { AtlassianIcon } from "@/components/icons/atlassian"
import { AuthentikIcon } from "@/components/icons/authentik"
import { BitbucketIcon } from "@/components/icons/bitbucket"
import { ClickUpIcon } from "@/components/icons/click-up"
import { DiscordIcon } from "@/components/icons/discord"
import { DribbbleIcon } from "@/components/icons/dribbble"
import { DropboxIcon } from "@/components/icons/dropbox"
import { FigmaIcon } from "@/components/icons/figma"
import { GitHubIcon } from "@/components/icons/github"
import { GitLabIcon } from "@/components/icons/gitlab"
import { GoogleIcon } from "@/components/icons/google"
import { HubspotIcon } from "@/components/icons/hubspot"
import { HuggingFaceIcon } from "@/components/icons/huggingface"
import { MailchimpIcon } from "@/components/icons/mailchimp"
import { NotionIcon } from "@/components/icons/notion"
import { PinterestIcon } from "@/components/icons/pinterest"
import { SpotifyIcon } from "@/components/icons/spotify"
import { StravaIcon } from "@/components/icons/strava"
import { TwitchIcon } from "@/components/icons/twitch"
import { XIcon } from "@/components/icons/x"
import type { ComponentType } from "react"

export const icons: Record<string, ComponentType> = {
    atlassian: AtlassianIcon,
    authentik: AuthentikIcon,
    clickup: ClickUpIcon,
    bitbucket: BitbucketIcon,
    discord: DiscordIcon,
    dribbble: DribbbleIcon,
    dropbox: DropboxIcon,
    figma: FigmaIcon,
    github: GitHubIcon,
    gitlab: GitLabIcon,
    google: GoogleIcon,
    hubspot: HubspotIcon,
    huggingface: HuggingFaceIcon,
    mailchimp: MailchimpIcon,
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
                <div className="flex items-center justify-center aspect-square border border-border rounded-md" key={index}>
                    <Icon key={index} />
                </div>
            ))}
        </figure>
    )
}
