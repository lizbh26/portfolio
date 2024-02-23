import { default_language, language_list } from './languages'
import uiText from './translator'

export function getLangFromUrl(url: URL) {
	const [_domain, lang] = url.pathname.split('/')
	if (lang in language_list) return lang as keyof typeof language_list
	return default_language
}

export function useTranslations(lang: keyof typeof language_list) {
	return function t(
		component: keyof (typeof uiText)[typeof default_language],
	) {
		return uiText[lang][component] || uiText[default_language][component]
	}
}
