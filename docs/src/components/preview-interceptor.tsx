import { useEffect } from "react"
import type { PropsWithChildren } from "react"

export const AuthPreviewInterceptor = ({ children }: PropsWithChildren) => {
    useEffect(() => {
        const originalFetch = window.fetch

        window.fetch = async (input, init) => {
            const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url

            if (url.includes("/api/auth/")) {
                return new Response(JSON.stringify({ message: "Blocked by preview mode" }), {
                    status: 200,
                    headers: { "Content-Type": "application/json" },
                })
            }
            return originalFetch(input, init)
        }

        return () => {
            window.fetch = originalFetch
        }
    }, [])

    return children
}
