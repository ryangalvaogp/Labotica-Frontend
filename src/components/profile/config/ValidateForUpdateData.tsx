export function ValidateForUpdateData(
  nameInput: string,
  name: string,
  emailInput: string,
  email: string) {

  let data;
  if (nameInput !== name &&
    emailInput !== email) {
    data = {
      name: nameInput,
      email: emailInput
    };
  };
  if (nameInput !== name &&
    emailInput === email) {
    data = {
      name: nameInput,
    };
  };
  if (nameInput === name &&
    emailInput !== email) {
    data = {
      email: emailInput,
    };
  };
  return data;
}
