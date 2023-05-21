import Link from 'next/link';
import React from 'react'
import { GiSiren } from 'react-icons/gi';


const ReadMore = () => {
  return (
    <div className='flex justify-center text-[17px] items-center space-x-2 py-2 bg-[#feb82b]' >
        <GiSiren className='text-red-500 text-xl' />
      <p>We'll never ask you to send us money to get your loan, read more</p>
      <Link href={""}>
        <div className='underline text-green-800  decoration-green-800 hover:opacity-60' >here</div>
      </Link>
    </div>
  )
}

export default ReadMore
