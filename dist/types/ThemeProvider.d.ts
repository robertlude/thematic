import React, { ReactNode } from 'react';
import Theme from './Theme';
type ThemeContextType = {
    theme: Theme;
};
declare const ThemeProvider: ({ children, theme, }: {
    children: ReactNode;
    theme: Theme;
}) => React.JSX.Element;
export declare const useTheme: () => ThemeContextType;
export default ThemeProvider;
