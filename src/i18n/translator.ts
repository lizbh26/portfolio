interface TranslatableText {
	'404.title': string
	'404.go_back': string

	'nav.links.home': string
	'nav.links.projects': string
	'nav.links.contact-me': string

	'home.tagline': string

	'contact-me.title': string
	'contact-me.subtitle-1': string
	'contact-me.subtitle-2': string
	'contact-me.email-form.name': string
	'contact-me.email-form.email': string
	'contact-me.email-form.message': string
	'contact-me.email-form.send': string
	'contact-me.recaptcha': string
	'contact-me.messages.bad-input': string
	'contact-me.messages.success': string
	'contact-me.messages.failure': string
}

interface uiTextInterface {
	en: TranslatableText
	es: TranslatableText
}

const uiText: uiTextInterface = {
	en: {
		'404.title': "Sorry, this page doesn't exist.",
		'404.go_back': 'Go back to HOME',

		'nav.links.home': 'Home',
		'nav.links.projects': 'Projects',
		'nav.links.contact-me': 'Contact me',

		'home.tagline': "A developer who cares deeply about her user's needs",

		'contact-me.title': 'Contact Info',
		'contact-me.subtitle-1': `I'd <span class="align-baseline text-2xl text-red-500">♥</span> to work with you,`,
		'contact-me.subtitle-2': 'so feel free to drop in and say hello!',
		'contact-me.email-form.name': 'Your name',
		'contact-me.email-form.email': 'Email',
		'contact-me.email-form.message': 'Message',
		'contact-me.email-form.send': 'Send',
		'contact-me.recaptcha': `This site is protected by reCAPTCHA and the Google
            <a
                target="_blank"
                href="https://policies.google.com/privacy"
                class="underline">Privacy Policy</a
            > and
            <a
                target="_blank"
                href="https://policies.google.com/terms"
                class="underline">Terms of Service</a
            > apply.`,
		'contact-me.messages.bad-input':
			'Please fill out all fields in the form.',
		'contact-me.messages.success':
			'Thanks for getting into contact! You can expect to hear from me soon.',
		'contact-me.messages.failure':
			'Something went wrong, please try again.',
	},
	es: {
		'404.title': 'Lo siento, esta página no existe.',
		'404.go_back': 'Regresar',

		'nav.links.home': 'Acerca de mi',
		'nav.links.projects': 'Proyectos',
		'nav.links.contact-me': 'Contactos',

		'home.tagline':
			'Una desarrolladora que se preocupa inmensamente por las necesidades de sus usuarios',

		'contact-me.title': 'Contactos',
		'contact-me.subtitle-1': `Me <span class="align-baseline text-2xl text-red-500">♥</span> trabajar contigo,`,
		'contact-me.subtitle-2': '¡así que no dudes en decirme hola!',
		'contact-me.email-form.name': 'Tu nombre',
		'contact-me.email-form.email': 'Email',
		'contact-me.email-form.message': 'Mensaje',
		'contact-me.email-form.send': 'Enviar',
		'contact-me.recaptcha': `Este sitio es protegido por reCAPTCHA y la
            <a
                target="_blank"
                href="https://policies.google.com/privacy?hl=es"
                class="underline">Política de Privacidad</a
            > y
            <a
                href="https://policies.google.com/terms?hl=es"
                target="_blank"
                class="underline">Términos de Servicio</a
            > de Google aplican.`,
		'contact-me.messages.bad-input':
			'Por favor llena todos los campos del cuestionario.',
		'contact-me.messages.success':
			'¡Gracias por ponerte en contacto! Puedes esperar una respuesta muy pronto.',
		'contact-me.messages.failure':
			'Algo salió mal, por favor vuelve a intentar.',
	},
}

export default uiText
