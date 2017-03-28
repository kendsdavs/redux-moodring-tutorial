import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { merge } from 'ramda'

const initialState = {
  list: [{
    status: 'Happy',
    image: '/happy.png',
    updated: '2017-03-12'
  }],
  moods: [{
    value: 5,
    text: 'ECSTATIC',
    image: '/ecstatic.png'
  }, {
    value: 4,
    text: 'HAPPY',
    image: '/happy.png'
  }, {
    value: 3,
    text: 'So So',
    image: '/so-so.png'
  }, {
    value: 2,
    text: 'SAD',
    image: '/sad.png'
  }, {
    value: 1,
    text: 'DEPRESSED',
    image: '/depressed.png'
  }]
}

const store = createStore(
  (state=initialState, action) => {
    return merge(state, action.payload)
  }
)

export default store
