import type { DefaultTheme, LocaleConfig } from 'vitepress'
import type { Theme } from '../theme/types'
import { components } from '../theme/plugins/component'

export const SITE_NAME = 'Kotatsu Website'
export const META_DESCRIPTION = 'Проста і зручна читалка манги з відкритим вихідним кодом від спільноти і для спільноти, де ви можете знайти і читати вашу улюблену мангу простіше як ніколи.'

export const searchLocale: Record<string, Partial<Omit<DefaultTheme.LocalSearchOptions, 'locales'>>> = {
    ru: {
      translations: {
        button: {
          buttonText: 'Пошук',
          buttonAriaLabel: 'Пошук'
        },
        modal: {
          resetButtonTitle: 'Скинути',
          backButtonTitle: 'Закрити',
          noResultsText: 'Немає результатів за запитом',
          footer: {
            selectText: 'для вибору',
            selectKeyAriaLabel: 'enter',
            navigateText: 'для навігації',
            navigateUpKeyAriaLabel: 'стрілка вгору',
            navigateDownKeyAriaLabel: 'стрілка донизу',
            closeText: 'закрити',
            closeKeyAriaLabel: 'escape'
          }
        }
      }
    },
  }

export const config: LocaleConfig<Theme.Config> = {
  ua: {
    label: 'Українська',
    lang: 'ua',
    description: META_DESCRIPTION,

    head: [
      ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ],
  
    themeConfig: {
      nav: getNav(),
  
      sidebar: {
          
      },

      outline: {
        label: 'На цій сторінці',
        level: 'deep',
      },

      returnToTopLabel: 'Наверх',
      sidebarMenuLabel: 'Меню',
      darkModeSwitchLabel: 'Тема',
      langMenuLabel: 'Змінити мову',

      lastUpdated: {
        text: 'Останнє оновлення',
      },

      docFooter: {
        prev: 'Попередня сторінка',
        next: 'Наступна сторінка',
      },
      editLink: {
        pattern: 'https://github.com/KotatsuApp/website/edit/master/website/:path',
        text: 'Запропонувати зміни на цій сторінці',
      },
      footer: {
        message: "<a href=\"https://www.gnu.org/licenses/gpl-3.0.en.html\" target=\"_blank\">Ліцензія GPL-3.0</a> <span class=\"divider\">|</span> <a href=\"/privacy/\">Політика конфіденційності</a>",
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} Kotatsu Developers`,
      },

      components: components.filter(component => component.path.startsWith('ru/components/')),
    }
  }
}

function getNav(): DefaultTheme.NavItem[] {
    return [
      {
        text: 'v{app_version}',
        activeMatch: "^/*?(download|changelogs)/*?$",
          items: [
              {
                  text: "Завантажити",
                  link: "/ua/download/",
              },
              {
                  text: "Зміни у версіях",
                  link: "/ua/changelogs/",
              },
          ],
      },
      {
          text: "Інструкції",
          link: "/ua/manuals/guides/getting-started",
          activeMatch: "/ua/manuals/",
      },
      {
          text: "Новини",
          link: "/ua/news/",
          activeMatch: "/ua/news/",
      },
    ]
  }