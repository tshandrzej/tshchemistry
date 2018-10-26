import { isRSAA, RSAA } from 'redux-api-middleware';

import get from 'lodash/get';

const prepareEndpoint = ({ endpoint, types }) => {
  const params = get(types, '0.meta.params');

  if (params) {
    const searchParams = new URLSearchParams();

    Object.keys(params)
      .filter(key => !!params[key])
      .forEach(key => searchParams.append(key, params[key]));

    return endpoint + '?' + searchParams.toString();
  } else {
    return endpoint;
  }
};

export const paramsMiddleware = () => next => action => {
  if (!isRSAA(action)) {
    return next(action);
  }

  const apiMiddleware = action[RSAA];

  return next({
    [RSAA]: {
      ...apiMiddleware,
      endpoint: prepareEndpoint(apiMiddleware),
    },
  });
};
