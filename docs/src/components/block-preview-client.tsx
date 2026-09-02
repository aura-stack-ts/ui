"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Monitor, Tablet, Smartphone, Minimize2, Terminal, Copy, Check, Expand, RotateCcw } from "lucide-react"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

const DEVICES = [
    { id: "desktop", icon: Monitor, widthClass: "w-full" },
    { id: "tablet", icon: Tablet, widthClass: "w-[700px]" },
    { id: "mobile", icon: Smartphone, widthClass: "w-[380px]" },
] as const

const FRAMEWORKS = [
    { id: "react", label: "React / Vite", slug: "react" },
    { id: "next-app", label: "Next.js App Router", slug: "next-app" },
    { id: "next-pages", label: "Next.js Pages Router", slug: "next-pages" },
    { id: "react-router", label: "React Router", slug: "react-router" },
] as const

type DeviceId = (typeof DEVICES)[number]["id"]

interface BlockPreviewClientProps {
    name: string
    description?: string
    installCommand: string
    code: string
    lang: string
    selectedFramework: string
    onFrameworkChange: (framework: string) => void
    children: ReactNode
}

export function BlockPreviewClient({
    name,
    description,
    code,
    lang,
    selectedFramework,
    onFrameworkChange,
    children,
}: BlockPreviewClientProps) {
    const [tab, setTab] = useState<"Preview" | "Code">("Preview")
    const [device, setDevice] = useState<DeviceId>("desktop")
    const [copied, setCopied] = useState(false)
    const [refreshKey, setRefreshKey] = useState(0)
    const [fullscreen, setFullscreen] = useState(false)
    const frameRef = useRef<HTMLDivElement>(null)

    const activeDevice = DEVICES.find((d) => d.id === device)!
    const currentFramework = FRAMEWORKS.find((f) => f.id === selectedFramework) ?? FRAMEWORKS[0]

    const compactCommand = `npx shadcn add ${name}-${currentFramework.slug}`
    const installCommand = `npx shadcn add https://aura-stack-ui.vercel.app/r/${name}-${currentFramework.slug}.json`
    const label = description ?? name

    useEffect(() => {
        const onChange = () => setFullscreen(Boolean(document.fullscreenElement))
        document.addEventListener("fullscreenchange", onChange)
        return () => document.removeEventListener("fullscreenchange", onChange)
    }, [])

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(installCommand)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch {}
    }

    const toggleFullscreen = async () => {
        if (!frameRef.current) return
        if (!document.fullscreenElement) {
            await frameRef.current.requestFullscreen()
        } else {
            await document.exitFullscreen()
        }
    }

    return (
        <div className="[&~.block-preview]:mt-20 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 block-preview">
            <div className="border-b border-neutral-900">
                <div className="flex flex-col gap-2 p-3 lg:flex-row lg:items-center lg:justify-between 5xl:hidden">
                    <div className="lg:flex lg:items-center lg:gap-x-4">
                        <span className="truncate text-lg font-medium text-neutral-200">{label}</span>
                        <span className="hidden lg:text-border lg:block">|</span>
                        <div className="p-0.75 hidden border border-border rounded-lg bg-transparent lg:flex">
                            {(["Preview", "Code"] as const).map((text) => (
                                <Button
                                    key={text}
                                    type="button"
                                    size="sm"
                                    variant={tab === text ? "outline" : "ghost"}
                                    data-tab={tab}
                                    onClick={() => setTab(text)}
                                >
                                    {text}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="p-0.75 flex border border-border rounded-lg bg-transparent lg:hidden">
                            {(["Preview", "Code"] as const).map((text) => (
                                <Button
                                    key={text}
                                    type="button"
                                    size="sm"
                                    variant={tab === text ? "outline" : "ghost"}
                                    data-tab={tab}
                                    onClick={() => setTab(text)}
                                >
                                    {text}
                                </Button>
                            ))}
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="lg:flex p-0.75 hidden items-center gap-0.5 border border-border rounded-lg dark:bg-background">
                                {DEVICES.map(({ id, icon: Icon }) => (
                                    <Button
                                        key={id}
                                        type="button"
                                        aria-label={id}
                                        size="icon-sm"
                                        variant={device === id ? "outline" : "ghost"}
                                        onClick={() => setDevice(id)}
                                    >
                                        <Icon size={14} />
                                    </Button>
                                ))}
                            </div>
                            <Button
                                className="dark:bg-background lg:hidden"
                                type="button"
                                size="icon-sm"
                                variant="outline"
                                aria-label="Copy install command"
                                onClick={handleCopy}
                            >
                                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                            </Button>
                            <Button
                                className="dark:bg-background"
                                type="button"
                                aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
                                onClick={toggleFullscreen}
                                size="icon-sm"
                                variant="outline"
                            >
                                {fullscreen ? <Minimize2 size={14} /> : <Expand size={14} />}
                            </Button>
                            <Button
                                className="dark:bg-background"
                                type="button"
                                size="icon-sm"
                                variant="outline"
                                aria-label="Refresh"
                                onClick={() => setRefreshKey((k) => k + 1)}
                            >
                                <RotateCcw size={14} />
                            </Button>
                            <Select value={selectedFramework} onValueChange={(val) => onFrameworkChange(val)}>
                                <SelectTrigger className="h-8 w-40">
                                    <SelectValue placeholder="Framework" />
                                </SelectTrigger>
                                <SelectContent>
                                    {FRAMEWORKS.map((fw) => (
                                        <SelectItem key={fw.id} value={fw.id}>
                                            {fw.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button
                                className="lg:flex hidden gap-x-3 dark:bg-background"
                                type="button"
                                size="sm"
                                variant="outline"
                                onClick={handleCopy}
                            >
                                <Terminal size={13} className="text-neutral-500" />
                                <span className="whitespace-nowrap">{compactCommand}</span>
                                {copied ? (
                                    <Check size={12} className="text-green-400" />
                                ) : (
                                    <Copy size={12} className="text-neutral-500" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={frameRef}
                className={`bg-neutral-950 ${tab === "Preview" ? "p-5" : ""} ${
                    fullscreen ? "flex min-h-screen items-center justify-center" : ""
                }`}
            >
                {tab === "Preview" ? (
                    <div
                        key={refreshKey}
                        className={`mx-auto flex max-w-full items-center justify-center overflow-hidden rounded-lg ${activeDevice.widthClass}`}
                    >
                        {children}
                    </div>
                ) : (
                    <div className="p-1">
                        <DynamicCodeBlock lang={lang} code={code} />
                    </div>
                )}
            </div>
        </div>
    )
}
