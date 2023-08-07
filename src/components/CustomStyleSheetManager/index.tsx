import React from 'react';
import { StyleSheetManager } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const CustomStyleSheetManager: React.FC<Props> = ({ children }) => {
  return <StyleSheetManager>{children}</StyleSheetManager>;
};

export default CustomStyleSheetManager;
