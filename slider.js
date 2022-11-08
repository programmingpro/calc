var checkbox = document.getElementById("check");
const root = document.querySelector(':root');

checkbox.addEventListener('change', function() {
  let a = document.getElementsByClassName("ball")[0]
  let b = document.getElementsByTagName("img")[0]
  if (this.checked) {
    b.src = "res/Union.svg"
    a.style.order = "2"
    root.style.cssText = 
    (`
    --main-calc-bg-color: #F1F2F3;
    --main-sliderElem: white;
    --main-elem: black;
    --button-bg-color: white;
    --button-bg-color2: #D2D3DA;
    --button-bg-color3: #4B5EFC;
    --upperText-color: #D2D3DA;
    --lowerText-color: black;
    --button-color: black;
    `);
  } else {
    a.style.order = "1"
    b.src = "res/Union2.svg"
    root.style.cssText = 
    (`
    --main-calc-bg-color: #17171C;
    --main-sliderElem: white;
    --main-elem: white;
    --button-bg-color: #2E2F38;
    --button-bg-color2: #4E505F;
    --button-bg-color3: #4B5EFC;
    --upperText-color: #D2D3DA;
    --lowerText-color: white;
    --button-color: white;
    `);
  }
});