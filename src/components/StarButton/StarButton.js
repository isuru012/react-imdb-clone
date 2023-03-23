import React from 'react'

export default function StarButton(props) {
  return (
    <button style={{color:'white',backgroundColor:props.color,padding:10, borderRadius:100}}>{props.name}</button>
  )
}
