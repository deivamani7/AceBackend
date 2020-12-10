const request = require('supertest')
const app = require('../../server')
describe('Api Endpoints', () => {
    beforeEach(() => {
        // code to run before each test
     });
    it('should post items', async () => {
        const res = await request(app)
          .post('/api/items').send({
            name: "Concrete",
            rate: "20",
            quantity: "5",
            amount: "100",
          })
        expect(res.statusCode).toEqual(200)
      })

  it('should get items', async () => {
    const res = await request(app)
      .get('/api/items')
    expect(res.statusCode).toEqual(200)
  })

  it('should get item 1', async () => {
    const res = await request(app)
      .get('/api/items/1')
    expect(res.statusCode).toEqual(200)
  })

  it('should get item 1', async () => {
    const res = await request(app)
      .put('/api/items/1').send({
        name: "Concrete",
        rate: "20",
        quantity: "50",
        amount: "1000",
      })
    expect(res.statusCode).toEqual(200)
  })

  it('should get item 1', async () => {
    const res = await request(app)
      .delete('/api/items/1')
    expect(res.statusCode).toEqual(200)
  })
})