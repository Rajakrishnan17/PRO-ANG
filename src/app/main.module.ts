import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.route';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './_service/student.service';
import { StudentPromiseService } from './_service/student_Promise.service';
import { LoginComponent } from './login/login.component';
import { StudentResolver } from './_service/resolver/student_resolver.service';
import { StudentmarkComponent } from './studentmark/studentmark.component';
import { AuthGuard } from './PermissionCheck/Auth.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    StudentComponent,
    StudentListComponent,
    LoginComponent,
    StudentmarkComponent,
    SpinnerComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    StudentService,
    StudentPromiseService,
    StudentResolver,
    AuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: StudentPromiseFactory,
      deps: [StudentPromiseService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class MainModule { }

export function StudentPromiseFactory(
  serverDate: StudentPromiseService
): Function {
  return() => serverDate.getDate();
}
