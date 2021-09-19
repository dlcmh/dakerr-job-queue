import { Router } from 'itty-router'

const router = Router()

router.get('/', () => {
  return new Response('Hello, world!')
})

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(router.handle(event.request))
})
