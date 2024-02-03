interface TranslatableText {
    "404.title": string,
    "404.go_back": string
    "nav.links.home": string,
    "nav.links.projects": string,
    "nav.links.contact_me": string,
}

interface uiTextInterface {
    en: TranslatableText,
    es: TranslatableText
}

const uiText: uiTextInterface = {
    en: {
            "404.title": "Sorry, this page doesn't exist.",
            "404.go_back": "Go back to HOME",
            "nav.links.home": "Home",
            "nav.links.projects": "Projects",
            "nav.links.contact_me": "Contact me",
    },
    es: {
            "404.title": "Lo siento, esta página no existe.",
            "404.go_back": "Regresar",
            "nav.links.home": "Acerca de mi",
            "nav.links.projects": "Proyectos",
            "nav.links.contact_me": "Contactos",
    }
}

export default uiText