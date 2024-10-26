import { KindeAuth } from '@kinde-oss/kinde-auth-nextjs';

export const kinde = new KindeAuth({
  clientId: process.env.KINDE_CLIENT_ID,
  redirectUri: process.env.KINDE_REDIRECT_URI,
  domain: process.env.KINDE_DOMAIN,
  cookieOptions: {
    secure: true,      // Ensure cookie is only sent over HTTPS
    sameSite: 'Lax',   // Change to 'None' if you need cross-origin login
    path: '/',   
    storeTokensInCookies: true,      // Make cookies available across all routes
  },
});
