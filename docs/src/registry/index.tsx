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
import { ProfileReact1, ProfileReact2 } from "@/registry/react/profile/index"
import { ProfileNextApp1, ProfileNextApp2 } from "@/registry/next/app-router/profile/index"
import { ProfileNextPages1, ProfileNextPages2 } from "@/registry/next/pages-router/profile/index"
import { ProfileReactRouter1, ProfileReactRouter2 } from "@/registry/react-router/profile/index"

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
}
