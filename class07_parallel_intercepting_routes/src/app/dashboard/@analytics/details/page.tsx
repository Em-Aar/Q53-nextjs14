import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-96 h-96 bg-blue-200 border shadow-md'>
    <h2>Analytics Details</h2>
    <Link href={'/dashboard/'} className='bg-gray-900 px-4 py-2 rounded-md text-white'>Analytics Summary</Link>
  </div>
  )
}
