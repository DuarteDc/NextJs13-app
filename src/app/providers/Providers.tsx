"use client";
import { GoogleOAuthProvider } from '@react-oauth/google';

export function Providers({ children }: { children: React.ReactNode }) {
  return <GoogleOAuthProvider clientId="742308211218-o6bk5orcn38sscfoaunbopagfi1tcepq.apps.googleusercontent.com">{children}</GoogleOAuthProvider>
}