$(document).ready(function() {

  let getTables = () => {

    $.get('/getTables', (data) => {

      console.log(data)
      data.results.forEach(({customerName, email, phone, customerID}) => {

        $(".custName").append(`Name : ${customerName}`);
        $(".custID").append(`Name : ${customerID}`);
        $(".custEmail").append(`Name : ${email}`);
        $(".custPhone").append(`Name : ${phone}`);

      });

    });

  };

  $("a#tablesBtn").on("click", (event) => {

    $(".emptyData").empty();

    console.log("where is my data?");
    console.log(event);
    getTables();

  });

});