import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useMainComponentStyles } from './styles/MainComponent.styles';

export default function SynthleMainComponent() {
    const classes = useMainComponentStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h1">Main Component</Typography>
        </Container>
    );
}
