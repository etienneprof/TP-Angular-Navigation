import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UserItemComponent } from './user-item/user-item.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { FormComponent } from './form/form.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'messagerie', component: MessagerieComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: '**', redirectTo: '/accueil', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserItemComponent,
    MessagesComponent,
    MessageItemComponent,
    FormComponent,
    MessagerieComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
