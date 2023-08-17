import axios from 'axios'
import { serve } from './main'

describe('Express App', () => {
  let server

   beforeAll(() => {
    server = serve()
   })

   afterAll(() => {
    server.close()
   })

  it('deve retornar 200', async () => {
    const response = await axios.get('http://localhost:3000/hello')
    expect(response.status).toEqual(200)
  })

  it('deve retornar 404', async () => {
    try {
      await axios.get('http://localhost:3000/something')
    } catch (error) {
      expect(error.response.status).toEqual(404)
    }
  })
})

