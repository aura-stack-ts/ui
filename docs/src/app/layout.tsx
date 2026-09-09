import { RootProvider } from "fumadocs-ui/provider/next"
import { Inter } from "next/font/google"
import { AuthLayout } from "@/components/auth-layout"
import "@/app/global.css"

const inter = Inter({
    subsets: ["latin"],
})

export default function Layout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <AuthLayout>
                    <RootProvider>{children}</RootProvider>
                </AuthLayout>
            </body>
        </html>
    )
}
