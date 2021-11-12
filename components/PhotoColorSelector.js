import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUrlBadge } from '@/utils/photo-utils'
import produce from 'immer';
import { changeField } from '@/store/badge'

export default function PhotoColorSelector() {
  const dispatch = useDispatch()

  const badgeSelected = useSelector(store => store.badge.badgeSelected);
  const badgeCard = useSelector(store => store.badge.badgeCard);
  console.log('badgeSelected', badgeSelected)

  const onChangeBadgeColor = (icon) => () => {
    const nextBadgeList = produce(badgeCard, draft => {
      const ind = badgeCard?.findIndex(e => e?.orderId === badgeSelected?.orderId);
      draft[ind].icon = icon
    })
    dispatch(changeField('badgeCard', nextBadgeList))
  }

  return (
    <div className='h-10 w-full flex flex-row'>
      {badgeSelected?.child?.map(e => (
        <img key={e?.id} onClick={onChangeBadgeColor(e?.icon)} src={getUrlBadge(e?.icon)} alt="img-color" className='h-10 w-10 rounded border mr-2 cursor-pointer' />
      ))}
    </div>
  )
}
