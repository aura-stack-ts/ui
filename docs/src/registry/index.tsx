import { SignInNextApp1, SignInNextApp2, SignInNextApp3, SignInNextApp4 } from "@/registry/next/app-router/sign-in/index"
import {
    SignInNextPages1,
    SignInNextPages2,
    SignInNextPages3,
    SignInNextPages4,
} from "@/registry/next/pages-router/sign-in/index"
import { SignUpNextApp1, SignUpNextApp2, SignUpNextApp3 } from "@/registry/next/app-router/sign-up/index"
import { SignUpNextPages1, SignUpNextPages2, SignUpNextPages3 } from "@/registry/next/pages-router/sign-up/index"
import { ReactSignIn1, ReactSignIn2, ReactSignIn3, ReactSignIn4 } from "@/registry/react/sign-in/index"
import { ReactSignUp1, ReactSignUp2, ReactSignUp3 } from "@/registry/react/sign-up/index"
import {
    ReactRouterSignIn1,
    ReactRouterSignIn2,
    ReactRouterSignIn3,
    ReactRouterSignIn4,
} from "@/registry/react-router/sign-in/index"
import { ReactRouterSignUp1, ReactRouterSignUp2 } from "@/registry/react-router/sign-up/index"

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
    "sign-in-react": ReactSignIn1,
    "sign-in-2-react": ReactSignIn2,
    "sign-in-3-react": ReactSignIn3,
    "sign-in-4-react": ReactSignIn4,
    "sign-up-react": ReactSignUp1,
    "sign-up-2-react": ReactSignUp2,
    "sign-up-3-react": ReactSignUp3,
    "sign-in-react-router": ReactRouterSignIn1,
    "sign-in-2-react-router": ReactRouterSignIn2,
    "sign-in-3-react-router": ReactRouterSignIn3,
    "sign-in-4-react-router": ReactRouterSignIn4,
    "sign-up-react-router": ReactRouterSignUp1,
    "sign-up-2-react-router": ReactRouterSignUp2,
}
