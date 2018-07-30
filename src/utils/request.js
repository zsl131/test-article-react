import fetch from 'dva/fetch';
import configApi from './configApi';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}


export default function request(apiCode, params, isBase, options) {

  // console.log("configApi", configApi);

  const defaultOption = {
    method: 'GET',
    headers: {
      'auth-token': configApi.authToken,
      'api-code': apiCode
    }
  }
  params = JSON.stringify(params);
  console.log(params, configApi.api.baseRequest+params);
  // console.log("encode after aes", params);
  return fetch(isBase?configApi.api.baseRequest+params : configApi.api.queryOrSubmit+params, options || defaultOption)
    .then(checkStatus)
    .then(parseJSON)
    // .then(checkDatas)
    .then(data => ({ data }))
    .catch(err => ({ err }));
    // .catch(catchError);
}
