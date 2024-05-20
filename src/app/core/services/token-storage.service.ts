import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  /**
   * Clear session storage
   */
  logout() {
    window.sessionStorage.clear();
  }

  /**
   * @param token jwt token
   */
  setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
}