import React from 'react';

/**
 * This State-less Component overrides the Redux Field Input.
 * @param {DOM}    suffix   This Component will be render next to Input.
 * @param {DOM}    input    Redux Form Field Component for Input.
 * @param {String} label    Input Display Label.
 * @param {String} type     Input Type.
 * @param {Object} meta     Redux Field Meta.
 * @param {Bool}   touched  Redux Field Error.
 * @param {String} error    Redux Field Error Message.
 */
const InputField = ({ suffix, input, label, type, meta: { touched, error } }) => (
  <div className="field-wrapper">
    <label htmlFor={name}>{label}</label>
    <div className={(suffix) ? 'field suffix' : 'field'}>
      <input {...input} type={type} /> {suffix}
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default InputField;
