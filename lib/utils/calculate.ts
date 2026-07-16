export function calculateTimeOfDay(): string {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return "Good morning"
  if (hour >= 12 && hour < 17) return "Good afternoon"
  if (hour >= 17 && hour < 21) return "Good evening"
  return "Good night"
}

export function calculateDaysSince(isoDateString: string | null | undefined): number | null {
  if (!isoDateString) return null

  const past = new Date(isoDateString)
  const now = new Date()

  // Strip time — we want calendar days, not hours
  past.setHours(0, 0, 0, 0)
  now.setHours(0, 0, 0, 0)

  const diffMs = now.getTime() - past.getTime()
  return Math.floor(diffMs / (1000 * 60 * 60 * 24))
}