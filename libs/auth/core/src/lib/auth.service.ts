import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  nickname: string | null = null;

  constructor(private oauthService: OAuthService) {
    oauthService.configure(authConfig);
    oauthService.setupAutomaticSilentRefresh();
    oauthService.loadDiscoveryDocumentAndLogin().then(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const claims: any = this.oauthService.getIdentityClaims();
      this.nickname = claims['nickname'];
      console.log('botos look here: ' + this.nickname)
    });
  }

  get accessToken() {
    return this.oauthService.getAccessToken();
  }

  get refreshToken() {
    return this.oauthService.getRefreshToken();
  }

  get idToken() {
    return this.oauthService.getIdToken();
  }

  public logout(): void {
    this.oauthService.revokeTokenAndLogout({
      client_id: this.oauthService.clientId,
      returnTo: this.oauthService.redirectUri
    }, true);
    //The optional 2nd parameter set to true ignores CORS issues with the logout endpoint.
  }


}
