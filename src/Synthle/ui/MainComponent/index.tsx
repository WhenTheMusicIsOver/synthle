import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useMainComponentStyles } from './styles/MainComponent.styles';

type SynthleMainComponent = {
    classes?: any;
};

export default function SynthleMainComponent({}: SynthleMainComponent) {
    const classes = useMainComponentStyles();

    return (
        <Box className={classes.root} component="div">
            <Typography variant="h1">Synthle</Typography>
        </Box>
    );
}
