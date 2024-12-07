import { AppProps } from 'next/app';
import Link from 'next/link';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/features">Features</Link>
        <Link href="/resources">Resources</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
