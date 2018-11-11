import {Routes} from '@angular/router';

import { NewCompComponent } from './new-comp/new-comp.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContentComponent } from './content/content.component';

export const appRoutes: Routes = [
  {path: 'content', component: ContentComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'new', component: NewCompComponent},
  {path: '*', component: ContentComponent}
];
