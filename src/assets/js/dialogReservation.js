const CONSULT = document.getElementById ('consult');
const BACKGROUND = document.getElementById ('blackgroundDialog');
const BACKPAGE = document.getElementById ('closePageOne');
const CHECKIN = document.getElementById ('checkin');
const CHECKOUT = document.getElementById ('checkout');
const PAX = document.getElementById ('pax');
const SPAN_CHECKIN = document.getElementById ('spanCheckIn');
const SPAN_CHECKOUT = document.getElementById ('spanChekOut');
const SPAN_PAX = document.getElementById ('spanPax');
const PAGE_ONE =document.querySelector ('.dialog-active');
const PAGE_TWO =document.querySelector ('.dialog-inactive');
const NEXT_PAGE = document.querySelector ('.nextPage');
const SEND_RESERVATION = document.querySelector ('.sentReservation');
const PAGINATION = document.getElementById ('circle-inactive');
const SEP_PAGINATION = document.getElementById ('separatorPagination');
const SPAN_COST = document.getElementById ('spanCost');
const SPAN_TAX = document.getElementById ('spanTax');
const SPAN_TOTAL = document.getElementById ('spanTotal');

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
});

NEXT_PAGE.addEventListener('click', function() {
  PAGE_ONE.classList.replace('dialog-active', 'dialog-inactive');
  PAGE_TWO.classList.replace('dialog-inactive', 'dialog-active');
  PAGINATION.classList.replace('circle-inactive', 'circle-active');
  SEP_PAGINATION.classList.replace('border-primary', 'border-secondary');

  let checkinValue = CHECKIN.value;
  let checkoutValue = CHECKOUT.value;

  // Convertir las fechas a objetos Date
  const checkinDate = new Date(checkinValue);
  const checkoutDate = new Date(checkoutValue);

  // Calcular la diferencia en milisegundos
  const timeDiff = checkoutDate.getTime() - checkinDate.getTime();

  // Calcular la diferencia en días
  const DAYS_ROOM = Math.ceil(timeDiff / (1000 * 3600 * 24));


  let paxValue = parseFloat(PAX.value);
  let onePax = 46;
  let paxExtra = paxValue - 1;
  let sobrePax = paxExtra * 10;
  let valueToPay;

  function value_to_pay() {
    if (paxValue === 1) {
      valueToPay = onePax * DAYS_ROOM;
    } else if (paxValue >= 2) {
      valueToPay = (onePax + sobrePax) * DAYS_ROOM;
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

SEND_RESERVATION.addEventListener ('click', function () {
    BACKGROUND.classList.add ('invisible');
});