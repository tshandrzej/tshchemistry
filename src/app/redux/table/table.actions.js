import {RSAA} from 'redux-api-middleware';

import * as types from './table.types';

export const fetchList = () => ({
    [RSAA]: {
        endpoint: `/elements`,
        method: 'GET',
        types: [types.FETCH_LIST_REQUEST, types.FETCH_LIST_SUCCESS, types.FETCH_LIST_FAILURE],
    },
});

export const addElement = (values) => {
    return {
        [RSAA]: {
            types: [
                types.ADD_ELEMENT_REQUEST,
                {
                    type: types.ADD_ELEMENT_SUCCESS,
                    payload: (action, state, res) => res.json(),
                },
                types.ADD_ELEMENT_FAILURE,
            ],
            endpoint: `/elements`,
            method: 'POST',
            body: values,
        },
    };
};

export const editElement = (values, elementId) => {
    return {
        [RSAA]: {
            types: [
                types.EDIT_ELEMENT_REQUEST,
                {
                    type: types.EDIT_ELEMENT_SUCCESS,
                    meta: {elementId},
                },
                types.EDIT_ELEMENT_FAILURE,
            ],
            endpoint: `/branches/${elementId}`,
            method: 'PUT',
            body: values,
        },
    };
};
