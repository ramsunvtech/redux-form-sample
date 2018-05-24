import React from 'react';
import { Field } from 'redux-form';
import InputField from './InputField';

/**
 * This State-less Component provide the Field Collection to enter multiple Bank Account IBAN and Bank Name.
 * @param {Array}  fields         List of Field Collection fields.
 * @param {Object} meta           Redux form Meta Info.
 * @param {Bool}   touched        Return True, when Field touched / added one item.
 * @param {String} error          Redux Field Collection Error.
 * @param {Bool}   submitFailed   Return True, when Form submit failed.
 */

const BankAccountCollection = ({ fields, meta: { touched, error, submitFailed } }) => (
  <div className="field-collection-item account-item">
    {(touched || submitFailed) && error && <span className="no-items">{error}</span>}
    {fields.map((bankAccount, index) => {
      const deleteButton = <button type="button" className="suffix-btn fa fa-trash" value="-" title="Remove Bank Account" onClick={() => fields.remove(index)} />;
      const addIcon = <button type="button" className="add-item" onClick={() => fields.insert(index + 1, {})}>+</button>
      return (
        <div key={index}>
          <Field name={`${bankAccount}.iban`} type="text" component={InputField} suffix={deleteButton} label="IBAN"/>
          <Field name={`${bankAccount}.bankName`} type="text" component={InputField} label="Bank name" />
          {addIcon}
        </div>
      );
    })}
    <div className="actions">
      <button type="button" className="add-item" onClick={() => fields.push({})}>+Add bank account</button>
    </div>
  </div>
);

export default BankAccountCollection;
