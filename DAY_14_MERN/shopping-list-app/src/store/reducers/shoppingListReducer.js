// src/store/reducers/shoppingListReducer.js

import { ADD_ITEM, TOGGLE_PURCHASED, ADD_DESCRIPTION, UPLOAD_IMAGE } from '../actions/types';

const initialState = {
  items: [],
};

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { id: Date.now(), name: action.payload.name, category: action.payload.category, purchased: false }],
      };
    case TOGGLE_PURCHASED:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, purchased: !item.purchased } : item
        ),
      };
    case ADD_DESCRIPTION:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.itemId ? { ...item, description: action.payload.description } : item
        ),
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.itemId ? { ...item, image: action.payload.image } : item
        ),
      };
    default:
      return state;
  }
};

export default shoppingListReducer;
