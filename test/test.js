const validate = require('../');
const expect = require('chai').expect;

describe('validate', () => {
  it('success', async () => {
    const result = await validate({
      port: 8080
    });
    expect(result.messages).to.be.empty;
  });

  it('error', async() => {
    const result = await validate({
      port: 8080,
      path: '/error'
    });
    expect(result.messages).to.be.not.empty;
  });
});
