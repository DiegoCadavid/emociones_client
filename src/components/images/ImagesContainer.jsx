import React from 'react'
import ImagesItem from './ImagesItem'

const ImagesContainer = ({ images = [] }) => {
  return (
    <div className='mt-5 grid grid-cols-images-container gap-3'>
      {images.map( image => {
        return <ImagesItem  key={image.id} url={image.url} info={image.info} createAt={image.createAt} />
      } )}
    </div>
  )
}

export default ImagesContainer