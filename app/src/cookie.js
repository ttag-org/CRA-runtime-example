export const get = (key) => {
  const cookie = document.cookie.split(';')
  .map((c) => c.split('='))
  .find(([cookieName]) => cookieName.trim() === key)
  return cookie && cookie[1];
}

export const set = (key, value) => {
  document.cookie = `${key}=${value}`;
}
