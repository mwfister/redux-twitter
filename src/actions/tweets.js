import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { saveTweet, saveLikeToggle } from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const ADD_TWEET = 'ADD_TWEET'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
}

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  }
}

export function handleAddTweet(tweet) {
  return (dispatch) => {
    dispatch(showLoading())
    saveTweet(tweet)
      .then((res) => dispatch(addTweet(res)))
      .then(() => dispatch(hideLoading()))
      .catch((err) => `There was an Error: ${err}`)
  }
}

function toggleLike({ id, authedUser }) {
  return {
    type: TOGGLE_LIKE,
    id,
    authedUser,
  }
}

export function handleToggleLike(info) {
  return (dispatch) => {
    dispatch(toggleLike(info))
    saveLikeToggle(info)
      .catch((err) => {
        dispatch(toggleLike(info))
        return `There was an Error: ${err}`
      })
  }
}
