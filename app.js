const form = document.querySelector("#booking-form");
const fullNameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const checkInInput = document.querySelector("#check-in");
const checkOutInput = document.querySelector("#check-out");
const roomTypeInput = document.querySelector("#room-type");
const guestsInput = document.querySelector("#guests");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    fullName: fullNameInput.value,
    email: emailInput.value,
    checkIn: checkInInput.value,
    checkOut: checkOutInput.value,
    roomType: roomTypeInput.value,
    guests: guestsInput.value,
  };

  fetch(
    "https://hotel-booking-bf1a4-default-rtdb.firebaseio.com/bookings.json",
    {
      method: "POST",
      body: JSON.stringify(formData),
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

