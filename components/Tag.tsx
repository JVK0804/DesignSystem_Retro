import { ReactNode } from 'react'

type TagSize = 'md' | 'sm'

interface TagProps {
  children: ReactNode
  size?: TagSize
  className?: string
}

export function Tag({ children, size = 'md', className = '' }: TagProps) {
  return (
    <>
      <span className={`ds-tag ds-tag--${size} ${className}`}>{children}</span>

      <style>{`
        .ds-tag {
          display: inline-flex;
          align-items: center;
          background: var(--color-primary-subtle);
          border: 1px solid var(--color-primary-border);
          border-radius: var(--radius-sm);
          color: var(--color-primary);
          font-family: var(--font-body);
          font-weight: 500;
          white-space: nowrap;
        }
        .ds-tag--md { height: 28px; padding: 0 var(--space-3); font-size: var(--font-size-caption); letter-spacing: 0em; }
        .ds-tag--sm { height: 22px; padding: 0 10px; font-size: var(--font-size-label); letter-spacing: 0.08em; text-transform: uppercase; }
      `}</style>
    </>
  )
}
