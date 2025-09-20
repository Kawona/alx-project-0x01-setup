import type { AppProps } from 'next/app';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-6">
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}