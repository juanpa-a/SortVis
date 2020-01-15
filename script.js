const randRange = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const height = window.innerHeight;
const width = window.innerWidth;

const generateData = () => {
  let randomValue;
  const array = document.getElementById("array");
  array.innerHTML = "";
  for (let i = 0; i < (width / 15) -1; i++) {
    let bar = document.createElement("div");
    bar.className = "bar";
    randomValue = randRange(2, height - 60);
    bar.setAttribute("style", `height: ${randomValue}px;`);
    bar.setAttribute("value", randomValue);
    array.appendChild(bar);
  }
};

const timer = ms => {
  return new Promise(res => setTimeout(res, ms));
};

generateData();

const bubble = async () => {
  let array = document.getElementsByClassName("bar");
  let changeWasMade = true;
  while (changeWasMade) {
    changeWasMade = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (
        parseInt(array[i].getAttribute("value")) >
        parseInt(array[i + 1].getAttribute("value"))
      ) {
        changeWasMade = true;
        // store values
        let x = array[i].getAttribute("value");
        let y = array[i + 1].getAttribute("value");
        // swap values
        array[i].setAttribute("value", y);
        array[i].setAttribute("style", `height: ${y}px;`);

        array[i + 1].setAttribute("value", x);
        array[i + 1].setAttribute("style", `height: ${x}px;`);
        // wait!
        await timer(1);
      }
    }
  }
};
