import { SignInNextApp1, SignInNextApp2, SignInNextApp3, SignInNextApp4 } from "@/registry/next/app-router/sign-in/index"
import {
    SignInNextPages1,
    SignInNextPages2,
    SignInNextPages3,
    SignInNextPages4,
} from "@/registry/next/pages-router/sign-in/index"
import { SignUpNextApp1, SignUpNextApp2, SignUpNextApp3 } from "@/registry/next/app-router/sign-up/index"
import { SignUpNextPages1, SignUpNextPages2, SignUpNextPages3 } from "@/registry/next/pages-router/sign-up/index"
import { SignInReact1, SignInReact2, SignInReact3, SignInReact4 } from "@/registry/react/sign-in/index"
import { SignUpReact1, SignUpReact2, SignUpReact3 } from "@/registry/react/sign-up/index"
import {
    SignInReactRouter1,
    SignInReactRouter2,
    SignInReactRouter3,
    SignInReactRouter4,
} from "@/registry/react-router/sign-in/index"
import { SignUpReactRouter1, SignUpReactRouter2, SignUpReactRouter3 } from "@/registry/react-router/sign-up/index"
import { ProfileReact1, ProfileReact2, ProfileReact3, ProfileReact4, ProfileReact5 } from "@/registry/react/profile/index"
import {
    ProfileNextApp1,
    ProfileNextApp2,
    ProfileNextApp3,
    ProfileNextApp4,
    ProfileNextApp5,
} from "@/registry/next/app-router/profile/index"
import {
    ProfileNextPages1,
    ProfileNextPages2,
    ProfileNextPages3,
    ProfileNextPages4,
    ProfileNextPages5,
} from "@/registry/next/pages-router/profile/index"
import {
    ProfileReactRouter1,
    ProfileReactRouter2,
    ProfileReactRouter3,
    ProfileReactRouter4,
    ProfileReactRouter5,
} from "@/registry/react-router/profile/index"
import {
    PreferencesReact1,
    PreferencesReact2,
    PreferencesReact3,
    PreferencesReact4,
    PreferencesReact5,
} from "@/registry/react/preferences/index"
import {
    PreferencesNextApp1,
    PreferencesNextApp2,
    PreferencesNextApp3,
    PreferencesNextApp4,
    PreferencesNextApp5,
} from "@/registry/next/app-router/preferences/index"
import {
    PreferencesNextPages1,
    PreferencesNextPages2,
    PreferencesNextPages3,
    PreferencesNextPages4,
    PreferencesNextPages5,
} from "@/registry/next/pages-router/preferences/index"
import {
    PreferencesReactRouter1,
    PreferencesReactRouter2,
    PreferencesReactRouter3,
    PreferencesReactRouter4,
    PreferencesReactRouter5,
} from "@/registry/react-router/preferences/index"
import { IntegrationsReact1, IntegrationsReact2, IntegrationsReact3 } from "@/registry/react/integrations/index"
import { IntegrationsNextApp1, IntegrationsNextApp2 } from "@/registry/next/app-router/integrations/index"
import { IntegrationsNextPages1, IntegrationsNextPages2 } from "@/registry/next/pages-router/integrations/index"
import { IntegrationsReactRouter1, IntegrationsReactRouter2 } from "@/registry/react-router/integrations/index"

export const registry: Record<string, React.ComponentType> = {
    "sign-in-next-app": SignInNextApp1,
    "sign-in-2-next-app": SignInNextApp2,
    "sign-in-3-next-app": SignInNextApp3,
    "sign-in-4-next-app": SignInNextApp4,
    "sign-up-next-app": SignUpNextApp1,
    "sign-up-2-next-app": SignUpNextApp2,
    "sign-up-3-next-app": SignUpNextApp3,
    "sign-in-next-pages": SignInNextPages1,
    "sign-in-2-next-pages": SignInNextPages2,
    "sign-in-3-next-pages": SignInNextPages3,
    "sign-in-4-next-pages": SignInNextPages4,
    "sign-up-next-pages": SignUpNextPages1,
    "sign-up-2-next-pages": SignUpNextPages2,
    "sign-up-3-next-pages": SignUpNextPages3,
    "sign-in-react": SignInReact1,
    "sign-in-2-react": SignInReact2,
    "sign-in-3-react": SignInReact3,
    "sign-in-4-react": SignInReact4,
    "sign-up-react": SignUpReact1,
    "sign-up-2-react": SignUpReact2,
    "sign-up-3-react": SignUpReact3,
    "sign-in-react-router": SignInReactRouter1,
    "sign-in-2-react-router": SignInReactRouter2,
    "sign-in-3-react-router": SignInReactRouter3,
    "sign-in-4-react-router": SignInReactRouter4,
    "sign-up-react-router": SignUpReactRouter1,
    "sign-up-2-react-router": SignUpReactRouter2,
    "sign-up-3-react-router": SignUpReactRouter3,
    "profile-react": ProfileReact1,
    "profile-react-router": ProfileReactRouter1,
    "profile-next-app": ProfileNextApp1,
    "profile-next-pages": ProfileNextPages1,
    "profile-2-react": ProfileReact2,
    "profile-2-next-app": ProfileNextApp2,
    "profile-2-next-pages": ProfileNextPages2,
    "profile-2-react-router": ProfileReactRouter2,
    "profile-3-react": ProfileReact3,
    "profile-3-next-app": ProfileNextApp3,
    "profile-3-next-pages": ProfileNextPages3,
    "profile-3-react-router": ProfileReactRouter3,
    "profile-4-react": ProfileReact4,
    "profile-4-next-app": ProfileNextApp4,
    "profile-4-next-pages": ProfileNextPages4,
    "profile-4-react-router": ProfileReactRouter4,
    "profile-5-react": ProfileReact5,
    "profile-5-next-app": ProfileNextApp5,
    "profile-5-next-pages": ProfileNextPages5,
    "profile-5-react-router": ProfileReactRouter5,
    "preferences-react": PreferencesReact1,
    "preferences-react-router": PreferencesReactRouter1,
    "preferences-next-app": PreferencesNextApp1,
    "preferences-next-pages": PreferencesNextPages1,
    "preferences-2-react": PreferencesReact2,
    "preferences-2-next-app": PreferencesNextApp2,
    "preferences-2-next-pages": PreferencesNextPages2,
    "preferences-2-react-router": PreferencesReactRouter2,
    "preferences-3-react": PreferencesReact3,
    "preferences-3-react-router": PreferencesReactRouter3,
    "preferences-3-next-app": PreferencesNextApp3,
    "preferences-3-next-pages": PreferencesNextPages3,
    "preferences-4-react": PreferencesReact4,
    "preferences-4-react-router": PreferencesReactRouter4,
    "preferences-4-next-app": PreferencesNextApp4,
    "preferences-4-next-pages": PreferencesNextPages4,
    "preferences-5-react": PreferencesReact5,
    "preferences-5-react-router": PreferencesReactRouter5,
    "preferences-5-next-app": PreferencesNextApp5,
    "preferences-5-next-pages": PreferencesNextPages5,
    "integrations-react": IntegrationsReact1,
    "integrations-react-router": IntegrationsReactRouter1,
    "integrations-next-app": IntegrationsNextApp1,
    "integrations-next-pages": IntegrationsNextPages1,
    "integrations-2-react": IntegrationsReact2,
    "integrations-2-react-router": IntegrationsReactRouter2,
    "integrations-2-next-app": IntegrationsNextApp2,
    "integrations-2-next-pages": IntegrationsNextPages2,
    "integrations-3-react": IntegrationsReact3,
    "integrations-3-react-router": IntegrationsReactRouter2,
    "integrations-3-next-app": IntegrationsNextApp2,
    "integrations-3-next-pages": IntegrationsNextPages2,
}
