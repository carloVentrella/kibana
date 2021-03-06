import expect from 'expect.js';
import { fieldFormats } from 'ui/registry/field_formats';
describe('String Truncate Format', function () {


  it('truncate large string', function () {
    const Truncate = fieldFormats.getType('truncate');
    const truncate = new Truncate({ fieldLength: 4 });

    expect(truncate.convert('This is some text')).to.be('This...');
  });

  it('does not truncate large string when field length is not a string', function () {
    const Truncate = fieldFormats.getType('truncate');
    const truncate = new Truncate({ fieldLength: 'not number' });

    expect(truncate.convert('This is some text')).to.be('This is some text');
  });

  it('does not truncate large string when field length is null', function () {
    const Truncate = fieldFormats.getType('truncate');
    const truncate = new Truncate({ fieldLength: null });

    expect(truncate.convert('This is some text')).to.be('This is some text');
  });

  it('does not truncate large string when field length larger than the text', function () {
    const Truncate = fieldFormats.getType('truncate');
    const truncate = new Truncate({ fieldLength: 100000 });

    expect(truncate.convert('This is some text')).to.be('This is some text');
  });
});
