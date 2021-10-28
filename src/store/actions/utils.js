import { updateObject } from "../utility";

export const updateObjectInLocalStorage = (objectName, updatedValues) => {
  const oldObject = JSON.stringify(localstorage.getItem(objectName));
  const newObject = updateObject(oldObject, updatedValues);
  localstorage.setItem(objectName, newObject);
};
