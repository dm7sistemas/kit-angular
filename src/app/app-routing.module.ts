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
        loadChildren: 'src/app/pages/icons/icons.module#IconsModule',
      },
      {
        path: 'charts',
        loadChildren: 'src/app/pages/charts/charts.module#ChartsModule',
      },
      {
        path: 'cards',
        loadChildren: 'src/app/pages/cards/cards.module#CardsModule',
      },
      {
        path: 'advanced',
        loadChildren: 'src/app/pages/advanced/advanced.module#AdvancedModule',
      },
      {
        path: 'widgets',
        loadChildren: 'src/app/pages/widgets/widgets.module#WidgetsModule',
      },
      {
        path: 'tables',
        loadChildren: 'src/app/pages/tables/tables.module#TablesModule',
      },
      {
        path: 'ui-kits',
        loadChildren: 'src/app/pages/ui-kits/ui-kits.module#UIKitsModule',
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
