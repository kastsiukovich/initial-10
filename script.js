
function cardAction() {
   var cardAct = document.getElementsByTagName('img');
   cardAct[1].src = 'images/cat1.jpg';
   cardAct[1].className = 'cat1';

}
function cardAction2() {
   var cardAct = document.getElementsByTagName('img');
   cardAct[1].src = 'images/cat2.jpg';
   cardAct[1].className = 'cat2';
}
function cardAction3() {
   var cardAct = document.getElementsByTagName('img');
   cardAct[1].src = 'images/cat3.jpg';
   cardAct[1].className = 'cat3';
}

function cat() {
   var cat_1 = document.querySelector('#current-title');
   var cardAct = document.querySelector('#current-cat');
   var cardCont = document.getElementById('current-content');
   if (cardAct.className === 'cat1') {
      cat_1.innerText = 'CAT-1';
      cardCont.innerHTML = '<div class="card-content" id="current-content"> <p>I am a beautiful cat №1</p> </div>'
   } else if (cardAct.className === 'cat2') {
      cat_1.innerText = 'CAT-2';
      cardCont.innerHTML = '<div class="card-content" id="current-content"> <p>I am a beautiful cat №2</p> </div>'
   } else if (cardAct.className === 'cat3') {
      cat_1.innerText = 'CAT-3';
      cardCont.innerHTML = '<div class="card-content" id="current-content"> <p>I am a beautiful cat №3</p> </div>'
   }
}

function ourCats() {
   var nameCat = prompt('Введите кличку животного');
   var country = prompt('Введите название страны');
   var yearOfBirth = prompt('Введите год рождения ждения');
   var ourCat = document.getElementById('cat-info');
   ourCat.innerHTML += (`<tr><td>${nameCat}</td><td>${country}</td>   <td>${yearOfBirth}</td> </tr>`);
}
document.styleSheets[2].disabled = true;

function changeTheTheme() {
   var changeTheThemeOfTheNighe = document.getElementById('change-switcher');
   var imgSun = document.getElementsByTagName('img');
   if (imgSun[0].alt == 'sun') {
      imgSun[0].src = './images/moon.svg';
      imgSun[0].alt = 'moon';
      imgSun[0].style.fill == "rgb(0, 0, 255)"
      document.styleSheets[2].disabled = false;
   } else if (imgSun[0].alt == 'moon') {
      imgSun[0].src = './images/sun.svg';
      imgSun[0].alt = 'sun';
      document.styleSheets[2].disabled = true;
   }
}
