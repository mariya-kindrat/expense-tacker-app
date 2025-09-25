'use client'

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './navbar/ThemeToggle';
import AuthSection from './navbar/AuthSection';
import NavigationLinks from './navbar/NavigationLinks';
import MobileMenu from './navbar/MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tooggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className='sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 
    backdrop-blur-xl border-b border-gray-200/50
     dark:border-gray-600/50 shadow-lg shadow-gray-900/5 dark:shadow-black/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-14 sm:h-16'>
          <div className='flex items-center'>
            <Link
              href="/"
              className='flex items-center gap-2 sm:gap-3 flex-shrink-0 group transition-all duration-300 hover:scale-105'
              onClick={closeMobileMenu}
            >
              <div
                className='w-7 h-7 sm:w-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3'>
                <span className='text-white text-xs sm:text-sm md:text-lg font-bold'>
                  Logo
                </span>
              </div>
              <span className='text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
                <span className='hidden sm:inline'>Budget Tracker AI</span>
                <span className='sm:hidden'>Budget Tracker</span>
              </span>
            </Link>
          </div>

          <NavigationLinks />

          <div className='flex items-center space-x-1 sm:space-x-2'>
            <div className='p-0.5 sm:p-1'>
              <ThemeToggle />
            </div>

            <AuthSection />

            <button
              onClick={tooggleMobileMenu}
              className='md:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-all duration-200 active:scale-95'
              aria-label='Toggle mobile menu'
            >
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''
                  }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>

          </div>
        </div>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </div>
    </nav>
  )
}

export default Navbar