import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
               <ul class="menu">
                 <li class="menu-item" routerLink="/minapp">MinApp</li>
                 <li class="menu-item" routerLink="/anchors">Anchors</li>
                 <li class="menu-item" routerLink="/inheritance">Inheritance</li>
                 <li class="menu-item" routerLink="/fractallayout">FractalLayout</li>
               </ul>
             </div>
             <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'sample1';
}
