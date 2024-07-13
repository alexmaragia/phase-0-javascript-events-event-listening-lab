// Function to add event listener to the input element
function addingEventListener() {
    // Get the input element by its ID
    const input = document.getElementById('button');
    
    // Define the callback function to be called on click event
    function clickAlert() {
        alert('I was clicked!');
    }

    // Add the click event listener to the input element
    input.addEventListener('click', clickAlert);
}

// Call the function to add the event listener when the script loads
addingEventListener();
