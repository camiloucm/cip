const CONSULT = document.getElementById ('consult');
const BACKGROUND = document.getElementById ('blackgroundDialog');
const BACKPAGE = document.getElementById ('closePageOne');
const CHECKIN = document.getElementById ('checkin');
const CHECKOUT = document.getElementById ('checkout');
const PAX = document.getElementById ('pax');
const SPAN_CHECKIN = document.getElementById ('spanCheckIn');
const SPAN_CHECKOUT = document.getElementById ('spanChekOut');
const SPAN_PAX = document.getElementById ('spanPax');
const PAGE_ONE = document.querySelector ('.dialog-active');
const PAGE_TWO = document.querySelector ('.dialog-inactive');
const NEXT_PAGE = document.querySelector ('.nextPage');
const SEND_RESERVATION = document.querySelector ('.sentReservation');
const PAGINATION = document.getElementById ('circle-inactive');
const SEP_PAGINATION = document.getElementById ('separatorPagination');
const SPAN_COST = document.getElementById ('spanCost');
const SPAN_TAX = document.getElementById ('spanTax');
const SPAN_TOTAL = document.getElementById ('spanTotal');
const DIALOG = document.getElementById ('dialog'); // Referencia al elemento dialog

CONSULT.addEventListener ('click', function () {
    BACKGROUND.classList.remove ('invisible');

    let checkinValue = CHECKIN.value;
    let checkoutValue = CHECKOUT.value;
    let paxValue = parseFloat(PAX.value);

    SPAN_CHECKIN.innerHTML = checkinValue;
    SPAN_CHECKOUT.innerHTML = checkoutValue;
    SPAN_PAX.innerHTML = paxValue;
});

BACKPAGE.addEventListener ('click', function () {
    BACKGROUND.classList.add ('invisible');
    DIALOG.close(); // Cerrar el diálogo también
});

NEXT_PAGE.addEventListener('click', function() {
  PAGE_ONE.classList.replace('dialog-active', 'dialog-inactive');
  PAGE_TWO.classList.replace('dialog-inactive', 'dialog-active');
  PAGINATION.classList.replace('circle-inactive', 'circle-active');
  SEP_PAGINATION.classList.replace('border-primary', 'border-secondary');

  let paxValue = parseFloat(PAX.value);
  let onePax = 46;
  let paxExtra = paxValue - 1;
  let sobrePax = paxExtra * 10;
  let valueToPay;

  function value_to_pay() {
    if (paxValue === 1) {
      valueToPay = onePax;
    } else if (paxValue >= 2) {
      valueToPay = onePax + sobrePax;
    } else {
      valueToPay = 0;
    }
    return valueToPay;
  }

  value_to_pay();

  let valueTax = valueToPay * 0.1;

  SPAN_COST.innerText = valueToPay.toFixed(2);
  SPAN_TAX.innerText = valueTax.toFixed(2);
  SPAN_TOTAL.innerText = (valueToPay + valueTax).toFixed(2);
});

async function sendEmail(data) {
  try {
      const response = await fetch('http://localhost:4321/send-email', { // Reemplaza con la URL de tu servidor
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (response.ok) {
          alert('Correo electrónico enviado correctamente!');
      } else {
          alert('Error al enviar el correo electrónico.');
      }
  } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      alert('Error al enviar el correo electrónico.');
  }
  DIALOG.close(); // Cerrar el diálogo después de intentar enviar el correo
  BACKGROUND.classList.add ('invisible');
}

SEND_RESERVATION.addEventListener ('click', function () {
    // Recopila los datos del formulario
    const reservationData = {
        checkin: CHECKIN.value,
        checkout: CHECKOUT.value,
        pax: parseFloat(PAX.value),
        cost: parseFloat(SPAN_COST.innerText),
        tax: parseFloat(SPAN_TAX.innerText),
        total: parseFloat(SPAN_TOTAL.innerText)
    };

    // Llama a la función sendEmail para enviar los datos
    sendEmail(reservationData);

    // Cierra la ventana modal (esto puede ser redundante si sendEmail es exitoso)
    //DIALOG.close(); //Cerrar el dialogo.
    //BACKGROUND.classList.add ('invisible');
});