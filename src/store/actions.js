// Action types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SUBMIT_FORM = 'SUBMIT_FORM';

// actions.js
export const updateField = (field, value) => ({
  type: 'UPDATE_FIELD',
  payload: { field, value },
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
});
