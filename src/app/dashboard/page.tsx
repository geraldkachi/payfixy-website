"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { useRouter } from 'next/navigation';
import { getAdminDetails } from '@/utils/shared';

const links = [
    { name: "Home", icon: "<HomeIcon />", path: "/home" },
    { name: "Profile", icon:" <UserIcon />", path: "/profile" },
    { name: "Settings", icon: "<CogIcon />", path: "/settings" },
  ];
const Page = () => {
  const router = useRouter()

  const user = getAdminDetails();

  return (
    <div className="flex">
    <Sidebar links={links} />
    <main className="flex-1 bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
            <p className="mt-4">This is where your main content will go.</p>

            <div className="flex items-center justify-between">
              <div>{user?.first_name}  {user?.last_name}</div>

              <div onClick={() => {
                router.push('/kyc')
              }}>
                Start KYC
              </div>
            </div>
      </div>
    </main>
  </div>
  )
}

export default Page