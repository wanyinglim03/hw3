// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Create a well-named variable for each data point in the Object
  let dropoffAddress = ride.dropoffLocation.address
  let dropoffCity = ride.dropoffLocation.city
  let dropoffState = ride.dropoffLocation.state
  let dropoffZip = ride.dropoffLocation.zip
  let numberOfPassengers = ride.numberOfPassengers
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber
  let pickupAddress = ride.pickupLocation.address
  let pickupCity = ride.pickupLocation.city
  let pickupState = ride.pickupLocation.state
  let pickupZip = ride.pickupLocation.zip
  let purpleRequested = ride.purpleRequested

  let serviceLevel
  if (purpleRequested == true) {
    serviceLevel = 'Noober Purple'
  } else if (numberOfPassengers > 3) {
    serviceLevel = 'Noober XL'
  } else {
    serviceLevel = 'Noober X'
  }

  let sentence = `${serviceLevel} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}. Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}.`
  console.log(sentence) 



  // Write the data in the random ride Object to the JavaScript console
  // Use conditional logic to display level of service
  // 
  //Noober X Passenger: Kiley Thompson - (260) 908-6886. Pickup at 1301 N State Pkwy, Chicago, IL 60624. Drop-off at 2362 N Clybourn Ave, Chicago, IL 60657.


  // 🔥 YOUR CODE ENDS HERE 🔥
})
