import {Routes} from '@angular/router';

import { NewCompComponent } from './new-comp/new-comp.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContentComponent } from './content/content.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component';
import { StudentResolver } from './_service/resolver/student_resolver.service';
import { StudentmarkComponent } from './studentmark/studentmark.component';
import { AuthGuard } from './PermissionCheck/Auth.service';
import { SpinnerComponent } from './spinner/spinner.component';

export const appRoutes: Routes = [
  {path: 'spinner', data: { 'id': '1'}, component: SpinnerComponent},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'student', data: { 'name': 'stringData'}, component: StudentComponent},
  {path: 'student-list/:id', component: StudentListComponent,
    resolve: {
      studResolver: StudentResolver
    }
  },
  {path: 'content', component: ContentComponent,
    children: [
      { path: 'mark', component: StudentmarkComponent,
        canActivate: [AuthGuard]
        }
    ]
  },
  // {path: 'content', component: ContentComponent,
  //   children: [ { path: 'mark', component: StudentmarkComponent}]
  // },
  {path: 'signup', component: SignUpComponent},
  {path: 'new', component: NewCompComponent},
  {path: '*', component: ContentComponent},
  {path: '', component: ContentComponent}
];
