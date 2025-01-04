'use client';


import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/nextjs';
import React from 'react'

export const Header = () => {
    const {user}=useUser ();
  return (
    <div className=''>
        {user && (
            <h1>{user?.firstName} {`'s`} Space
            </h1>
        )}
{/* Breadcrums */}
<div>
    <SignedOut>
        <SignInButton/>
    </SignedOut>
    <SignedIn>
         <SignOutButton/>
    </SignedIn>
</div>
    </div>
  )
}


