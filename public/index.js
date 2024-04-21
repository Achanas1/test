// Function to display animal names
function displayAnimalNames(animalNames) {
  var animalList = document.getElementById("animal-list");
  animalList.innerHTML = ""; // Clear existing list
  animalNames.forEach(function(animal) {
    var li = document.createElement("li");
    li.textContent = animal;
    animalList.appendChild(li);
  });
}

// Fetch animal names from the server
fetch('https://test-theta-opal-51.vercel.app/') // Assuming '/api/animals' is the endpoint in your server.js file
  .then(response => response.json())
  .then(data => {
    // Call the function to display animal names
    displayAnimalNames(data.animals);
  })
  .catch(error => console.error('Error fetching animal names:', error));
