let btn = document.querySelector('button');
addEventListener('click' ,changeColor);
function changeBackground(color) {
    document.body.style.background = color;
    }
function changeColor(){
  changeBackground('#EEEDF0');
}
