import React from 'react'

import { map, find, propEq, append } from 'ramda'
import { Link, Redirect } from 'react-router-dom'
import ListItem from '../components/list-item'

import {connect} from 'react-redux'

const EntryPage = (props) => {
  return (
    <div className="pa4">
      <h2>New Status</h2>
      <small>Select new status</small>
      <ul>
        {map(mood => {
          return (
            <ListItem
              key={mood.value}
              title={mood.text}
              {...mood}
              onClick={props.select(mood.value, props.moods, props.list, props.history)}
            />
          )
        }, props.moods)}
      </ul>
    </div>
  )
}

const connector = connect((state) => {
  return {
    list: state.list,
    moods: state.moods,
    page: state.page || 'new'
  }
}, (dispatch) => {
  return {
    select: (value, moods, list, history) => {
      return (e) => {
        const mood = find(propEq('value', value), moods)
        dispatch({type: 'UPDATE', payload: {
          list: append({
            image: mood.image,
            status: mood.text,
            updated: new Date().toString()
          }, list),
          page: 'current'
        }})
        history.push('/')
      }
    }
  }
})

export default connector(EntryPage)
