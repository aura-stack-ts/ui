import * as React from "react"

export function Button(props: React.ComponentProps<"button">) {
    return <button {...props} className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white" />
}
