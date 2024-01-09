import {ThemeProvider} from './ThemeContext';

export const AppContext = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
