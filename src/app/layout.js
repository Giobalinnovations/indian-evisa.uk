import Footer from '@/components/india/common/Footer';
import Header from '@/components/india/common/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Home',
  description: 'Visa Application',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} flex flex-col min-h-screen antialiased bg-background`}
      >
        <FormProvider>
          <ReactQueryProvider>
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-conic from-primary/10 via-accent/5 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <div className="bg-white backdrop-blur-lg border-b border-gray-200">
                <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
                <Header />
              </div>
              <main className="flex-1 container mx-auto px-4 py-8">
                <div className="bg-white/80 shadow-lg rounded-xl backdrop-blur-md">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              theme="colored"
              toastClassName="rounded-lg"
            />
          </ReactQueryProvider>
        </FormProvider>
        <GoogleTagManager gtmId="G-LC9MZM89N4" />
        <GoogleAnalytics gaId="G-LC9MZM89N4" />
      </body>
    </html>
  );
}
