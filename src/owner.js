// src/owner.js
document.addEventListener('DOMContentLoaded', () => {
    // Mockup data for demo purpose
    const userEmail = "owner@example.com"; // Replace with actual user email from login session
    document.getElementById('ownerEmail').textContent = userEmail;

    // Mockup for the charging stations data
    const stations = [
        { id: 1, location: "123 Main St", pricePerHour: 5 },
        { id: 2, location: "456 Elm St", pricePerHour: 4 }
    ];

    const stationsList = document.getElementById('stationsList');

    // Function to display charging stations
    function displayStations() {
        stationsList.innerHTML = ""; // Clear previous list
        stations.forEach(station => {
            const stationElement = document.createElement('div');
            stationElement.textContent = `Location: ${station.location}, Price per hour: $${station.pricePerHour}`;
            stationsList.appendChild(stationElement);
        });
    }

    // Add charging station
    document.getElementById('addStationButton').addEventListener('click', () => {
        const locationInput = document.getElementById('locationInput').value;
        const priceInput = document.getElementById('priceInput').value;

        if (locationInput && priceInput) {
            const newStation = {
                id: stations.length + 1,
                location: locationInput,
                pricePerHour: parseFloat(priceInput)
            };
            stations.push(newStation); // Add new station to the list
            displayStations(); // Refresh the displayed stations
            document.getElementById('locationInput').value = ""; // Clear input
            document.getElementById('priceInput').value = ""; // Clear input
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Initial display of stations
    displayStations();
});
