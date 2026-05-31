import { ConfigValue } from '@/config';

export const AUTH_TOKEN_KEY = ConfigValue.AUTH_TOKEN_KEY;
const ONE_DAY_IN_SECONDS = 60 * 60 * 24;

function getClientCookie(name: string) {
  if (typeof document === 'undefined') {
    return null;
  }

  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${encodeURIComponent(name)}=`));

  return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
}

function setClientCookie(name: string, value: string) {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; max-age=${ONE_DAY_IN_SECONDS}; path=/`;
}

function removeClientCookie(name: string) {
  document.cookie = `${encodeURIComponent(name)}=; max-age=0; path=/`;
}

export const getAuthToken = async () => {
  if (typeof window !== 'undefined') {
    return getClientCookie(AUTH_TOKEN_KEY);
  }

  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();

  return cookieStore.get(AUTH_TOKEN_KEY)?.value ?? null;
};

export async function setAuthToken(token: string) {
  if (typeof window !== 'undefined') {
    setClientCookie(AUTH_TOKEN_KEY, token);
    return;
  }

  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();

  cookieStore.set(AUTH_TOKEN_KEY, token, {
    maxAge: ONE_DAY_IN_SECONDS,
    path: '/',
  });
}

export async function removeAuthToken() {
  if (typeof window !== 'undefined') {
    removeClientCookie(AUTH_TOKEN_KEY);
    return;
  }

  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();

  cookieStore.delete(AUTH_TOKEN_KEY);
}

export async function checkHasAuthToken() {
  const token = await getAuthToken();
  return Boolean(token);
}
