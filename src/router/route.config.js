import Container from '../components/Container.vue'
import SignUp from '../components/signUpAndIn/SignUp.vue'
import SignIn from '../components/signUpAndIn/SignIn.vue'
import Detail from '../components/detail/Detail.vue'
import Mail from '../components/mail/Mail.vue'
import All from '../components/All.vue'
import UserCenter from '../components/userCenter/UserCenter.vue'
import ShoppingC from '../components/shoppingCart/ShoppingC.vue'

export default {

  '': {
    component: All,
    subRoutes: {

      '/signUp': {
        component: SignUp,
        subRoutes: {}
      },
      '/signIn': {
        component: SignIn,
        subRoutes: {}
      },
      '/container': {
        component: Container,
        subRoutes: {
          '/mail': {
            component: Mail,
            subRoutes: {}
          },
          '/product/detail/:id': {
            component: Detail,
            subRoutes: {}
          },
          '/userCenter': {
            component: UserCenter,
            subRoutes: {
              'shoppingC': {
                component: ShoppingC

              }
            }
          }
        }

      }
    }
  }

// '/logout':{
  // //    delete anything
  // //     清空全局的变量user
  // }
}
