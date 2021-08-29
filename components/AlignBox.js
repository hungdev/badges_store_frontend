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
    <div className='flex flex-row justify-between w-full'>
      {alignList?.map(e => (
        <div key={e.id} className={`cursor-pointer bg-alignBg h-8 w-8 rounded-md p-1 flex ${e.parentClass}`}>
          <div className={`bg-alginDot h-3 w-3 rounded ${e.childClass}`}></div>
        </div>
      ))}
    </div>
  )
}
