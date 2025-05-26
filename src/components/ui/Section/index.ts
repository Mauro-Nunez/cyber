import { FC, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export const Section: FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <section className={className}>
      {children}
    </section>
  );
};