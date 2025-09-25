'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

interface MobileAuthSectionProps {
  onClose: () => void;
}

const MobileAuthSection = ({ onClose }: MobileAuthSectionProps) => {
  return (
    <div className='pt-3 border-t border-gray-200/50 dark:border-gray-600/50'>
      <SignedOut>
        <SignInButton>
          <button
            className='w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95'
            onClick={onClose}
          >
            <span>Sign In</span>
            <svg
              className='w-4 h-4'
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
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className='flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-emerald-100/50 to-green-100/50 dark:from-emerald-900/20 dark:to-green-900/20 backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30'>
          <UserButton
            appearance={{
              elements: {
                avatarBox:
                  'w-8 h-8 hover:scale-110 transition-transform duration-200',
                userButtonBox: 'flex items-center justify-center',
              },
            }}
          />
        </div>
      </SignedIn>
    </div>
  );
};

export default MobileAuthSection;