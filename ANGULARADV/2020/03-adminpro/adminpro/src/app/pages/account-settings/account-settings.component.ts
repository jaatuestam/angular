import { Component, OnInit } from '@angular/core';
import { utf8Encode } from '@angular/compiler/src/util';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector("#theme");
  public links: NodeListOf<Element>;

  constructor(private settingsService:SettingsService) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string) {

    this.settingsService.changeTheme(theme);
  }


}
