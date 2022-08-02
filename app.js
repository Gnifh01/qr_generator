

function generateQR(e) {
  document.querySelector("#qr-image").style.display = "block";
  let QRtext = document.querySelector("#text").value;
  if (QRtext.trim().length <= 0) {
      document.querySelector("#qr-image").style.display = "none";
      document.querySelector("#qr-image .error").innerHTML = "Please enter text";
  } else {
    document.querySelector("#img").style.display = "block";
    document.querySelector("#qr-image .error").innerHTML = "";
    document.querySelector("#img").src =
      "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + QRtext;
  }
  e.preventDefault();
}


const changetheme = (e) => {
  const h1 = document.querySelector("h1 > span");
  const page = document.querySelector(".container");
  h1.addEventListener('click', () => {
    page.classList.toggle('dark');
  })

  e.preventDefault();
}

changetheme();