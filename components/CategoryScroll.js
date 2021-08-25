import React, { useState } from 'react'

export default function CategoryScroll({ list }) {
  const [btn, setBtn] = useState()
  const onClickBtn = (i) => () => setBtn(i)

  return (
    <div className='overflow-hidden mt-8'>
      <div className='flex flex-row overflow-x-auto pb-4'>
        {list?.map((e, i) => <div key={i} onClick={onClickBtn(i)}
          className={`
          whitespace-nowrap mr-2 border rounded px-2 py-1 cursor-pointer 
          ${btn === i ? 'bg-black' : 'bg-gray-200'}
          ${btn === i ? 'text-white' : 'text-black'}
          `}>
          {e}
        </div>)}
      </div>
    </div>
  )
}
