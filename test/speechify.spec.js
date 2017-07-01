var assert = require('assert');

var speechify = require('../lib/speechify');

var testData = require('./speechify-data.js')

describe('speechify', function() {
  describe('#departuresSpeech()', function() {
    it('Simple first speech', function() {


      assert.equal(
        "The 19:44 to Luton is On time. The 19:44 to Sutton (Surrey) is On time.",
        speechify.departuresSpeech(testData.data)
      );
    });
  });
});
