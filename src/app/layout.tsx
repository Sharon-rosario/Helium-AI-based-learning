import './globals.css'
import "../style/index.scss"
import AppProvider from '@/contextApi/AppProvider'
import ReduxProvider from '@/redux/provider'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head';

export const metadata = {
  title: 'Helium - Nation’s First AI Based Learning App',
  description: 'IIT-JEE, NEET-UG Education App Online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Helium- AI-Powered Learning App for IIT-JEE, NEET-UG, & CUET-UG</title>
        <meta
          name="description"
          content="Join Helium online live classes & supercharge your learning with AI! Excel in IIT-JEE, NEET-UG, CUET-UG, and Boards. Our platform tailors paths for K12 brilliance."
        />
      </Head>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Raleway:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          ></link>
        </head>

        <body>
          <ReduxProvider>
            <AppProvider>
              {children}
            </AppProvider>
            <ToastContainer />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
