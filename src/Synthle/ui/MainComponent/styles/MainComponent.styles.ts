import { makeStyles } from '@mui/styles';
import { mediumGrey } from '../../../../shared/ui/styles/colors';

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
        height: '100vh',
        textAlign:'center',
    },
}));
