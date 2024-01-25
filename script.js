let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (btn.innerText == "ON") {
    document.documentElement.style.cssText = "--light-color: #f8d11d";
    btn.innerText = "OFF";
  } else {
    document.documentElement.style.cssText = "--light-color: #cdcdcd";
    btn.innerText = "ON";
  }
});
