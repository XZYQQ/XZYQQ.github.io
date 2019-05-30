/*添加点击事件*/
document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}


/*添加一个图片切换器*/
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/earth.jpg') {
      myImage.setAttribute('src', 'images/firefox.png');
    } else {
      myImage.setAttribute('src', 'images/earth.jpg');
    }
}

/*添加个性化欢迎信息*/
function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;