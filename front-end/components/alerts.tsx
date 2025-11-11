"use client"

import { Clock, CheckCircle2, Flame } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Alerts() {
  const alerts = [
    {
      id: 1,
      type: "resolved",
      title: "Smoke Detected - Front Yard",
      description: "System activated successfully",
      time: "2 hours ago",
      status: "Resolved",
    },
    {
      id: 2,
      type: "resolved",
      title: "Manual Test Completed",
      description: "All sprinklers functioning normally",
      time: "1 day ago",
      status: "Completed",
    },
    {
      id: 3,
      type: "resolved",
      title: "Low Water Warning",
      description: "Tank refilled to 95%",
      time: "3 days ago",
      status: "Resolved",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-1">Alerts</h1>
        <p className="text-muted-foreground text-sm">Recent system activity</p>
      </div>

      {/* Current Status */}
      <Card className="p-6 bg-card border-border shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7 text-secondary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">System Active</h3>
            <p className="text-muted-foreground text-sm">All sensors monitoring</p>
          </div>
        </div>
      </Card>

      {/* Alert History */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">History</h2>
        {alerts.map((alert) => (
          <Card key={alert.id} className="p-4 bg-card border-border shadow-md">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                {alert.type === "resolved" ? (
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                ) : (
                  <Flame className="w-5 h-5 text-destructive" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-card-foreground leading-tight">{alert.title}</h3>
                  <Badge
                    variant="secondary"
                    className="text-xs flex-shrink-0 bg-secondary/20 text-secondary border-secondary/30"
                  >
                    {alert.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{alert.description}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{alert.time}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
