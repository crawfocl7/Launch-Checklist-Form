
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(planets) {
     console.log(planets);
     let index = Math.floor(Math.random()*planets.length);
     document.getElementById('missionTarget').innerHTML = `
     <h2>Mission Destination</h2>
       <ol>
         <li>Name: ${planets[index].name}</li>
         <li>Diameter: ${planets[index].diameter}</li>
         <li>Star: ${planets[index].star}</li>
         <li>Distance from Earth: ${planets[index].distance}</li>
         <li>Number of Moons: ${planets[index].moons}</li>
       </ol>
       <img src="${planets[index].image}">`
   });
});      


window.addEventListener("load", function() { 
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
 let pilotName = document.getElementById("pilotName");
 let pilotStatus = document.getElementById("pilotStatus");
 let copilotName = document.getElementById("copilotName");
 let copilotStatus = document.getElementById("copilotStatus");
 let fuelLevel = document.getElementById("fuelLevel").value;
 let fuelStatus = document.getElementById("fuelStatus");
 let cargoMass = document.getElementById("cargoMass").value;
 let cargoStatus = document.getElementById("cargoStatus");
 let launchStatus = document.getElementById("launchStatus");
 
 let faultyItems = document.getElementById("faultyItems");
 let statusVisible = 0;
 let fuelGood = false;
 let cargoGood = false;

if (pilotName.value === "" || copilotName === "" || fuelLevel === "" || cargoMass === ""){
   alert("All fields are required!");
}

if (pilotName.value === "") {
   event.preventDefault();

} else if (!isNaN(pilotName.value)) {
   alert("Name should include only letters.");
   event.preventDefault();

} else {
   statusVisible += 1;
}

 if (copilotName.value === "") {
    event.preventDefault();

 }  else if (!isNaN(copilotName.value)) {
    alert("Co-Pilot Name should include only letters.");
    event.preventDefault();

 } else{
    statusVisible += 1;
 }

 if (fuelLevel === "") {
    launchStatus.innerHTML = `Shuttle Not Ready for Launch.`;
    launchStatus.style.color = "red";
    event.preventDefault();

 } else if (isNaN(fuelLevel)) {
    alert("Fuel Level should be a number.");
   event.preventDefault();

 } else {
    fuelLevel = Number(fuelLevel);
     statusVisible += 1;

     if (fuelLevel < 10000) {
      fuelStatus.innerHTML = `Fuel level too low for launch.`;
      launchStatus.innerHTML = `Shuttle Not Ready for Launch.`;
      launchStatus.style.color = "red";

     } else {
      fuelStatus.innerHTML = `Fuel level high enough for launch.`;
      fuelGood = true;
     }
 }

 if (cargoMass === "") {
    launchStatus.innerHTML = `Shuttle Not Ready for Launch.`;
    launchStatus.style.color = "red";
    event.preventDefault();

 } else if (isNaN(cargoMass)) {
    alert("Cargo Mass should be a number.");
    event.preventDefault();

 } else {
    cargoMass = Number(cargoMass);
     statusVisible += 1;
     if (cargoMass > 10000) {
      cargoStatus.innerHTML = `Cargo mass too high for launch.`;
      launchStatus.innerHTML = `Shuttle Not Ready for Launch.`;
      launchStatus.style.color = "red";

     } else {
      cargoStatus.innerHTML = `Cargo mass low enough for launch.`;
      cargoGood = true;
     }
 }

 if (fuelGood && cargoGood) {
   launchStatus.innerHTML = `Shuttle Is Ready for Launch.`;
   launchStatus.style.color = "green";
  }
  
  pilotStatus.innerHTML = `Pilot: ${pilotName.value} is ready for launch.`;
  copilotStatus.innerHTML = `Co-pilot: ${copilotName.value} is ready for launch.`;

 event.preventDefault();

 if(statusVisible === 4){
   faultyItems.style.visibility = "visible";
 } else{
   faultyItems.style.visibility = "hidden";
 }

});
}); 