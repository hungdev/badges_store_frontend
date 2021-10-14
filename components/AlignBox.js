import React from 'react'

export default function AlignBox() {
  const alignList = [
    { id: 'top-left', parentClass: '', childClass: 'self-start' },
    { id: 'top-right', parentClass: 'flex-col', childClass: 'self-end' },
    { id: 'bottom-left', parentClass: '', childClass: 'self-end' },
    { id: 'bottom-right', parentClass: 'flex-col-reverse', childClass: 'self-end' },
    { id: 'center', parentClass: 'justify-center items-center', childClass: '' },
  ]
  return (
    <div className='flex flex-row justify-between w-full mt-5'>
      {alignList?.map(e => (
        <div key={e.id} className={`cursor-pointer bg-alignBg h-6 w-6 rounded-md p-1 flex mr-1 ${e.parentClass}`}>
          <div className={`bg-alginDot h-2p5 w-2p5 rounded ${e.childClass}`}></div>
        </div>
      ))}
    </div>
  )
}
