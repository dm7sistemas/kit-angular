import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'

// layouts & notfound
import { NotFoundComponent } from 'src/app/pages/404.component'

const COMPONENTS = [NotFoundComponent]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'widgets/general',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'icons',
        loadChildren: () => import('src/app/pages/icons/icons.module').then(m => m.IconsModule),
      },
      {
        path: 'charts',
        loadChildren: () => import('src/app/pages/charts/charts.module').then(m => m.ChartsModule),
      },
      {
        path: 'cards',
        loadChildren: () => import('src/app/pages/cards/cards.module').then(m => m.CardsModule),
      },
      {
        path: 'advanced',
        loadChildren: () => import('src/app/pages/advanced/advanced.module').then(m => m.AdvancedModule),
      },
      {
        path: 'widgets',
        loadChildren: () => import('src/app/pages/widgets/widgets.module').then(m => m.WidgetsModule),
      },
      {
        path: 'tables',
        loadChildren: () => import('src/app/pages/tables/tables.module').then(m => m.TablesModule),
      },
      {
        path: 'ui-kits',
        loadChildren: () => import('src/app/pages/ui-kits/ui-kits.module').then(m => m.UIKitsModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'widgets/general',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: true,
    }),
  ],
  declarations: [...COMPONENTS],
  exports: [RouterModule],
})
export class AppRoutingModule { }
