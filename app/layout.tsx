"use client"
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';
import {theme} from '../theme/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={theme} >
        {children}
        </ChakraProvider>
        </body>
    </html>
  )
}
