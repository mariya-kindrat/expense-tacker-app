'use client'

import Link from 'next/link';

interface NavigationLinksProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const NavigationLinks = ({ isMobile = false, onLinkClick }: NavigationLinksProps) => {
  const links = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: 'ℹ️' },
    { href: '/contact', label: 'Contact', icon: '📞' },
  ];

  if (isMobile) {
    return (
      <>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 text-sm font-medium transition-all duration-200 active:scale-95'
            onClick={onLinkClick}
          >
            <span className='text-base'>{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </>
    );
  }

  return (
    <div className='hidden md:flex items-center space-x-1'>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className='relative text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 group'
        >
          <span className='relative z-10'>{link.label}</span>
          <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
        </Link>
      ))}
    </div>
  );
};

export default NavigationLinks;