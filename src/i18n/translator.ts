interface TranslatableText {
	'header.welcome': string
	'header.tagline': string
	'header.question': string
	'header.cta': string

	'about-me.title': string
	'about-me.paragraph-1': string
	'about-me.paragraph-2': string
	'about-me.paragraph-3': string

	'experience.title': string

	'experiece.skills.title': string

	'experience.practicasprofesionales.title': string
	'experience.practicasprofesionales.date-started': string
	'experience.practicasprofesionales.date-finished': string
	'experience.practicasprofesionales.employer': string
	'experience.practicasprofesionales.body': string

	'experience.ibm-internship.title': string
	'experience.ibm-internship.date-started': string
	'experience.ibm-internship.date-finished': string
	'experience.ibm-internship.employer': string
	'experience.ibm-internship.body': string

	'experience.resume.title': string
	'experience.resume.subtitle': string
	'experience.resume.button': string

	'contact-me.title': string
	'contact-me.subtitle-1': string
	'contact-me.subtitle-2': string
}

interface uiTextInterface {
	en: TranslatableText
	es: TranslatableText
}

const uiText: uiTextInterface = {
	en: {
		'header.welcome': `Hi! I'm Ashley :)`,
		'header.tagline': `A developer who <strong class="text-primary"> cares deeply </strong> about her user's needs`,
		'header.question': 'Got any ideas you wanna bring into life?',
		'header.cta': 'Hit me up!',

		'about-me.title': `About me`,
		'about-me.paragraph-1':
			"I'm a young junior developer who wants to apply her knowledge to the service of others, by building software that helps improve the lives of people and helps us solve the problems that stop us from improving!",
		'about-me.paragraph-2':
			'My specialization is in full-stack web development, anything ranging from website design to web servers, so I can fit nicely into any task that is needed for development.',
		'about-me.paragraph-3':
			'In my free time, you can find me playing videogames, watching YouTube, geeking about technology or simply relaxing with friends and family :D',

		'experience.title': `Experience`,

		'experiece.skills.title': 'Relevant skills',

		'experience.practicasprofesionales.title': 'Django developer',
		'experience.practicasprofesionales.date-started': 'August 2023',
		'experience.practicasprofesionales.date-finished': 'March 2024',
		'experience.practicasprofesionales.employer':
			'Polytechnic Jorge Matute Remus',
		'experience.practicasprofesionales.body':
			"Through my own initiative and knowledge, I helped my high school upgrade and deploy a system for managing their student's internships with external companies.",

		'experience.ibm-internship.title': 'IBM internship',
		'experience.ibm-internship.date-started': 'May 2024',
		'experience.ibm-internship.date-finished': 'June 2024',
		'experience.ibm-internship.employer': 'IBM of Mexico',
		'experience.ibm-internship.body':
			'Thanks to a school program, I was able to form part of IBM for 2 months. Here, I learned its culture and its way of working, and I improved my teamwork skills.',

		'experience.resume.title': 'Want to know more?',
		'experience.resume.subtitle': 'Get a copy of my resume!',
		'experience.resume.button': 'Download',

		'contact-me.title': 'Contact me',
		'contact-me.subtitle-1': `I'd <span class="align-baseline text-2xl text-red-500">♥</span> to work with you,`,
		'contact-me.subtitle-2': 'so feel free to drop in and say hello!',
	},
	es: {
		'header.welcome': `Hola! Soy Ashley :)`,
		'header.tagline': `Una desarrolladora que se preocupa <strong class="text-primary"> inmensamente </strong> por las necesidades de sus usuarios`,
		'header.question': '¿Tienes alguna idea que quieres traer a la vida?',
		'header.cta': '¡Trabajemos juntos!',

		'about-me.title': `Acerca de mí`,
		'about-me.paragraph-1':
			'Soy una desarrolladora de software junior que quiere aplicar su conocimiento al servicio de otros, construyendo aplicaciones que ayuden a mejorar las vidas de otros y que nos ayuden a solucionar los problemas que nos impiden mejorar.',
		'about-me.paragraph-2':
			'Mi especializacion se encuentra en desarrollo web full-stack, desde diseño de páginas web hasta la creación de servidores en la nube, así que puedo trabajar eficientemente en cualquier tarea que surga.',
		'about-me.paragraph-3':
			'En mi tiempo libre, me puedes encontrar jugando videojuegos de estrategia o de mundo abierto, viendo ensayos en YouTube, o simplemente disfrutando la compañia de amigos y familia.',

		'experience.title': `Experiencia`,

		'experiece.skills.title': 'Habilidades relevantes',

		'experience.practicasprofesionales.title': 'Desarrolladora Django',
		'experience.practicasprofesionales.date-started': 'Agosto 2023',
		'experience.practicasprofesionales.date-finished': 'Marzo 2024',
		'experience.practicasprofesionales.employer':
			'Politécnico Jorge Matute Remus',
		'experience.practicasprofesionales.body':
			'Mediante mi propia iniciativa y conocimiento, ayude a mi preparatoria a actualizar y desplegar un sistema para manejar las prácticas profesionales de sus estudiantes con compañías externas.',

		'experience.ibm-internship.title': 'Becaria en IBM',
		'experience.ibm-internship.date-started': 'Mayo 2024',
		'experience.ibm-internship.date-finished': 'Junio 2024',
		'experience.ibm-internship.employer': 'IBM de México',
		'experience.ibm-internship.body':
			'Gracias a un programa escolar pude formar parte de IBM por dos meses, aprendiendo su cultura y su forma de trabajar, y mejorando mi forma de relacionarme en un equipo.',

		'experience.resume.title': '¿Quieres saber más?',
		'experience.resume.subtitle': 'Puedes descargar una copia de mi CV:',
		'experience.resume.button': 'Descargar',

		'contact-me.title': 'Contáctame',
		'contact-me.subtitle-1': `Me <span class="align-baseline text-2xl text-red-500">♥</span> trabajar contigo,`,
		'contact-me.subtitle-2': '¡así que no dudes en decirme hola!',
	},
}

export default uiText
