"use client"

import { Home, AlertTriangle, Droplets, Settings } from "lucide-react"

interface NavBarProps {
  activeTab: "home" | "alerts" | "water" | "settings"
  setActiveTab: (tab: "home" | "alerts" | "water" | "settings") => void
}

export default function NavBar({ activeTab, setActiveTab }: NavBarProps) {
  const navItems = [
    { id: "home" as const, icon: Home, label: "Home" },
    { id: "alerts" as const, icon: AlertTriangle, label: "Alerts" },
    { id: "water" as const, icon: Droplets, label: "Water" },
    { id: "settings" as const, icon: Settings, label: "Settings" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border">
      <div className="max-w-md mx-auto px-4 py-3">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "fill-primary/20" : ""}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
