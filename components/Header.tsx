'use client';


import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/nextjs';
import React from 'react'

export const Header = () => {
    const {user}=useUser ();
  return (
    <div className='flex items-center justify-between p-5'>
        {user && (
            <h1 className='text-2xl'>{user?.firstName} {`'s`} Space
            </h1>
        )}
{/* Breadcrums */}
<div>
    <SignedOut>
        <SignInButton/>
    </SignedOut>
    <SignedIn>
        <div className='flex items-center'>
        <UserButton/>
    
         <SignOutButton/>
</div>
    </SignedIn>
</div>
    </div>
  )
}


