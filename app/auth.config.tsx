import { user } from '@nextui-org/react';
//import { User } from 'next-auth';
import { request } from 'http';
import type { NextAuthConfig } from 'next-auth';
import { getSession } from 'next-auth/react';


export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('./Employee');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('./Employee', nextUrl));
       
      }
      return true;
    },  
  },
} satisfies NextAuthConfig;