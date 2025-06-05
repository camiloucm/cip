window.onload = function() {
    // Obtener la fecha actual
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    // Establecer el atributo min
    let checkinInput = document.getElementById("checkin");
    checkinInput.setAttribute("min", today);
    checkinInput.setAttribute("value", today);

    let end = new Date();
      end.setDate(end.getDate() + 1); // Sumar un día

      let ddend = String(end.getDate()).padStart(2, '0');
      let mmend = String(end.getMonth() + 1).padStart(2, '0'); // Enero es 0!
      let yyyyend = end.getFullYear();

      end = yyyyend + '-' + mmend + '-' + ddend;

    let checkoutInput = document.getElementById("checkout");
    checkoutInput.setAttribute("min", end);
    checkoutInput.setAttribute("value", end);
}