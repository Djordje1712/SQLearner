import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class ThemeToggleComponent implements OnInit {
  isDarkTheme$: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }

  ngOnInit(): void {
    // Theme initialization is handled by the service
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
