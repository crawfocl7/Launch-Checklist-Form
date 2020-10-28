
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
 let copilotName = document.getElementById("copilotName");
 let fuelLevel = document.getElementById("fuelLevel");
 let cargoMass = document.getElementById("cargoMass");

 let faultyItems = document.getElementById("faultyItems");
 let pilotStatus = document.getElementById("pilotStatus");
 let copilotStatus = document.getElementById("copilotStatus");
 let fuelStatus = document.getElementById("fuelStatus");
 let cargoStatus = document.getElementById("cargoStatus");
 let launchStatus = document.getElementById("launchStatus");

 if (pilotName.value === "") {
    alert("All fields are required!");
    event.preventDefault();
 } else if (!isNaN(pilotName.value)) {
    alert("Name should include only letters.");
    event.preventDefault();
 }

 if (copilotName.value === "") {
    alert("All fields are required!");
    event.preventDefault();
 }  else if (!isNaN(copilotName.value)) {
    alert("Co-Pilot Name should include only letters.");
    event.preventDefault();
 }

 if (fuelLevel.value === "") {
    alert("All fields are required!");
    event.preventDefault();
 } else if (isNaN(fuelLevel.value)) {
    alert("Fuel Level should be a number.");
     event.preventDefault();
 } else {
     fuelLevel.value = Number(fuelLevel.value);
 }

 if (cargoMass.value === "") {
    alert("All fields are required!");
    event.preventDefault();
 } else if (isNaN(cargoMass.value)) {
    alert("Cargo Mass should be a number.");
    event.preventDefault();
 } else {
     cargoMass.value = Number(cargoMass.value);
 }

 event.preventDefault();
 
if (fuelLevel.value < 10000) {
 faultyItems.style.visibility = "visible";
 fuelStatus.innerHTML = `Fuel level too low for launch.`;
 launchStatus.innerHTML = `Shuttle Not Ready for Launch.`;
 launchStatus.style.color = "red";
} else {
 fuelStatus.innerHTML = `Fuel level high enough for launch.`;
}

if (cargoMass.value > 10000) {
 cargoMass.style.visibility = "visible";
 cargoStatus.innerHTML = `Cargo mass too high for launch.`;
 launchStatus.innerHTML = `Shuttle Not Ready for Launch.`;
 launchStatus.style.color = "red";
} else {
 cargoStatus.innerHTML = `Cargo mass low enough for launch.`;
}

if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
 launchStatus.innerHTML = `Shuttle Is Ready for Launch.`;
 launchStatus.style.color = "green";
}

pilotStatus.innerHTML = `Pilot: ${pilotName.value} is ready for launch.`;
copilotStatus.innerHTML = `Co-pilot: ${copilotName.value} is ready for launch.`;

});
    
});