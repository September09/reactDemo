/**
 * Created by september on 2018/6/15.
 */

export default class HttpUtil {
  /**
     * get 请求
     * @param url
     * @returns {Promise}
     */
  static getData(url) {
    const result = fetch(url, {
      credentials: "include",
      headers: {
        "Accept": "application/json, text/plain, */*"
      },
    })
    return result
  }
  /**
     * post 请求
     * @param url
     * @param params
     * @returns {Promise}
     */
  static postData(url, paramsObj) {
    const result = fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(paramsObj)
    })
    return result
  }
}
