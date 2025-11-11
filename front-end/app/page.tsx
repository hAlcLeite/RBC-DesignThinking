"use client"

import { useState } from "react"
import Dashboard from "@/components/dashboard"
import Alerts from "@/components/alerts"
import WaterSystem from "@/components/water-system"
import SettingsPage from "@/components/settings-page"
import NavBar from "@/components/nav-bar"

export default function EmberShieldApp() {
  const [activeTab, setActiveTab] = useState<"home" | "alerts" | "water" | "settings">("home")

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a2f3f] via-[#0d4456] to-[#125f6d] pb-20">
      <div className="max-w-md mx-auto">
        {/* Main Content */}
        <div className="min-h-screen">
          {activeTab === "home" && <Dashboard />}
          {activeTab === "alerts" && <Alerts />}
          {activeTab === "water" && <WaterSystem />}
          {activeTab === "settings" && <SettingsPage />}
        </div>

        {/* Bottom Navigation */}
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  )
}
