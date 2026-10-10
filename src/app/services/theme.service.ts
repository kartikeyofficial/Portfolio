import { Injectable, signal, effect } from '@angular/core';

export type AppTheme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_STORAGE_KEY = 'kartikey_portfolio_theme';
  
  // Theme Signal: default to 'dark' (Orange & Black)
  readonly currentTheme = signal<AppTheme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
        try {
          localStorage.setItem(this.THEME_STORAGE_KEY, theme);
        } catch {
          // Ignore localStorage errors in restricted environments
        }
      }
    });
  }

  toggleTheme(): void {
    const nextTheme: AppTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.currentTheme.set(nextTheme);
  }

  setTheme(theme: AppTheme): void {
    this.currentTheme.set(theme);
  }

  isDark(): boolean {
    return this.currentTheme() === 'dark';
  }

  private getInitialTheme(): AppTheme {
    if (typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem(this.THEME_STORAGE_KEY) as AppTheme | null;
        if (saved === 'light' || saved === 'dark') {
          return saved;
        }
      } catch {
        // Fallback to dark
      }
    }
    return 'dark';
  }
}
