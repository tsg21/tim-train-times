var http = require('http');
var parseString = require('xml2js').parseString;
var util = require('util')
var needle = require('needle');

var request = '<?xml version="1.0"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://thalesgroup.com/RTTI/2014-02-20/ldb/" xmlns:ns4="http://thalesgroup.com/RTTI/2010-11-01/ldb/commontypes">  '+
              '<SOAP-ENV:Header>    <ns4:AccessToken>      <ns4:TokenValue>be101521-5f22-42f4-8a4f-64ecaf941cce</ns4:TokenValue>    </ns4:AccessToken>  </SOAP-ENV:Header> '+
              ' <SOAP-ENV:Body>    <ns1:GetDepartureBoardRequest>      <ns1:numRows>10</ns1:numRows>      <ns1:crs>SAC</ns1:crs>    </ns1:GetDepartureBoardRequest>  </SOAP-ENV:Body>'+
              '</SOAP-ENV:Envelope>';

//

exports.handler = (event, context, callback) => {

  console.log(event);

  needle.post(
     'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb6.asmx',
     request,
     { content_type: 'text/xml' },
     (error, response, body) => {
       console.log(response.statusCode);
        if (error) {
          console.log(error);
        } else if (response.statusCode == 200) {

          var resp = body['soap:Envelope']['soap:Body']['GetDepartureBoardResponse']['GetStationBoardResult']

          callback(null, resp);

          // console.log(util.inspect(resp, false, null))

        } else {
          console.log(body);
        }
     }
  );

};
