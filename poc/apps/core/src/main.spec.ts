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
    const response = await axios.get('http://localhost:3000')
    expect(response.status).toEqual(200)
  })

  it('deve retornar 404', async () => {
    const response = await axios.get('http://localhost:3000/something')
    expect(response.status).toEqual(404)
  })
})

