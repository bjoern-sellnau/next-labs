import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as TP, DefaultTheme } from 'styled-components';
import GlobalStyle from '../../styles';
import { dark, light, Theme } from '../../themes';

interface ThemeProps {
  initialTheme?: Theme;
  children: React.ReactNode;
}
interface ContextProps {
  theme: DefaultTheme;
  setTheme: (theme: Theme) => void;
}

const mappings: Record<Theme, DefaultTheme> = { dark, light };

const ThemeContext = createContext<Partial<ContextProps>>({});

const ThemeProvider = ({ initialTheme, children }: ThemeProps) => {
  const [theme, _setTheme] = useState<DefaultTheme>(
    initialTheme ? mappings[initialTheme] : dark
  );

  const setTheme = (theme: Theme) => _setTheme(mappings[theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TP theme={theme}>
        <GlobalStyle />
        {children}
      </TP>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
