import React, { useState, useEffect } from 'react';
import './style.css';

export default function InputField(props) {
  const { type, label, validataionError, setData, keyName, showValidation } =
    props;
  const [validataion, setValidation] = useState(false);

  useEffect(() => {
    console.log('showValidation : ', showValidation);
    console.log('showValidation[key] key: ', keyName);
    console.log('showValidation[key] : ', showValidation[keyName]);
  }, []);

  const handleChange = (e) => {
    console.log('value : ', e.target.value);
    setData(e.target.value);
    if (e.target.value.length == 0) {
      console.log('value lengtrh  0: ');
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  return (
    <div>
      <div className={'displayAlign'}>
        <p>{label}</p>
        <input type={type} onChange={handleChange} />
      </div>
      {(showValidation[keyName] || validataion) && (
        <p className={'errorClass'}>{validataionError}</p>
      )}
    </div>
  );
}
