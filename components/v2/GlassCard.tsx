import { CSSProperties, ReactNode } from 'react'
import { GrainOverlay } from '../GrainOverlay'

interface GlassCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  withGrain?: boolean
}

export function GlassCard({
  children,
  className = '',
  style,
  withGrain = false,
}: GlassCardProps) {
  return (
    <div className={`glass-card ${className}`} style={style}>
      {withGrain && <GrainOverlay />}
      <div className="glass-card__content">{children}</div>

      <style>{`
        .glass-card {
          position: relative;
          background: var(--color-glass-bg);
          border: var(--border-glass);
          border-radius: var(--radius-lg);
          backdrop-filter: var(--blur-glass);
          -webkit-backdrop-filter: var(--blur-glass);
          overflow: hidden;
        }
        .glass-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, var(--color-glass-specular-from), var(--color-glass-specular-to));
          pointer-events: none;
          z-index: 1;
        }
        .glass-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-glass-glint), transparent);
          pointer-events: none;
          z-index: 2;
        }
        .glass-card__content {
          position: relative;
          z-index: 20;
        }
      `}</style>
    </div>
  )
}
