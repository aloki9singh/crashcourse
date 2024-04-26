// src/store/actions/shoppingListActions.js

import { ADD_ITEM, TOGGLE_PURCHASED, ADD_DESCRIPTION, UPLOAD_IMAGE } from './types';

export const addItem = (name, category) => {
  return {
    type: ADD_ITEM,
    payload: { name, category },
  };
};

export const togglePurchased = itemId => {
  return {
    type: TOGGLE_PURCHASED,
    payload: itemId,
  };
};

export const addDescription = (itemId, description) => {
  return {
    type: ADD_DESCRIPTION,
    payload: { itemId, description },
  };
};

export const uploadImage = (itemId, image) => {
  return {
    type: UPLOAD_IMAGE,
    payload: { itemId, image },
  };
};
