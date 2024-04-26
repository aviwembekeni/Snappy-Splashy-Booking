document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");
  //   const registrationForm = document.querySelector("#registration_form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submit action

    const fullName = document.querySelector("#fullName").value;
    const email = document.querySelector("#email").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;
    const serviceType = document.querySelector("#serviceType").value;
    const bookingDate = document.querySelector("#bookingDate").value;
    const bookingTime = document.querySelector("#bookingTime").value;

    console.log("Name:", fullName);
    console.log("Email:", email);
    console.log("phoneNumber:", phoneNumber);
    console.log("serviceType:", serviceType);
    console.log("bookingDate:", bookingDate);
    console.log("bookingTime:", bookingTime);

    // Optionally: Implement AJAX to submit these values to a server
    // submitFormData(name, email);
  });

  //   registrationForm.addEventListener("submit", function (event) {
  //     event.preventDefault(); // Prevent the default form submit action

  //     const businessName = document.querySelector("#business_name").value;
  //     const businessEmail = document.querySelector("#business_email").value;
  //     const businessPhoneNumber =
  //       document.querySelector("#business_number").value;
  //     const serviceType = document.querySelector("#serviceType").value;
  //     const bookingDate = document.querySelector("#bookingDate").value;
  //     const bookingTime = document.querySelector("#bookingTime").value;

  //     console.log("Name:", businessName);
  //     console.log("Email:", businessEmail);
  //     console.log("phoneNumber:", businessPhoneNumber);
  //     console.log("serviceType:", serviceType);
  //     console.log("bookingDate:", bookingDate);
  //     console.log("bookingTime:", bookingTime);

  //     // Optionally: Implement AJAX to submit these values to a server
  //     // submitFormData(name, email);
  //   });
});
