const { expect } = require('chai');

describe('sample test', () => {
  it('should run the sample test', (done) => {
    expect('hello'.toUpperCase()).to.eql('HELLO');
    done();
  });
});
