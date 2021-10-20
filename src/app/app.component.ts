import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    window.addEventListener('appload', e => {
      console.log(e);
    });
  }
  
  public cloneElement(insideIonApp = false) {
    const button = document.createElement('ion-button');
    
    if (insideIonApp) {
      const app = document.querySelector('ion-app');
      button.innerText = 'Cloned in App';

      app.appendChild(button);
    } else {
      button.innerText = 'Cloned Outside App';

      document.body.appendChild(button);
    }
  }
}
