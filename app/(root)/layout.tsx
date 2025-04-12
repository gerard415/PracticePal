import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { redirect } from "next/navigation";

import Logout from "@/components/Logout";

import { isAuthenticated } from "@/lib/actions/auth.actions";

const RootLayout = async ({children}: {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  const logOut = () => {

  }

  return (
    <div className='root-layout'>
      <nav className='flex  justify-between'>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PracticePal</h2>
        </Link>
        <div>
          <Logout/>
        </div>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout