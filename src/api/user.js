import Http from '@api/http'
import { userModule } from '@api/config/requestUrlConfig'
const { loginUrl, registerUrl, logoutUrl } = userModule
const doLogin = userInfo => {
  const bizData = {
    data: userInfo,
    url: loginUrl
  }
  return Http.post(bizData)
}

const getVcode = () => Http.get({ url: 'tyrionblog/user/v_code' })

const doRegister = userInfo => {
  const bizData = {
    data: userInfo,
    url: registerUrl
  }
  return Http.post(bizData)
}
// test
const doLogout = () => {
  const bizData = {
    url: logoutUrl
  }
  return Http.post(bizData)
}

export { doLogin, getVcode, doRegister, doLogout }
