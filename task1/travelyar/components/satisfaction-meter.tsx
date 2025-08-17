interface SatisfactionMeterProps {
  label: string
  value: number
}

export function SatisfactionMeter({ label, value }: SatisfactionMeterProps) {
  const getColor = (val: number) => {
    if (val >= 80) return "bg-green-500"
    if (val >= 60) return "bg-accent"
    if (val >= 40) return "bg-orange-500"
    return "bg-red-500"
  }

  const getEmoji = (val: number) => {
    if (val >= 80) return "😊"
    if (val >= 60) return "🙂"
    if (val >= 40) return "😐"
    return "😞"
  }

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
      <div className="flex items-center space-x-2">
        <div className="w-12 h-2 bg-muted rounded-full overflow-hidden">
          <div className={`h-full ${getColor(value)} transition-all duration-300`} style={{ width: `${value}%` }} />
        </div>
        <span className="text-xs font-bold text-foreground">{value}%</span>
        <span className="text-sm">{getEmoji(value)}</span>
      </div>
    </div>
  )
}
