// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
export const validateEmail = (email) => {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) === true) {
    return true;
  }
  return false;
};
export const validatePassword = (password) => {
  if (password < 8) {
    return false;
  }
  return true;
};

export const validateField = (field) => {
  if (field == null) {
    return false;
  }
  if (field.lenght === 0) {
    return false;
  }
  return true;
};
