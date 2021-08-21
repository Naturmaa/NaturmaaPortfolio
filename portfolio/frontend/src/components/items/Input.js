import React from 'react';
import FloatingLabelInput from 'react-floating-label-input';
 
export default ({ onChange, value }) =>
  <div style={{ fontSize: 64 }}>
    <FloatingLabelInput
      id="example-3"
      label="label"
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      value={value}
    />
  </div>;