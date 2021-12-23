export const BASE_API_URL = `https://127.0.0.1:8000`;

const getBaseConfig = method => ({
  method,
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' }
});


const serializeResponse = response => {
  return response
    .text()
    .then(text => {
      return text ? JSON.parse(text) : {};
    })
    .then(data => ({ status: response.status, ok: response.ok, data }));
};

export const get = (url, options) =>
  fetch(`${BASE_API_URL}/${url}`, { ...getBaseConfig('get'), ...options })
    .then(serializeResponse)

export const post = (url, data, options) =>
  fetch(`${BASE_API_URL}/${url}`, {
    ...getBaseConfig('post'),
    ...options,
    body: JSON.stringify(data)
  })
    .then(serializeResponse)

