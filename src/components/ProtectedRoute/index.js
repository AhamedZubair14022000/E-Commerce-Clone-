import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookie.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} /> // <Route exact path='/' component={Home} this is in spread operator we use props as in app.js same step repeats in products and cart
  // we want to make this code as genral reusuable wrapper component
}

export default ProtectedRoute
