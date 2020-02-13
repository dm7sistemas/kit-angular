import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

const MODULES = [CommonModule, RouterModule, NgZorroAntdModule, FormsModule]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
