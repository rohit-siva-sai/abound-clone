import Link from 'next/link'
import React from 'react'

const FooterBottom = () => {
  return (
    <div className='md:px-36' >
      <div className='py-8' >
       <p className='font-light'>Power by Render</p>
       <p className='font-light'>© All Rights Reserved, Fintern Limited</p>
      </div>
      <div className='text-[15px]' >
      <p className="font-light">Abound is a trading name of Fintern Limited</p>
      <p className="font-light">Fintern Limited is registered in England & Wales No. <span className='font-bold' >12472034</span> </p>
      <p className="font-light">Spread a Smile is a registered charity No.  <span className='font-bold' >1152205</span></p>
      <p className="font-light">Fintern Limited, trading as Abound, is authorised and regulated by the Financial Conduct Authority, Firm Reference Number <span className='font-bold' >929244</span></p>
      <p className="font-light md:pr-28 ">
      Fintern Limited is a member of Cifas – the UK's leading anti-fraud association, and we are registered with the Information Commissioner's Office in compliance with the Data Protection (Charges and Information) Regulations 2018 under registration <span className='font-bold' >ZA747930</span>. See our <Link href={""} className='text-green-800 underline decoration-green-800 underline-offset-2 font-medium' >Privacy notice</Link> for further details of how we use customers' data.
      </p>
      </div>
    </div>
  )
}

export default FooterBottom
