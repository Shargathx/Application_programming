import type { ReactNode } from 'react';

interface PageSectionProps {
  title: string;
  children: ReactNode;
}

export function PageSection({ title, children }: PageSectionProps) {
  return (
    <section
      style={{
        margin: '1.5rem 0',
        padding: '1rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}
