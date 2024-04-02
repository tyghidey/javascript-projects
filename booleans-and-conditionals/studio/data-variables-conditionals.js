// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM"
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKG = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKG;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maxMassLimit = 850000;
let fuelTempCelsius = -225;
let minFuelTemp = -300;
let maxFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount < 8 && astronautCount !== 0) {
    console.log("Ideal number of astronauts to fly. ");
} else if (astronautCount >= 8){
    console.log("We don't have enough supplies for this many astronauts. No more than 7 can fit in the pit.");
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready"){
    console.log("Astronauts are ready to fly. ");
} else{
    console.log("Standby. Astronauts need more time for takeoff. ");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maxMassLimit){
    console.log("Weight is within range. ")
} else {
    console.log("Weight level is unsafe. Reduce load. ");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > -300 && fuelTempCelsius < -150) {
    console.log("Fuel temperature is within range. ");
} else {
    console.log("Fuel temperature is not within a safe range. ");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%"){ 
    console.log("Fuel level is full and ready to go. ")
} else {
    console.log("More fuel needed for liftoff. ");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear"){
    console.log("Skies are clear for liftoff.")
} else {
    console.log("Weather is not ideal for liftoff. Please standby");
}
// Verify shuttle launch can proceed based on above conditions

console.log(astronautCount);
console.log(crewMassKg);
console.log(fuelMassKg);
console.log(shuttleMassKg);
console.log(totalMassKg);
console.log(fuelTempCelsius);
console.log(weatherStatus);

let opening = "All systems are a go! Initiating space shuttle launch sequence. "
let dashMark = "_______________________________________________________________"
console.log(`${opening} \n ${dashMark}`);
console.log(`Date: ${date} \nTime: ${time} \nAstronaut Count: ${astronautCount} \nCrew Mass: ${crewMassKg} kg \nFuel Mass: ${fuelMassKg} kg \nShuttle Mass: ${shuttleMassKg} kg \nTotal Mass: ${totalMassKg} kg \nFuel Temperature: ${fuelTempCelsius} C \nWeather Status: ${weatherStatus} \n${dashMark} \nHave a safe trip astronauts!`);

// let astronautStatus = "ready";
// let averageAstronautMassKG = 80.7;
// let crewMassKg = astronautCount * averageAstronautMassKG;
// let fuelMassKg = 760000;
// let shuttleMassKg = 74842.31;
// let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
// let maxMassLimit = 850000;
// let fuelTempCelsius = -225;
// let minFuelTemp = -300;
// let maxFuelTemp = -150;
// let fuelLevel = "100%";
// let weatherStatus = "clear";
// let preparedForLiftOff = true;