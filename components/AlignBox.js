import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import produce from 'immer';
import { changeField } from '@/store/badge'

export default function AlignBox() {
  const dispatch = useDispatch()
  const badgeSelected = useSelector(store => store.badge.badgeSelected);
  const badgeCard = useSelector(store => store.badge.badgeCard);

  const alignList = [
    { id: 'topLeft', parentClass: '', childClass: 'self-start' },
    { id: 'topRight', parentClass: 'flex-col', childClass: 'self-end' },
    { id: 'bottomRight', parentClass: '', childClass: 'self-end' },
    { id: 'bottomLeft', parentClass: 'flex-col-reverse', childClass: 'self-end' },
    { id: 'center', parentClass: 'justify-center items-center', childClass: '' },
  ]

  const onChangeAlign = (align) => () => {
    const nextBadgeList = produce(badgeCard, draft => {
      const ind = badgeCard?.findIndex(e => e?.orderId === badgeSelected?.orderId);
      draft[ind].align = align
    })
    dispatch(changeField('badgeCard', nextBadgeList))
    dispatch(changeField('badgeSelected', { ...badgeSelected, align }))
  }

  return (
    <div className='flex flex-row justify-between w-full mt-5'>
      {badgeSelected && alignList?.map(e => {
        const isSelected = e?.id === badgeSelected?.align
        return (
          <div key={e.id}
            onClick={onChangeAlign(e?.id)}
            className={`cursor-pointer h-6 w-6 rounded-md p-1 flex mr-1 ${e.parentClass} ${isSelected ? 'bg-pr' : 'bg-alignBg'}`}>
            <div className={`bg-alginDot h-2p5 w-2p5 rounded ${e.childClass}`}></div>
          </div>
        )
      })}
    </div>
  )
}
