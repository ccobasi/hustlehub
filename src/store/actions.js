// actions.js
export const updateField = (field, value) => ({
  type: 'UPDATE_FIELD',
  payload: { field, value },
});
