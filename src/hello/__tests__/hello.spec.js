import hello from '../index.js'

describe('hello', () => {
  it('should return true', function () {
    const helloResult = hello()
    expect(helloResult, 'hello()').to.be.true
  })
})
