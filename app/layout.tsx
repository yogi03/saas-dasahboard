
import React from 'react';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import PageHeader from '@/components/page-header';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'loopin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <PageHeader />
          {children}
          {React.createElement('my-widget' as any, { 'project-id': 15 })}
          <script src="https://loopin-widget.vercel.app//widget.umd.js"></script>
        </body>
      </html>
    </ClerkProvider>
  )
}