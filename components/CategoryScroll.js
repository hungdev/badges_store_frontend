import React, { useState } from 'react'

export default function CategoryScroll({ list, onSelectCategory }) {
  const [btn, setBtn] = useState()
  const onClickBtn = (id) => () => {
    setBtn(id)
    onSelectCategory?.(id)
  }

  return (
    <div className='overflow-hidden mt-8 min-h-45'>
      <div className='flex flex-row overflow-x-auto pb-4 mb-4 min-h-45'>
        {list?.map((e, i) => <div key={e?.id || i} onClick={onClickBtn(e?.id)}
          className={`
          whitespace-nowrap mr-2 border rounded px-2 py-1 cursor-pointer 
          ${btn === e?.id ? 'bg-black' : 'bg-gray-200'}
          ${btn === e?.id ? 'text-white' : 'text-black'}
          `}>
          {e?.name}
        </div>)}
      </div>
    </div>
  )
}
