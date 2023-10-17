import { AppLinkProp } from '@/types';

const AppLink = ({ children, href, block = false, className }: AppLinkProp) => {
  return (
    <a
      className={`link ${block ? 'block' : ''} ${className || ''}`}
      href={href}
    >
      {children}
    </a>
  );
};

export default AppLink;
