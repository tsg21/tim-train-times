

exports.departuresSpeech = (data) => {

  services = data['lt2:trainServices']['lt2:service']

  // get the first few

  return services
    .slice(0, 2)
    .map((i) => { return "The " + i['lt2:std'] + " to " + i['lt2:destination']['lt2:location']['lt2:locationName'] + " is " + i['lt2:etd'] + "." })
    .reduce((a,b) => { return a+" "+b})


  /*{
    "lt2:origin": {
      "lt2:location": {
        "lt2:locationName": "Sutton (Surrey)",
        "lt2:crs": "SUO"
      }
    },
    "lt2:destination": {
      "lt2:location": {
        "lt2:locationName": "Luton",
        "lt2:crs": "LUT"
      }
    },
    "lt2:std": "19:44",
    "lt2:etd": "On time",
    "lt2:platform": "2",
    "lt2:operator": "Thameslink",
    "lt2:operatorCode": "TL",
    "lt2:serviceID": "WqPdWbALezqCRrqFRe1+DQ=="
  }*/

}
