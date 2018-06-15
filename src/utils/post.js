/**
 * Created by september on 2018/6/15.
 */

import "whatwg-fetch"
import "es6-promise"

function obj2params(obj) {
  let result = ""
  let item
  for (item in obj) {
    if (obj.hasOwnProperty(item)) {
      result += "&" + item + "=" + encodeURIComponent(obj[item])
    }
  }

  if (result) {
    result = result.slice(1)
  }

  return result
}

// 发送 post 请求
function Post(url, paramsObj) {
  const result = fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Origin": 'http://localhost:3110',
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/x-www-form-urlencoded/json"
    },
    mode: "no-cors",
    body: obj2params(paramsObj)
  })

  return result
}

export default Post
