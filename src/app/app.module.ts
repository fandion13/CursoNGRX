import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { MainComponent } from './main/main.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { StoreModule } from '@ngrx/store';
import { appEffects, appReducer } from './Store/app-state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ListaUsuariosAdminComponent } from './lista-usuarios-admin/lista-usuarios-admin.component';

@NgModule({ declarations: [
        AppComponent,
        ListarUsuariosComponent,
        MainComponent,
        CadastroUsuariosComponent,
        ListaUsuariosAdminComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        StoreModule.forRoot(appReducer),
        EffectsModule.forRoot(appEffects),
        StoreDevtoolsModule.instrument({connectInZone: true})], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
