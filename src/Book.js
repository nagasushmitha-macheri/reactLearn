import React from 'react'

export const Book=({title="no title provided", author="no author provided", pages=0, freeBookmark}) =>{
    return(
      <section>
        <h3>{title}</h3>
        <p> By: {author}</p>
        <p> Pages: {pages}</p>
        <p>Free Bookmark today: {freeBookmark? 'yes!': 'no!'}</p>
      </section>
  
    )
  }