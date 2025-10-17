"use client"
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Provider({ children, session }) {
  return(
    <SessionProvider session={session}>
      <ToastContainer position="top-right" autoClose={3000}/>
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}