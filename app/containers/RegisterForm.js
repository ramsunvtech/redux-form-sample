import React from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';

// Components.
import InputField from '../components/InputField';
import BankAccountCollection from '../components/BankAccountCollection';

// Libraries.
import validationRules from '../lib/validationRules';
import onSubmit from '../lib/onSubmit';

/**
 * This State-less Component provide the Register Form.
 * @param {Object.} props Component Props.
 */
let RegisterForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="register-form-block">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register account</h1>
        <div className="form-fields">
          <Field name="firstName" component={InputField} type="text" label="First name" />
          <Field name="lastName" component={InputField} type="text" label="Last name" />
          <Field name="email" component={InputField} type="email" label="Email" />
          <div className="field-collection bankAccountList">
            <h3 htmlFor="bankAccounts">Bank accounts</h3>
            <FieldArray name="bankAccounts" component={BankAccountCollection} />
          </div>
          <div className="form-actions">
            <button type="submit">Submit!</button>
          </div>
        </div>
      </form>
    </div>
  )
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register',
  validate: validationRules,
})(RegisterForm);

export default connect()(RegisterForm);
