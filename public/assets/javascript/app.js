$(document).ready(function () {

  let addReservation = () => {

    let newReserve = {

      customerName: $("#customerName").val().trim(),
      customerID: $("#customersID").val().trim(),
      email: $("#customerEmail").val().trim(),
      phone: $("#customerPhone").val().trim()

    };
    console.log(newReserve)
    $.post('/addCustomer', newReserve)
  };

  $("#customerName").val("");
  $("#customersID").val("");
  $("#customerEmail").val("");
  $("#customerPhone").val("");

  $("#submitInfo").on("click", (event) => {

    event.preventDefault();

    addReservation();

  });
});
