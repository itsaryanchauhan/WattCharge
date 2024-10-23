import { databases } from './appwrite.js'; // Ensure you import the Appwrite database instance

document.getElementById("evDriverForm").onsubmit = async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const dlDetails = document.getElementById("dlDetails").value;
    const rcDetails = document.getElementById("rcDetails").value;
    const chargeRequired = document.getElementById("chargeRequired").value;

    // Create user object
    const user = {
        role: 'EV Driver',
        name: name,
        phone: phone,
        dlDetails: dlDetails,
        rcDetails: rcDetails,
        chargeRequired: chargeRequired,
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
