

const hotel = require('./hotel')


test('must get Biryani', async () => {
    let food = await hotel.getFood()
    expect(food).toEqual("biryani")
})