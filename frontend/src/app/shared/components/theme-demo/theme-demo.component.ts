import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-theme-demo',
  templateUrl: './theme-demo.component.html',
  styleUrls: ['./theme-demo.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ThemeToggleComponent
  ]
})
export class ThemeDemoComponent {
  cards = [
    {
      title: 'Primary Elements',
      subtitle: 'Primary colored elements',
      content: 'This card demonstrates primary colored buttons and icons',
      icon: 'palette',
      color: 'primary'
    },
    {
      title: 'Accent Elements',
      subtitle: 'Accent colored elements',
      content: 'This card demonstrates accent colored buttons and icons',
      icon: 'brush',
      color: 'accent'
    },
    {
      title: 'Warn Elements',
      subtitle: 'Warn colored elements',
      content: 'This card demonstrates warn colored buttons and icons',
      icon: 'warning',
      color: 'warn'
    }
  ];
}
