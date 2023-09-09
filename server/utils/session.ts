import { type H3Event, type SessionConfig } from 'h3';

type AuthValue = {
  name: string;
  email: string;
};

export const sessionAuthConfig: SessionConfig = {
  name: 'auth',
  password: 'secretpasswordveryverylong29993020202',
  cookie: {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 2 // 2 days
  }
};

export const useSessionAuth = async (event: H3Event) => {
  const sesssion = await useSession<AuthValue>(event, sessionAuthConfig);
  return sesssion;
};
