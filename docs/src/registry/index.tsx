import { NextSignIn1, NextSignIn2, NextSignIn3, NextSignIn4 } from "@/registry/next/sign-in/index"
import { NextSignUp1 } from "@/registry/next/sign-up/index"
import { ReactSignIn1, ReactSignIn2, ReactSignIn3, ReactSignIn4 } from "@/registry/react/sign-in/index"
import { ReactSignUp1 } from "@/registry/react/sign-up/index"
import {
    ReactRouterSignIn1,
    ReactRouterSignIn2,
    ReactRouterSignIn3,
    ReactRouterSignIn4,
} from "@/registry/react-router/sign-in/index"
import { ReactRouterSignUp1 } from "@/registry/react-router/sign-up/index"

export const registry: Record<string, React.ComponentType> = {
    "sign-in-1-next": NextSignIn1,
    "sign-in-2-next": NextSignIn2,
    "sign-in-3-next": NextSignIn3,
    "sign-in-4-next": NextSignIn4,
    "sign-up-1-next": NextSignUp1,
    "sign-in-1-react": ReactSignIn1,
    "sign-in-2-react": ReactSignIn2,
    "sign-in-3-react": ReactSignIn3,
    "sign-in-4-react": ReactSignIn4,
    "sign-up-1-react": ReactSignUp1,
    "sign-in-1-react-router": ReactRouterSignIn1,
    "sign-in-2-react-router": ReactRouterSignIn2,
    "sign-in-3-react-router": ReactRouterSignIn3,
    "sign-in-4-react-router": ReactRouterSignIn4,
    "sign-up-1-react-router": ReactRouterSignUp1,
}
