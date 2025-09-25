'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const AuthSection = () => {
  return (
    <div className='hidden sm:block'>
      <SignedOut>
        <SignInButton>
          <button className='relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95'>
            <div className='relative z-10 flex items-center gap-1 sm:gap-2'>
              <span>Sign In</span>
              <svg
                className='w-3 h-3 sm:w-4 sm:h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1'
                />
              </svg>
            </div>
            <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className='p-0.5 sm:p-1 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-100/50 to-green-100/50 dark:from-emerald-900/20 dark:to-green-900/20 backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30'>
          <UserButton
            appearance={{
              elements: {
                avatarBox:
                  'w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200',
                userButtonBox: 'flex items-center justify-center',
              },
            }}
          />
        </div>
      </SignedIn>
    </div>
  );
};

export default AuthSection;