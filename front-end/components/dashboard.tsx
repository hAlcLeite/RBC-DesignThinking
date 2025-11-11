"use client"

import { Shield, Shrink as Sprinkle, MapPin, Activity, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">EmberShield</h1>
          <p className="text-muted-foreground text-sm">Your home is protected</p>
        </div>
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Risk Status Card */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <h3 className="text-lg font-semibold text-card-foreground">All Clear</h3>
            </div>
            <p className="text-muted-foreground text-sm">No threats detected</p>
          </div>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20">
            <span className="text-2xl font-bold text-secondary">0</span>
          </div>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-secondary rounded-full" style={{ width: "0%" }} />
        </div>
      </Card>

      {/* Manual Control */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
            <Sprinkle className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-card-foreground">Manual Control</h3>
            <p className="text-muted-foreground text-xs">Test your system anytime</p>
          </div>
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-base rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
          Activate Sprinklers
        </Button>
      </Card>

      {/* Property Map */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-card-foreground">Property Coverage</h3>
            <p className="text-muted-foreground text-xs">4 active sprinkler nodes</p>
          </div>
        </div>

        {/* Map Grid */}
        <div className="relative aspect-square bg-muted/30 rounded-xl p-4 border border-border">
          {/* Grid */}
          <div className="absolute inset-4 grid grid-cols-2 gap-8">
            {/* Node 1 - Front Yard */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg border-2 border-secondary/50">
                  <Activity className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap">
                  Front
                </div>
              </div>
            </div>

            {/* Node 2 - Backyard */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg border-2 border-secondary/50">
                  <Activity className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap">
                  Back
                </div>
              </div>
            </div>

            {/* Node 3 - Left Side */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg border-2 border-secondary/50">
                  <Activity className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap">
                  Left
                </div>
              </div>
            </div>

            {/* Node 4 - Right Side */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg border-2 border-secondary/50">
                  <Activity className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap">
                  Right
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
