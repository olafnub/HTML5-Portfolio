"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Page = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams[1];

  return (
    <>
        <h1>Welcome</h1>
        <iframe src={query} className="min-h-screen w-full border-none" />
    </>
  )
}

export default Page