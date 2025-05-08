import { LoginCredentials, AuthResponse, RefreshTokenResponse } from '../types/auth';
import { api } from '../lib/api';

class AuthService {
  private static instance: AuthService;
  private readonly TOKEN_KEY = 'auth_tokens';
  private readonly USER_KEY = 'auth_user';

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>('/auth/login', credentials);
      this.setTokens(response.data.tokens);
      this.setUser(response.data.user);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async logout(): Promise<void> {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearAuth();
    }
  }

  public async refreshToken(): Promise<RefreshTokenResponse> {
    try {
      const tokens = this.getTokens();
      if (!tokens?.refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await api.post<RefreshTokenResponse>('/auth/refresh', {
        refreshToken: tokens.refreshToken,
      });

      this.setTokens({
        ...tokens,
        accessToken: response.data.accessToken,
      });

      return response.data;
    } catch (error) {
      this.clearAuth();
      throw this.handleError(error);
    }
  }

  public getTokens(): { accessToken: string; refreshToken: string } | null {
    const tokens = localStorage.getItem(this.TOKEN_KEY);
    return tokens ? JSON.parse(tokens) : null;
  }

  public getUser(): any {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  private setTokens(tokens: { accessToken: string; refreshToken: string }): void {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(tokens));
  }

  private setUser(user: any): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  private clearAuth(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  private handleError(error: any): Error {
    if (error.response) {
      return new Error(error.response.data.message || 'An error occurred');
    }
    return error instanceof Error ? error : new Error('An unknown error occurred');
  }
}

export const authService = AuthService.getInstance(); 