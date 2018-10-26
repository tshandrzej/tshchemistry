import { RSAA } from 'redux-api-middleware';

export const bodyMiddleware = () => next => action => {
  const callAPI = action[RSAA];

  if (typeof callAPI === 'undefined' || !callAPI.body) {
    return next(action);
  }

  return next({
    [RSAA]: {
      ...callAPI,
      headers: {
        ...callAPI.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(callAPI.body),
    },
  });
};
