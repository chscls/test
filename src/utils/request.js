import fetch from 'dva/fetch';



function parseText(response) {
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

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  options.mode='cors';
  options.credentials ='omit';

  return fetch(url, options)
    .then(checkStatus)
    .then(parseText)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}


