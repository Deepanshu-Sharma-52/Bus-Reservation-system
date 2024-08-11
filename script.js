document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;
    
    const output = `
        <h2>Reservation Details</h2>
        <p>From: ${from}</p>
        <p>To: ${to}</p>
        <p>Date: ${date}</p>
        <p>Number of Seats: ${seats}</p>
    `;
    
    document.getElementById('output').innerHTML = output;

   
