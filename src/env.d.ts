/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_RECAPTCHA_CLIENT_KEY: string
	readonly RECAPTCHA_SECRET_KEY: string
	readonly EMAIL_USER: string
	readonly EMAIL_PASSWORD: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
