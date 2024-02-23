import Tokens from 'csrf'

import type { APIContext } from 'astro'

export const prerender = false

export function GET({ request }: APIContext) {
	const csrf = new Tokens()
	const secret = csrf.secretSync()
	const token = csrf.create(secret)

	return new Response(JSON.stringify({ token: token }))
}
