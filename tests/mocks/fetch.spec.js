// took from here: https://rjzaworski.com/2015/06/testing-api-requests-from-window-fetch

export function jsonOk (body) {
  var mockResponse = new window.Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-type': 'application/json'
    }
  });

  return new Promise.resolve(mockResponse);
}

export function jsonError (status, body) {
  var mockResponse = new window.Response(JSON.stringify(body), {
    status: status,
    headers: {
      'Content-type': 'application/json'
    }
  });

  return new Promise.reject(mockResponse);
}