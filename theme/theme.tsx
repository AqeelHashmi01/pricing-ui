import { extendTheme } from '@chakra-ui/react';

interface Colors {
    main: {
        primary: string;
        secondary: string;
    }
    light: {
        gray: string;
    }
}

const colors: Colors = {
    main: {
        primary: '#6B46C1',
        secondary: '#F0EAFB',
    },
    light: {
        gray: '#E5E5E5'
    }
}

export const theme = extendTheme({ colors })