export const omitEmpty = (request) => Object.keys(request)
  .filter((k) => (request[k] !== '') && (request[k] !== null) && (request[k] !== undefined))
  .reduce((a, k) => ({ ...a, [k]: request[k] }), {});