/*The following code adds event listerners to the forms and handles form submission*/ 

//Waiting for html document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  //Select form : 'booking form' or 'registration form'
  const form = document.querySelector("#form");
  const registrationForm = document.querySelector("#registration_form");

  if (form) {
    //Add an event listener for the booking form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      //Retrieving data from the form
      const fullName = document.querySelector("#fullName").value;
      const email = document.querySelector("#email").value;
      const phoneNumber = document.querySelector("#phoneNumber").value;
      const serviceType = document.querySelector("#serviceType").value;
      const bookingDate = document.querySelector("#bookingDate").value;
      const bookingTime = document.querySelector("#bookingTime").value;

      //Store the retrieved form data in localstorage
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("email", email);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("serviceType", serviceType);
      localStorage.setItem("bookingDate", bookingDate);
      localStorage.setItem("bookingTime", bookingTime);

      
      window.location.href = "confirmation.html";
    });
  }

  if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const businessName = document.querySelector("#business_name").value;
      const businessRegistration = document.querySelector("#business_registration").value;
      const businessEmail = document.querySelector("#business_email").value;
      const businessNumber = document.querySelector("#business_number").value;
      const businessAddress = document.querySelector("#business_address").value;
      const servicesOffered = document.querySelector("#services_offered").value;
      const openingHours = document.querySelector("#opening_hours").value;
      const website = document.querySelector("#website").value;

      localStorage.setItem("businessName", businessName);
      localStorage.setItem("businessRegistration", businessRegistration);
      localStorage.setItem("businessEmail", businessEmail);
      localStorage.setItem("businessNumber", businessNumber);
      localStorage.setItem("businessAddress", businessAddress);
      localStorage.setItem("servicesOffered", servicesOffered);
      localStorage.setItem("openingHours", openingHours);
      localStorage.setItem("website", website);


      window.location.href = "registration_confirmation.html";
    });
  }

  /*Displaying data on the confirmation page*/

  //
  const confirmationPage = window.location.pathname.split("/").pop();
  if (confirmationPage === "confirmation.html") {
    document.getElementById("fullName").textContent = localStorage.getItem("fullName");
    document.getElementById("email").textContent = localStorage.getItem("email");
    document.getElementById("phoneNumber").textContent = localStorage.getItem("phoneNumber");
    document.getElementById("serviceType").textContent = localStorage.getItem("serviceType");
    document.getElementById("bookingDate").textContent = localStorage.getItem("bookingDate");
    document.getElementById("bookingTime").textContent = localStorage.getItem("bookingTime");
  } else if (confirmationPage === "registration_confirmation.html") {
    document.getElementById("businessName").textContent = localStorage.getItem("businessName");
    document.getElementById("businessRegistration").textContent = localStorage.getItem("businessRegistration");
    document.getElementById("businessEmail").textContent = localStorage.getItem("businessEmail");
    document.getElementById("businessNumber").textContent = localStorage.getItem("businessNumber");
    document.getElementById("businessAddress").textContent = localStorage.getItem("businessAddress");
    document.getElementById("servicesOffered").textContent = localStorage.getItem("servicesOffered");
    document.getElementById("openingHours").textContent = localStorage.getItem("openingHours");
    document.getElementById("website").textContent = localStorage.getItem("website");
  }
});
