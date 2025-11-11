"use client"

import { Wifi, Bell, Shield, HelpCircle, ChevronRight, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-1">Settings</h1>
        <p className="text-muted-foreground text-sm">Manage your system</p>
      </div>

      {/* Quick Toggles */}
      <Card className="p-5 bg-card border-border shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center">
              <Bell className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-card-foreground">Push Notifications</h3>
              <p className="text-xs text-muted-foreground">Alert me of threats</p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="h-px bg-border" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-secondary/20 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-secondary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-card-foreground">Auto-Activation</h3>
              <p className="text-xs text-muted-foreground">Respond automatically</p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>
      </Card>

      {/* System Settings */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">System</h2>

        <Card className="p-4 bg-card border-border shadow-md">
          <button className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-accent/20 rounded-full flex items-center justify-center">
                <Wifi className="w-4 h-4 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-card-foreground">Wi-Fi Network</h3>
                <p className="text-xs text-muted-foreground">Home Network 5G</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </Card>

        <Card className="p-4 bg-card border-border shadow-md">
          <button className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-card-foreground">Node Pairing</h3>
                <p className="text-xs text-muted-foreground">4 devices connected</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </Card>
      </div>

      {/* Support */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Support</h2>

        <Card className="p-4 bg-card border-border shadow-md">
          <button className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-muted rounded-full flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-card-foreground">Help & Support</h3>
                <p className="text-xs text-muted-foreground">Get assistance</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </Card>
      </div>

      {/* Version */}
      <div className="pt-4 text-center">
        <p className="text-xs text-muted-foreground">EmberShield v1.2.0</p>
        <p className="text-xs text-muted-foreground">Firmware up to date</p>
      </div>
    </div>
  )
}
