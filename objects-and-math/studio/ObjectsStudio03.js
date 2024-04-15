// Code your crewMass function here:

function crewMass(arr) {
  let mass = 0;
  for (let i = 0; i < arr.length; i ++) {
    mass += arr[i].mass
  }
  return mass 
}

// Code your fuelRequired function here:

function fuelRequired(totalCrewMass, shuttleMass = 75000) {
  let mass = crewMass(crewArr) + shuttleMass
  let fuel = 9.5 * (totalCrewMass + shuttleMass)
  for ( let i = 0; i < buildCrewArray.length; i++) {
    if (crewArr{i}.species === 'dog' || crewArr[i].species) === 'cat') {
      fuel = fuel + 100
    } else fuel = fuel + 100
  }
  console.log(`The mission has a launch mass of ${ } kg and requeires ${} kg of fuel.`)
  
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 console.log(crewMass(mass));

 console.log(fuelRequired(crew));