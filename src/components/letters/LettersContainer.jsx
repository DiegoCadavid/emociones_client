import React from 'react'
import { LettersItem } from './LettersItem'

export const LettersContainer = () => {
  return (
    <div className='mt-5 columns-2'>
      <LettersItem />
      <LettersItem />
      <LettersItem />
      <LettersItem />
    </div>
  )
}
