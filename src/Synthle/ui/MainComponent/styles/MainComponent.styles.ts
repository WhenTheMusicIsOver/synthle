import { makeStyles } from '@mui/styles';

interface MainComponentStylesTheme {
    mixins: any;
    zIndex: any;
    transitions: any;
    breakpoints: any;
    spacing: any;
}

export const useMainComponentStyles = makeStyles((theme: MainComponentStylesTheme) => ({
    root: {
        width: '100%',
    },
}));
