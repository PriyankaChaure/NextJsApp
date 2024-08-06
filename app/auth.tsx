import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import type { user } from './lib/defination';
import bcrypt, { compare } from 'bcrypt';
import { redirect } from 'next/navigation';
 
async function getUser(employeeemailid: string): Promise<user | undefined> {
  try {
    const user = await sql<user>`SELECT * from employee where employeeemailid=${employeeemailid}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials
    ({
      async authorize(credentials) 
      {  
            const parsedCredentials = z
           .object({ employeeemailid: z.string().email(), password: z.string().min(6)})
            .safeParse(credentials);
 
        if (parsedCredentials.success) 
        {
          const { employeeemailid, password } = parsedCredentials.data;
          const user = await getUser(employeeemailid);
          if (!user) return null;

          if(password.toString() === user.password.toString())
            {
              console.log(user);
              return user;
              redirect("/Employee");
            }
        }
 

        console.log('Invalid credentials');
        return null;
      }
    }),
  ],
});