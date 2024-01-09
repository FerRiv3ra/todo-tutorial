import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'SET_LIGHT'} | {type: 'SET_DARK'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  listText: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0, 0.6)',
  listText: 'black',
  colors: {
    primary: '#00A294',
    background: 'white',
    card: 'white',
    text: 'white',
    border: 'black',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255,255,255, 0.6)',
  listText: 'white',
  colors: {
    primary: '#00A294',
    background: 'black',
    card: 'black',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'SET_LIGHT':
      return {...lightTheme};

    case 'SET_DARK':
      return {...darkTheme};

    default:
      return state;
  }
};
