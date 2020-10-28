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

    if (fuelLevel.value < 10000) {
      faultyItems.style.visibility = "visible";
      fuelStatus.innerHTML = `Fuel level too low for launch.`;
      launchStatus.innerHTML = `Shuttle Not Ready for Launch.`;
      launchStatus.style.color = "red";
    }

    if (cargoMass.value > 10000) {
      cargoMass.style.visibility = "visible";
      cargoStatus.innerHTML = `Cargo mass too high for launch.`;
      launchStatus.innerHTML = `Shuttle Not Ready for Launch.`;
      launchStatus.style.color = "red";
    }

    if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
      launchStatus.innerHTML = `Shuttle Is Ready for Launch.`;
      launchStatus.style.color = "green";
    }

    pilotStatus.innerHTML = `Pilot: ${pilotName.value} is ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot: ${copilotName.value} is ready for launch.`;


  event.preventDefault();
   });
         
});




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
