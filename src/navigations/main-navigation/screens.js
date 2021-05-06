import { MAIN, SIGNIN, SIGNUP } from '../../constants'
import { SplashScreen, SignInScreen, SignUpScreen } from '../../screens'

export const screens = [
  {
    name: MAIN,
    component: SplashScreen,
  },
  {
    name: SIGNIN,
    component: SignInScreen,
  },
  {
    name: SIGNUP,
    component: SignUpScreen,
  },
]
