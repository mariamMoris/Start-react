import React from 'react'
import error from "../assests/imgs/error.avif"

export default function Notfound() {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <img src={error} alt="error" className='w-50' />
    </div>
  )
}
