import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();
  
  private readonly THEME_KEY = 'sqlEarnerTheme';

  constructor() {
    // Load theme preference from localStorage
    this.loadThemePreference();
  }

  toggleTheme(): void {
    const newThemeValue = !this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(newThemeValue);
    this.saveThemePreference(newThemeValue);
    this.applyTheme(newThemeValue);
  }

  private loadThemePreference(): void {
    // Check if user previously selected a theme
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    
    if (savedTheme) {
      const isDarkTheme = savedTheme === 'dark';
      this.isDarkThemeSubject.next(isDarkTheme);
      this.applyTheme(isDarkTheme);
    } else {
      // Default to user's OS preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkThemeSubject.next(prefersDark);
      this.applyTheme(prefersDark);
    }
  }

  private saveThemePreference(isDark: boolean): void {
    localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
  }

  private applyTheme(isDark: boolean): void {
    // Add or remove 'dark-theme' class on document body
    const bodyElement = document.body;
    if (isDark) {
      bodyElement.classList.add('dark-theme');
    } else {
      bodyElement.classList.remove('dark-theme');
    }
  }
}
