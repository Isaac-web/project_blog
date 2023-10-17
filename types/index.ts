import { ReactNode } from 'react';

export interface AppLinkProp {
  children: ReactNode;
  href: string;
  block?: boolean;
  className?: string;
}

export interface TextBlockProps {
  title?: string;
  content: string;
}

interface BreadcrumbLink {
  value: string;
  href: string;
}

export interface BreadcrumbProps {
  links: BreadcrumbLink[];
  separator?: ReactNode;
}
