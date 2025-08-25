import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'pt-BR', 'zh-CN'],
 
  // Used when no locale matches
  defaultLocale: 'fr',
  pathnames: {
    "/about": {
      en: "/about",
      fr: "/a-propos",
      "pt-BR": "/sobre",
      "zh-CN": "/guanyu"
    },
    "/meats":{
      en: "/meats",
      fr: "/viandes",
      "pt-BR": "/carnes",
      "zh-CN": "/roupin"
    },
    "/practical-infos":{
      en: "/practical-infos",
      fr: "/infos-pratiques",
      "pt-BR": "/informacoes-praticas",
      "zh-CN": "/shiyong-xinxi"
    },
    "/team":{
      en: "/team",
      fr: "/equipe",
      "pt-BR": "/equipe",
      "zh-CN": "/tuandui"
    },
    "/contact":{
      en: "/contact",
      fr: "/contact",
      "pt-BR": "/contato",
      "zh-CN": "/lianxi"
    }
  }
});