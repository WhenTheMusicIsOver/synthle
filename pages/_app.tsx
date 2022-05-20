import '../styles/globals.css';
import type { AppProps } from 'next/app';

function SynthleApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default SynthleApp;
