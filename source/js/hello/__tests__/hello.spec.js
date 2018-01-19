import hello from '../index.js'

describe('hello', function () {
  it('should return true', function () {
    var helloResult = hello()
    expect(helloResult, 'hello()').to.be.true
  })
})
