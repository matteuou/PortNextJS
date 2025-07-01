
import './globals.css';
import { Inter } from 'next/font/google';
import SocialSidebar from '../components/SocialSidebar'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Portifolio - Frontend Developer',
    description: 'A frontend web developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                {}
            </head>
            <body className={inter.className}>
                <SocialSidebar />
                <div className="main-content-wrapper">
                    {children} {}
                </div>
            </body>
        </html>
    );
}