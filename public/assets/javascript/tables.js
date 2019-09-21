$(document).ready(function() {

  let getTables = () => {

    $.get('/getTables', (data) => {

      console.log(data)

    })

  }

  $("a#tablesBtn").on("click", getTables)

});