export const validateMobileNo = (input) => {
  return /^[0-9]+$/.test(input);
};
export const validatePinCode = (input) => {
  return /^[0-9]+$/.test(input) && input.length === 6;
};
export const validateOnlyString = (input) => {
  return /^[a-z A-Z]+$/.test(input);
};
