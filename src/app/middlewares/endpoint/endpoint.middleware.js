import { RSAA } from 'redux-api-middleware';
import { isFunction, trimEnd, trimStart } from 'lodash';
import {API_URL} from "../../shared/constans/api.constants";

const IGNORED = ['http://', 'https://'];

const isNonRSAA = action => !action[RSAA];
const isFunctionEndpoint = action => isFunction(action[RSAA].endpoint);
const isBlacklisted = action => IGNORED.filter(url => action[RSAA].endpoint.startsWith(url)).length;

export const endpointMiddleware = store => next => action => {
  if (isNonRSAA(action) || isFunctionEndpoint(action) || isBlacklisted(action)) {
    return next(action);
  }

  return next({
    ...action,
    [RSAA]: {
      ...action[RSAA],
      endpoint: `${trimEnd(API_URL, '/')}/${trimStart(action[RSAA].endpoint || '', '/')}`,
    },
  });
};

export default endpointMiddleware;
