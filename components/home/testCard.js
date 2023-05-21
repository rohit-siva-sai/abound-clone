import React from 'react'

const TestCard = ({name,imageUrl,review,text}) => {
  return (
    <div className='w-fit h-44 mx-6 my-6   px-8 rounded-xl py-5 shadow-md  shadow-black' >
      <div className='flex space-x-4' >
        <picture>
            <img src={imageUrl} alt="" className='w-14 rounded-full' />
        </picture>
        <div className='flex flex-col ' >
            <p className='font-semibold -pb-1' >{name}</p>
            <p className='text-sm font-bold pb-2 text-green-800' >{review}</p>
            <picture>
                <img src="https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/62f211d3150fef76c8fcb533_Group%2010197.svg" alt="" />
            </picture>
        </div>
      </div>
      <p className='text-sm pt-2 text-gray-600 font-light' >{text}</p>
    </div>
  )
}

export default TestCard
