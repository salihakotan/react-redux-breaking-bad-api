import React from 'react'
import { Link } from 'react-router-dom'

function Item({item}) {
  return (
    <Link className='quotes-link' to={`/quotes/${item.id}`}>
                <div><q>{item.quote} --- <strong> ({item.author})</strong></q></div>
                </Link>
  )
}

export default Item