let display = document.getElementById("display");

function sayi(num) {
  display.value += num;
}

function hepsiniTemizle() {
  display.value = "";
}

function birTaneTemizle() {
  display.value = display.value.slice(0, -1);
}

function isaret(op) {
  let lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function hesapla() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}