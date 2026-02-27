const cardsContainer = document.getElementById("hotelCards");

fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll") 
    .then(response => response.json())
    .then(rooms => {
        cardsContainer.innerHTML = "";

        rooms.forEach(room => {
            const card = document.createElement("div");
            card.className = "card";

            const imageUrl = room.images && room.images.length > 0
                ? `https://hotelbooking.stepprojects.ge/${room.images[0].source}`
                : "test img.avif";

            card.innerHTML = `
                <img src="${imageUrl}" alt="${room.name}">

                <div class="info">
                    <div>
                        <h4>${room.name}</h4>
                        <p>€${room.pricePerNight} <span>a night</span></p>
                    </div>
                </div>

                <button class="bookBtn">BOOK NOW</button>
            `;

            const bookButton = card.querySelector(".bookBtn");
            bookButton.addEventListener("click", () => {
                window.location.href = "Reservation.html"; 
            });

            cardsContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Rooms API error:", error);
    });