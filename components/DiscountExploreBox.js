import React, { useEffect } from 'react'
import Image from 'next/image'
import { getBadges, setBadgeSelected } from '@/store/badge'
import { useDispatch, useSelector } from 'react-redux';
import { getUrlBadge } from '@/utils/photo-utils'
import checkboxBlack from '../public/images/checkbox_black.png'

export default function DiscountExploreBox() {
  const dispatch = useDispatch()
  const badges = useSelector(store => store.badge.badges);
  const badgeSelected = useSelector(store => store.badge.badgeSelected);

  useEffect(() => {
    dispatch(getBadges())
  }, [dispatch])


  const onSelectBadge = (e) => () => dispatch(setBadgeSelected(e))

  return (
    <div className='flex flex-row flex-wrap overflow-auto pt-6'>
      {badges?.map((e, i) => {
        const isSelected = badgeSelected?.id === e?.id
        return (
          <div key={i} className={`rounded-lg border mr-5 mb-5 width-explore-badge relative ${isSelected && 'border-black'} `} onClick={onSelectBadge(e)}>
            {isSelected &&
              <div className='absolute top-1 right-1 z-10'>
                <Image src={checkboxBlack} alt="Explore" width={16} height={16} layout="fixed" />
              </div>}
            <img src={getUrlBadge(e?.icon)} className='' alt='explore-badge' />
          </div>
        )
      }
      )}
    </div>
  )
}
