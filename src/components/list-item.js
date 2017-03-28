import React from 'react'

const ListItem = (props) => {
  return (
    <li
      onClick={props.onClick}
      className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img className="w2 h2 w3-ns h3-ns br-100" src={props.image}/>
      <div className="pl3 flex-auto">
        <span className="f6 db black-70">{props.text}</span>
      </div>
    </li>
  )
}

export default ListItem
