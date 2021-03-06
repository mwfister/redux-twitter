import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthedUser } from './authedUser'

const AUTHED_UID = 'tylermcginnis'

export default function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_UID))
        dispatch(hideLoading())
      })
  }
}
