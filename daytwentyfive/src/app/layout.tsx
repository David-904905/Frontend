// app/layout.tsx
import './globals.css'; // Import global CSS
import { ReactNode } from 'react';

export const metadata = {
  title: 'My App',
  description: 'An awesome Next.js app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
