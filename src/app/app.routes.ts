import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';

// Constante:
export const routes: Routes = [
    {path: 'template', component: TemplateComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'template' },
]