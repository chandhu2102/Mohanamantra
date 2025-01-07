// AppWrapper.js
import React from 'react';
import CustomCursor from '../component/customCursor'; // Make sure to import your CustomCursor component

const AppWrapper = ({ children }) => {
  return (
    <div>
      <CustomCursor />
      {children}
    </div>
  );
};

export default AppWrapper;
