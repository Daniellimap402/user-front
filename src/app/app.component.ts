import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  nome = '';
  email = '';

  constructor(
    private appService: AppService
  ){

  }

  enviar(){
    this.appService.enviar(this.nome, this.email);
  }
}
