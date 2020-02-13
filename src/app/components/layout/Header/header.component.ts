import { Component, OnInit } from '@angular/core'
import { Router, NavigationStart, Event } from '@angular/router'
import * as _ from 'lodash'
import menuData from './config'
import AntDesignDarkTheme from 'src/app/components/kit-vendors/antd/themes/themeDark'
import AntDesignLightTheme from 'src/app/components/kit-vendors/antd/themes/themeLight'

@Component({
  selector: 'kit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeSubmenu: any = ''
  activeItem: any = ''
  menuData: any = menuData() || []
  primaryColor: any = '#4b7cf3'
  reset: Boolean = true

  constructor(private router: Router) {}
  ngOnInit() {
    // set active menu items
    this.setActiveItems(this.router.url)
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.setActiveItems(event.url ? event.url : null)
      }
    })

    // init theme
    const mode = window.localStorage.getItem('kit.theme')
    if (mode === 'dark') {
      document.querySelector('body').classList.add('kit__dark')
      ;(<any>window).less.modifyVars(AntDesignDarkTheme)
    }

    // init primary color
    const color = window.localStorage.getItem('kit.primary')
    if (color) {
      this.selectColor(color)
    }
  }

  switchDarkTheme() {
    if (document.querySelector('body').classList.contains('kit__dark')) {
      document.querySelector('body').classList.remove('kit__dark')
      window.localStorage.setItem('kit.theme', 'light')
      ;(<any>window).less.modifyVars(AntDesignLightTheme)
    } else {
      document.querySelector('body').classList.add('kit__dark')
      window.localStorage.setItem('kit.theme', 'dark')
      ;(<any>window).less.modifyVars(AntDesignDarkTheme)
    }
  }

  setActiveItems(pathname) {
    const menuData = this.menuData
    const flattenItems = (items, key) =>
      items.reduce((flattenedItems, item) => {
        flattenedItems.push(item)
        if (Array.isArray(item[key])) {
          return flattenedItems.concat(flattenItems(item[key], key))
        }
        return flattenedItems
      }, [])
    this.activeItem = _.find(flattenItems(menuData, 'children'), ['url', pathname]) || {}
    this.activeSubmenu =
      flattenItems(menuData, 'children')
        .map(item => {
          return item.url === pathname || _.find(item.children, ['url', pathname]) ? item : null
        })
        .filter(item => item !== null)[0] || {}
  }

  selectColor(color) {
    const styleElement = document.querySelector('#primaryColor')
    if (styleElement) {
      styleElement.remove()
    }
    window.localStorage.setItem('kit.primary', color)
    const body = document.querySelector('body')
    const styleEl = document.createElement('style')
    const css = document.createTextNode(`:root { --kit-color-primary: ${color};}`)
    styleEl.setAttribute('id', 'primaryColor')
    styleEl.appendChild(css)
    body.appendChild(styleEl)
    this.primaryColor = color
    this.reset = false
  }

  resetColor() {
    const defaultColor = '#4b7cf3'
    this.selectColor(defaultColor)
    window.localStorage.removeItem('kit.primary')
    this.primaryColor = defaultColor
    this.reset = true
  }
}
