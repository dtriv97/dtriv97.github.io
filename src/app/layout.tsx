import Navbar from '@/components/Navbar';
import { ColorSchemeScript, createTheme, mantineHtmlProps, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['100', '400', '500', '600', '800'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Dhairya Trivedi',
  description: 'Engineer, musician and photographer',
};

const theme = createTheme({
  fontFamily: `${montserrat.style.fontFamily}, sans-serif`,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={{
        fontWeight: '400',
      }}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <MantineProvider theme={theme}>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
