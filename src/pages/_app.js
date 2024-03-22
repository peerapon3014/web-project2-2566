import "@/styles/globals.css";
import { Inter, Playfair_Display, Noto_Sans_Thai } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

const noto = Noto_Sans_Thai({
  subsets: ['thai'],
  variable: '--font-noto'
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${playfair.variable} ${noto.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
