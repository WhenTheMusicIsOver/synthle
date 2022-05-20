import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useMainComponentStyles } from './styles/MainComponent.styles';

type SynthleMainComponent = {
    classes?: any;
};

export default function SynthleMainComponent({}: SynthleMainComponent) {
    const classes = useMainComponentStyles();

    return (
        <Container>
            <Typography variant="h1">Main Component</Typography>
        </Container>
    );
}
