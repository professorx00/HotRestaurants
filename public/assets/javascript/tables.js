$(document).ready(function() {

  let getTables = () => {

    $.get('/getTables', (data) => {

      console.log(data)
      data.results.forEach(({customerName, email, phone, customerID}) => {
        
      });

    })

  }

  $("a#tablesBtn").on("click", (event) => {
    console.log("where is my data?");
    console.log(event);
    getTables();
  })

});