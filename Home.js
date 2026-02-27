function SeeHotel(id) {
    localStorage.setItem('selectedHotelId', id);
    window.location.href = 'Hotels.html';
}

function book(id) {
    localStorage.setItem('selectedHotelId', id);
    window.location.href = 'Reservation.html';
}