import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    issuer: 'https://dev-grb5ls3y.us.auth0.com/',

    // Your app's client id:
    clientId: '2pQHY3Wu33ykcZoMOlZLvrH3Y62UlJ16',
    redirectUri: window.location.origin,

    scope: 'openid profile email offline_access',

    responseType: 'code',

    logoutUrl: 'https://dev-grb5ls3y.us.auth0.com/v2/logout',

   /*  customQueryParams: {
        // Your API's name
        audience: 'http://www.angular.at/api'
    }, */
};
