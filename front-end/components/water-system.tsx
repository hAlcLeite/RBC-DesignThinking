"use client"

import { Droplets, Gauge, Calendar, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function WaterSystem() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-1">Water System</h1>
        <p className="text-muted-foreground text-sm">Tank and pressure monitoring</p>
      </div>

      {/* Tank Level */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <Droplets className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-card-foreground">Water Tank</h3>
            <p className="text-muted-foreground text-xs">Main reservoir</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-end justify-between">
            <span className="text-4xl font-bold text-foreground">850</span>
            <span className="text-muted-foreground text-sm pb-1">/ 1000 gallons</span>
          </div>
          <Progress value={85} className="h-3" />
          <p className="text-xs text-muted-foreground">Tank capacity at 85%</p>
        </div>
      </Card>

      {/* Pump Pressure */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
            <Gauge className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-card-foreground">Pump Pressure</h3>
            <p className="text-muted-foreground text-xs">System operational</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-end justify-between">
            <span className="text-4xl font-bold text-foreground">65</span>
            <span className="text-muted-foreground text-sm pb-1">PSI</span>
          </div>
          <Progress value={65} className="h-3" />
          <p className="text-xs text-secondary flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Optimal pressure range
          </p>
        </div>
      </Card>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 bg-card border-border shadow-md">
          <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mb-3">
            <Calendar className="w-4 h-4 text-secondary" />
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">3</p>
          <p className="text-xs text-muted-foreground">Activations this month</p>
        </Card>

        <Card className="p-4 bg-card border-border shadow-md">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mb-3">
            <Droplets className="w-4 h-4 text-primary" />
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">125</p>
          <p className="text-xs text-muted-foreground">Gallons used today</p>
        </Card>
      </div>

      {/* Next Maintenance */}
      <Card className="p-5 bg-muted/30 border-border">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-card-foreground mb-1">Next Maintenance</h3>
            <p className="text-xs text-muted-foreground">System inspection scheduled for Dec 15, 2025</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
