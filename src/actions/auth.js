import { RequestHandlerLogin } from '../helpers'
import ENVIRONMENT from '../environments/environment'
export const GetDataUser = async () => {
  return await RequestHandlerLogin(`${ENVIRONMENT.API_URL}/customer`,'GET')}
export const login = async (user) => {
  return await RequestHandlerLogin(`${ENVIRONMENT.API_URL}/userauth?username=${user.username}&password=${user.password}`,'GET')}
export const getOrder = async () => {
  return await RequestHandlerLogin(`${ENVIRONMENT.API_URL}/order`,'GET')
}
