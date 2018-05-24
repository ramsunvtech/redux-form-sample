const IBAN = require('iban');

const validationRules = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'First name is Required';
  } else if (!/^[A-z ]+$/.test(values.firstName)) {
    errors.firstName = 'should contain only small and capital letters, no numbers, special characters, etc.';
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is Required';
  } else if (!/^[A-z ]+$/.test(values.lastName)) {
    errors.lastName = 'should contain only small and capital letters, no numbers, special characters, etc.';
  }

  if (!values.email) {
    errors.email = 'Email is Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Value should be a valid email'
  }

  if (!values.bankAccounts || !values.bankAccounts.length) {
    errors.bankAccounts = { _error: 'You should provide at least one bank account' };
  } else {
    const bankAccountsArrayErrors = [];
    values.bankAccounts.forEach((account, accountIndex) => {
      const accountErrors = {};

      if (!account || !account.iban) {
        accountErrors.iban = 'IBAN is Required';
        bankAccountsArrayErrors[accountIndex] = accountErrors;
      } else if (!IBAN.isValid(account.iban)) {
        accountErrors.iban = 'Invalid IBAN';
        bankAccountsArrayErrors[accountIndex] = accountErrors;
      }

      if (!account || !account.bankName) {
        accountErrors.bankName = 'Bank name is Required';
        bankAccountsArrayErrors[accountIndex] = accountErrors;
      }
    });

    if (bankAccountsArrayErrors && bankAccountsArrayErrors.length) {
      errors.bankAccounts = bankAccountsArrayErrors;
    }
  }
  return errors;
};

export default validationRules;
