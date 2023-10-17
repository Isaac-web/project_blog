'use client';

import React from 'react';
import AppLink from './AppLink';
import { BreadcrumbProps } from '@/types';

const Breadcrumbs = ({ links = [], separator }: BreadcrumbProps) => {
  return (
    <div>
      {links.map((link, index) => (
        <span key={index}>
          <AppLink href={link.href}>{link.value}</AppLink>
          {index < links.length - 1 && (
            <>
              {separator}
              {!separator && <span className="mx-1">*</span>}
            </>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
