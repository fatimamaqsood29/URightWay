import { GeistSans, GeistMono } from 'geist/font'; // Correct import path
import { AuthProvider } from './context/AuthContext';
import "./globals.css";

export const metadata = {
  title: "U Right Way",
  description: "Educational platform for students and parents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}