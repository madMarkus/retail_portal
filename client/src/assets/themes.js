import {createMuiTheme } from 'material-ui/styles';
import * as colors from 'material-ui/colors';

 const Indigo = {
    typography: {
        fontFamily: 'Roboto',
        fontWeightMedium:300,
        colorTextSecondary: 'red',
    },
    palette: {
        type: 'light',
        primary: {
            main:colors['indigo'][500],
        },
        secondary: {
            main:colors['pink'][500],
        },
        error: colors['red'],
        contrastThreshold: 3,
        tonalOffset: 0.2,
        },
 }

 const Blue = {
    typography: {
        fontFamily: 'Roboto',
        fontWeightMedium:300,
        colorTextSecondary: 'red',
    },
    palette: {
        type: 'light',
        primary: {
            main:colors['blue'][500],
        },
        secondary: {
            main:colors['deepOrange'][500],
        },
        error: colors['red'],
        contrastThreshold: 3,
        tonalOffset: 0.2,
        },
 }

 const Purple = {
    typography: {
        fontFamily: 'Roboto',
        fontWeightMedium:300,
        colorTextSecondary: 'red',
    },
    palette: {
        type: 'light',
        primary: {
            main:colors['purple'][500],
        },
        secondary: {
            main:colors['amber'][500],
        },
        error: colors['red'],
        contrastThreshold: 3,
        tonalOffset: 0.2,
        },
 }

 const Orange = {
    typography: {
        fontFamily: 'Roboto',
        fontWeightMedium:300,
        colorTextSecondary: 'red',
    },
    palette: {
        type: 'light',
        primary: {
            main:colors['deepOrange'][500],
        },
        secondary: {
            main:colors['indigo'][500],
        },
        error: colors['red'],
        contrastThreshold: 3,
        tonalOffset: 0.2,
        },
 }

 const DarkCyan = {
    typography: {
        fontFamily: 'Roboto',
        fontWeightMedium:300,
        colorTextSecondary: 'red',
    },
    palette: {
        type: 'light',
        primary: {
          main:colors['cyan'][900],
        },
        secondary: {
          main:colors['brown'][600],
        },
        error: colors['red'],
        contrastThreshold: 3,
        tonalOffset: 0.2,
        },
 }

 const Green = {
    typography: {
        fontFamily: 'Roboto',
        fontWeightMedium:300,
        colorTextSecondary: 'red',
    },
    palette: {
        type: 'light',
        primary: {
            main:colors['green'][500],
        },
        secondary: {
          main:colors['amber'][600],
        },
        error: colors['red'],
        contrastThreshold: 1,
        tonalOffset: 0.2,
        },
 }

 const DarkNeon = {
    typography: {
        fontFamily: 'Roboto',
        fontWeightMedium:300,
        colorTextSecondary: 'red',
    },
    palette: {
        type: 'light',
        primary: {
          main:colors['grey'][900],
          contrastText:'white',
        },
        secondary: {
          main:colors['cyan']['A400']
        },
        error: colors['red'],
        contrastThreshold: 3,
        tonalOffset: 0.2,
        },
 }

 const DarkCitrus = {
    typography: {
        fontFamily: 'Roboto',
        fontWeightMedium:300,
        colorTextSecondary: 'red',
    },
    palette: {
        type: 'dark',
        primary: {
            main: colors['orange'][500],
        },
        secondary: {
            main: colors['lime']['A400'],
        },
        error: colors['red'],
        contrastThreshold: 3,
        tonalOffset: 0.2,
        },
 }

export {Indigo, Blue, Purple, Orange, DarkCyan, Green, DarkNeon, DarkCitrus}
