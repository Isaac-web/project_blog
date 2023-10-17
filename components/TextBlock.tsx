import { TextBlockProps } from '@/types';
import React from 'react';

const TextBlock = ({ title, content }: TextBlockProps) => {
  return (
    <div className="mb-5">
      {title && <h5 className="font-bold text-xl mb-3">{title}</h5>}
      <p>{content}</p>
    </div>
  );
};

export default TextBlock;
