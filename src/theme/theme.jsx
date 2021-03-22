import { createMuiTheme } from '@material-ui/core/styles';

// overrides for https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    fontFamily: [
      'Questrial',
      'Open Sans',
      'Noto Sans',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol'
    ].join(',')
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          margin: 0,
          padding: 0,
          color: '#000000',
          backgroundColor: '#f6f5f3'
        },
        h1: {
          fontFamily: 'Source Serif Pro',
          fontWeight: 400,
          // lineHeight: '2rem',
          marginTop: 0
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        marginLeft: 0,
        marginRight: 0
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        textTransform: 'none',
        userSelect: 'none',
        fontSize: '17px',
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: '.5px',
        padding: '16px'
      },
      contained: {
        color: '#ffffff',
        backgroundColor: '#d5aa63',
        borderColor: '#d5aa63',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#d5aa63',
          opacity: .7,
          boxShadow: 'none'
        }
      }
    },
    MuiFormLabel: {
      root: {
        textTransform: 'uppercase',
        fontSize: '.95rem',
        letterSpacing: '0.5px',
        marginBottom: '10px',
        '&.Mui-focused': {
          color: 'rgba(0, 0, 0, 0.54)'
        }
      }
    },
    MuiAppBar: {
      colorPrimary: {
        color: '#000000'
      }
    }
  }
});

export default theme;
