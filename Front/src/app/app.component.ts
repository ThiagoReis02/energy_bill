import { ContactPage } from './contact/contact.page';
import { LoginPageModule } from './app/login/login.module';
import { LoginPage } from './app/login/login.page';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'analytics'
    },
    {
      title: 'Gestão de Gastos',
      url: '/gestao-gastos',
      icon: 'clipboard'
    },
    {
      title: 'Parametrizações',
      url: '/parametrizacao',
      icon: 'build'
    },
    {
      title: 'Minha Conta',
      url: '/my-acount',
      icon: 'person'
    },
    {
      title: 'Contato',
      url: '/contact',
      icon: 'at'
    },
    {
      title: 'Sair',
      url: '/login',
      icon: 'power'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
