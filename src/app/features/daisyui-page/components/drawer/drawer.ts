import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeSwitcher } from '../../../../shared/components/theme-switcher/theme-switcher';

@Component({
  selector: 'app-drawer',
  imports: [RouterModule, CommonModule,ThemeSwitcher],
  templateUrl: './drawer.html',
  styleUrls: ['./drawer.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer { }
