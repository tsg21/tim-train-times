
var openldbws = require('./lib/open-ldbws');
var speechify = require('./lib/speechify');


exports.handler = (event, context, callback) => {
  var crs = event['queryStringParameters']['CRS']

  openldbws.departureBoard(crs, (data) => {
    var speech = speechify.departuresSpeech(data)


    var response = {
        statusCode: 200,
        headers: {},
        body: JSON.stringify({ 'speech': speech, 'displayText': speech })
    };
    console.log("response: " + JSON.stringify(response))
    callback(null, response);
  })
};
