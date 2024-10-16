module.exports = {
    theme: {
      extend: {
        colors: {
          text: '#151b23',
          background: '#f5f5f7',
          primary: '#0071e3',
          secondary: '#00aaff',
          accent: '#d1d4db',
          white: '#ffffff',
          
          light: {
            text: '#151b23',
            background: '#f5f5f7',
            primary: '#0071e3',
            secondary: '#00aaff',
            accent: '#d1d4db',
            white: '#ffffff',
          },
  
          dark: {
            text: '#ffffff',
            background: '#151b23',
            primary: '#0071e3',
            secondary: '#00aaff',
            accent: '#d1d4db',
            black: '#000000',
          },
  
          // Primary color shades
          primary: {
            100: '#caeefd',
            200: '#97d8fc',
            300: '#62bbf6',
            400: '#3b9dee',
            500: '#0071e3',
            600: '#0057c3',
            700: '#0041a3',
            800: '#002d83',
            900: '#00206c',
          },
  
          // Secondary color shades
          secondary: {
            100: '#ccfbff',
            200: '#99f0ff',
            300: '#66dfff',
            400: '#3fcbff',
            500: '#00aaff',
            600: '#0084db',
            700: '#0062b7',
            800: '#004693',
            900: '#00327a',
            contrast: '#360e64',
          },
  
          // Success color
          success: {
            100: '#eafcd5',
            200: '#d0f9ad',
            300: '#abed81',
            400: '#87dc5e',
            500: '#55c62f',
            600: '#3aaa22',
            700: '#248e17',
            800: '#12720e',
            900: '#095f0b',
          },
  
          // Info color
          info: {
            100: '#ccfefe',
            200: '#9af6fe',
            300: '#68e8fe',
            400: '#43d5fd',
            500: '#05b6fc',
            600: '#038dd8',
            700: '#026ab5',
            800: '#014b92',
            900: '#003678',
          },
  
          // Warning color
          warning: {
            100: '#fdf1cb',
            200: '#fce097',
            300: '#f8c863',
            400: '#f2b03c',
            500: '#ea8c00',
            600: '#c97000',
            700: '#a85700',
            800: '#874000',
            900: '#703000',
          },
  
          // Danger color
          danger: {
            100: '#fee5d4',
            200: '#fec4aa',
            300: '#fd9b80',
            400: '#fb7560',
            500: '#f9372c',
            600: '#d62025',
            700: '#b31628',
            800: '#900e27',
            900: '#770827',
          },
  
          // Grey color shades
          grey: {
            0: '#ffffff',
            100: '#f9fafb',
            200: '#f4f6f8',
            300: '#dfe3e8',
            400: '#c4cdd5',
            500: '#919eab',
            600: '#637381',
            700: '#454f5b',
            800: '#212b36',
            900: '#161c24',
          },
        },
        backgroundImage: {
          'primary-vs-secondary': 'linear-gradient(90deg, rgba(0, 206, 246, 1) 0%, rgba(0, 130, 245, 1) 100%)',
          'primary-vs-0-opacity': 'linear-gradient(90deg, rgba(0, 206, 246, 0) 0%, rgba(0, 130, 245, 1) 100%)',
        },
      },
    },
  }
  