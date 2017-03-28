import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Card from '../components/card'
import {nth} from 'ramda'

const CurrentPage = (props) => {
  return (
    <div>
      <Card
        image={props.current.image}
        title={props.current.status}>
          Last Updated: 3 hours ago
      </Card>
    </div>
  )
}
// perhaps this connector is the same as using setState in React.createClass
const connector = connect((state) => {
  return {
    current: nth(-1, state.list)
  }
})

export default connector(CurrentPage)
