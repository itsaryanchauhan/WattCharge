import { databases } from './appwrite.js'; // Ensure you import the Appwrite database instance

document.getElementById("chargingProviderForm").onsubmit = async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const chargerWattage = document.getElementById("chargerWattage").value;
    const availability = document.getElementById("availability").value;

    // Create user object
    const user = {
        role: 'Charging Provider',
        name: name,
        phone: phone,
        email: email,
        address: address,
        chargerWattage: chargerWattage,
        availability: availability,
    };

    try {
        // Store user in Appwrite database
        const response = await databases.createDocument('YOUR_DATABASE_ID', 'YOUR_COLLECTION_ID', 'unique()', user);
        console.log('User added successfully:', response);

        // Redirect to a confirmation page or another part of your app
        window.location.href = "confirmation.html"; // Update to your confirmation page or next step
    } catch (error) {
        console.error('Error adding user:', error);
        alert('There was an error registering the user. Please try again.');
    }
};
