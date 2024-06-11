interface TranslatableText {
	'about-me.welcome': string
	'about-me.tagline': string
	'about-me.title': string
	'about-me.paragraph-1': string
	'about-me.paragraph-2': string
	'about-me.paragraph-3': string

	'experience.title': string
	'experience.intro': string

	'experience.practicasprofesionales.title': string
	'experience.practicasprofesionales.date-started': string
	'experience.practicasprofesionales.date-finished': string
	'experience.practicasprofesionales.body': string

	'experience.ibm-internship.title': string
	'experience.ibm-internship.date-started': string
	'experience.ibm-internship.date-finished': string
	'experience.ibm-internship.body': string

	'experience.technical-skills.title': string
	'experience.technical-skills.intro': string

	'contact-me.title': string
	'contact-me.subtitle-1': string
	'contact-me.subtitle-2': string

	'footer.credits': string
}

interface uiTextInterface {
	en: TranslatableText
	es: TranslatableText
}

const uiText: uiTextInterface = {
	en: {
		'about-me.welcome': `Hi! <span class="text-rose-400">I'm Ashley </span>:)`,
		'about-me.tagline': `A developer who <strong class="text-rose-400"> cares deeply </strong> about her user's needs`,
		'about-me.title': `About me`,
		'about-me.paragraph-1':
			'A problem solver by nature, I started coding when I was 12 years old, finding the ins-and-outs of many technologies and learning restlessly.',
		'about-me.paragraph-2':
			'Now I want to apply that knowledge to the service of others, by building software that helps improve the lives of people and helps us solve the problems that stop us from improving.',
		'about-me.paragraph-3': `In my spare time, I advocate for LGBTQ+ rights and feminism, have some light existencial dread for dinner, spend time alone reading or with my friends, and eat tons of cookies in`,

		'experience.title': `Experience`,
		'experience.intro': `Here are some noteworthy projects I've done and positions I've held`,

		'experience.practicasprofesionales.title': 'Django developer',
		'experience.practicasprofesionales.date-started': 'August 2023',
		'experience.practicasprofesionales.date-finished': 'March 2024',
		'experience.practicasprofesionales.body':
			"Through my own initiative and knowledge, I helped my high school upgrade and deploy a system for managing their student's internships with external companies.",

		'experience.ibm-internship.title': 'IBM internship',
		'experience.ibm-internship.date-started': 'May 2024',
		'experience.ibm-internship.date-finished': 'June 2024',
		'experience.ibm-internship.body':
			'Thanks to a school program, I was able to form part of IBM for 2 months. Here, I learned how big teams work and how each individual actor matters. I was tasked with improving the support pages for an internal application, and was freely able to contribute ideas on changes and improvements.',

		'experience.technical-skills.title': 'Technical skills',
		'experience.technical-skills.intro':
			"These are some the technologies I've had the pleasure of going mad with",

		'contact-me.title': 'Contact me',
		'contact-me.subtitle-1': `I'd <span class="align-baseline text-2xl text-red-500">♥</span> to work with you,`,
		'contact-me.subtitle-2': 'so feel free to drop in and say hello!',

		'footer.credits': `Website design inspired by Brittany Chang's portfolio, <a href="https://v1.brittanychiang.com/" class="underline">version 1</a> and <a href="https://brittanychiang.com/" class="underline">version 4</a>, by <a href="http://findmatthew.com/" class="underline">Matthew Williams' website</a> and by <a href="https://www.lokkeestudios.com" class="underline">Lokee Studios' website</a>.`,
	},
	es: {
		'about-me.welcome': `Hola! <span class="text-rose-400">Soy Ashley </span> :)`,
		'about-me.tagline': `Una desarrolladora que se preocupa <strong class="text-rose-400"> inmensamente </strong> por las necesidades de sus usuarios`,
		'about-me.title': `Acerca de mí`,
		'about-me.paragraph-1': 'Siempre una amante de resolver problemas lógicos, encontré mi pasión por la programación como una manera de usar lógica y abstracciones para generar resultados físicos desde que tenía 12 años, aprendiendo sin descanso y probando muchas tecnologías.',
		'about-me.paragraph-2': 'Ahora, quiero aplicar ese conocimiento para el servicio de otros, construyendo software que ayude a mejorar vidas y que nos ayude a solucionar los problemas que nos impiden mejorar.',
		'about-me.paragraph-3': 'En mi tiempo libre, defiendo los derechos de las personas LGBTQ+ y apoyo al feminismo, tengo ligeras crisis existenciales mientras desayuno, paso tiempo a solas leyendo o con amigos, y cómo un montón de galletitas en',

		'experience.title': `Experiencia`,
		'experience.intro': `Algunos proyectos notables en los que he trabajado y puestos que he ocupado.`,

		'experience.practicasprofesionales.title': 'Desarrolladora Django',
		'experience.practicasprofesionales.date-started': 'Agosto 2023',
		'experience.practicasprofesionales.date-finished': 'Marzo 2024',
		'experience.practicasprofesionales.body': 'Mediante mi propia iniciativa y conocimiento, ayude a mi preparatoria a actualizar y desplegar un sistema para manejar las prácticas profesionales de sus estudiantes con compañías externas.',

		'experience.ibm-internship.title': 'Becaria en IBM',
		'experience.ibm-internship.date-started': 'Mayo 2024',
		'experience.ibm-internship.date-finished': 'Junio 2024',
		'experience.ibm-internship.body': 'Gracias a un programa escolar, forme parte de IBM por dos meses, aprendiendo su cultura y su forma de trabajar, y mejorando mi forma de relacionarme en un equipos',

		'experience.technical-skills.title': 'Habilidades técnicas',
		'experience.technical-skills.intro':
			'Estas son algunas de las tecnologías con las que he tenido el placer de volverme loca',

		'contact-me.title': 'Contáctame',
		'contact-me.subtitle-1': `Me <span class="align-baseline text-2xl text-red-500">♥</span> trabajar contigo,`,
		'contact-me.subtitle-2': '¡así que no dudes en decirme hola!',

		'footer.credits': `Diseño inspirado por el portafolio de Brittany Chang, <a href="https://v1.brittanychiang.com/" class="underline">versión 1</a> y <a href="https://brittanychiang.com/" class="underline">versión 4</a>, por la página de <a href="http://findmatthew.com/" class="underline">Matthew William</a> y por la página de <a href="https://www.lokkeestudios.com" class="underline">Lokee Studios</a>.`,
	},
}

export default uiText
