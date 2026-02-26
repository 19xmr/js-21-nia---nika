const hotelsGrid = document.getElementById('hotelsGrid');
async function getHotels() {
    const response = await fetch('https://hotelbooking.stepprojects.ge/api/Hotels/GetAllHotels');
    const hotels = await response.json();
   
    hotels.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'hotel-card';
        card.innerHTML = `
            <img src="${hotel.featuredImage}" alt="${hotel.name}">
            <h3>${hotel.name}</h3>
            <button onclick="viewRooms(${hotel.id})">ოთახების ნახვა</button>
        `;
        hotelsGrid.appendChild(card);
    });
}

function viewRooms(id) {
    localStorage.setItem('selectedHotelId', id);
    window.location.href = 'rooms.html';
}

getHotels();