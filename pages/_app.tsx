import React from 'react';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import { CircularProgress, Container, ThemeProvider } from '@mui/material';
import { appTheme } from '../src/shared/ui/styles/appTheme';
import { Color } from '../src/shared/domain/enums/Color';


export default function Synthle({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={appTheme}>
            <Container>
                <Suspense fallback={<CircularProgress variant={'indeterminate'} color={Color.primary} />}>
                    <Container maxWidth="lg">    
                        <Component {...pageProps} />
                    </Container>
                </Suspense>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            </Container >
        </ThemeProvider >
    );
};