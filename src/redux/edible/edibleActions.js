import {FILL_DATA_FROM_API, ADD_ITEM, REMOVE_ITEM} from './edibleTypes'

export const fillDataFromApi = marketData => {
  return {
    type : FILL_DATA_FROM_API,
    payload: marketData
  }
}

export const addItem = itemData => {
  return {
    type : ADD_ITEM,
    payload: itemData,

  }

}
export const removeItem = itemData => {
  return {
    type : REMOVE_ITEM,
    payload: itemData,

  }

}
