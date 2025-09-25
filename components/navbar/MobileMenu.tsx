'use client'

import NavigationLinks from './NavigationLinks';
import MobileAuthSection from './MobileAuthSection';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
        ? 'max-h-96 opacity-100 pb-3 sm:pb-4'
        : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
      <div className='px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-600/50 mt-2 shadow-lg'>
        <NavigationLinks isMobile={true} onLinkClick={onClose} />
        <MobileAuthSection onClose={onClose} />
      </div>
    </div>
  );
};

export default MobileMenu;