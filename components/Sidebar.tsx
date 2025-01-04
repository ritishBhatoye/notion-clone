import React from 'react'
import { NewDocumentButton } from './NewDocumentButton'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'
  
export const Sidebar = () => {
    const menuOptions=(
        <>
        <NewDocumentButton/>

        </>
    );
  return (
    <div className='p-2 md:p-5 bg-gray-200 relative'>

            <div className='md:hidden'>
        <Sheet>
  <SheetTrigger>
    <MenuIcon 
    className='p-2 hover:opacity-30 rounded-lg'
size={40}
/>
  </SheetTrigger>
  <SheetContent side='left'>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      {/* Options */}
      <div >{menuOptions }</div>
     
    </SheetHeader>
  </SheetContent>
</Sheet> 
</div>
<div className='md:inline'> {menuOptions}</div>
        </div>

  )
}


