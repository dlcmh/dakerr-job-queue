import { Router } from 'itty-router'

const router = Router()

router.get('/', () => {
  return new Response('Hello, world!')
})

router.get('/exercise_buddy/crushed_it', () => {
  return new Response('/exercise_buddy/crushed_it')
})

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(router.handle(event.request))
})
