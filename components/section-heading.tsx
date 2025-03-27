interface SectionHeadingProps {
  title: string
  subtitle?: string
  badge?: string
  className?: string
}

export default function SectionHeading({ title, subtitle, badge, className = "" }: SectionHeadingProps) {
  return (
    <div className={`space-y-4 text-center ${className}`}>
      {badge && (
        <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">{badge}</div>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{subtitle}</p>}
    </div>
  )
}

