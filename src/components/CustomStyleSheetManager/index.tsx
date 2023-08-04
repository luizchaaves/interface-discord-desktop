import React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const CustomStyleSheetManager: React.FC<Props> = ({ children }) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true;
      }}
    >
      {children}
    </StyleSheetManager>
  );
};

export default CustomStyleSheetManager;
