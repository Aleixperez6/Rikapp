import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
/*
import { TranslateService } from "@ngx-translate/core";
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rikapp';
  /*

  constructor(private translate: TranslateService, private titleService: Title){

    var navigatorLanguage= navigator.language.substring(0,2);

    translate.setDefaultLang(navigatorLanguage);
    translate.use(navigatorLanguage);
    this.changeTitle();
  }

  changeTitle(){
    this.translate.get('webTitle').subscribe((res:string) => {
      this.titleService.setTitle(res);
      console.log("cambiado");
  });
  }

  changeLanguageToSpanish(){
    console.log('idioma cambiado al español');
    this.translate.use('es');
    this.changeTitle();
  }

  changeLanguageToEnglish(){
    console.log('idioma cambiado al inglés');
    this.translate.use('en');
    this.changeTitle();
  }

  changeLanguageToCatalan(){
    console.log('idioma cambiado al catalán');
    this.translate.use('ca');
    this.changeTitle();
  }*/
}
