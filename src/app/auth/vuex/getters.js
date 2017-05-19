import { isEmpty } from 'lodash'

export const isLogged = ({ token }) => !isEmpty(token)
export const currentUser = ({ currentUser }) => currentUser
export const getMessage = ({errorMessage}) => errorMessage
