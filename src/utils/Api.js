import axios from 'axios'
export default (method, url, recieveParams) => {
  return axios({
    method,
    url,
    data: recieveParams,
    headers: {
      accessToken: localStorage.getItem('accessToken'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid')
    }
  })
}
