let clickImage = document.querySelector('#imgClick');
// 움직일때 자식을 품고 같이 움직여라
let imgElement = document.getElementById('myImage');
// 이놈은 이미지만 바뀌는 역할
let main= document.getElementsByClassName('main')
let images=[
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
  "img/06.jpg",
  "img/07.jpg",
  "img/08.jpg",
  "img/09.jpg",
];

let mousePos={x:0, y:0};
let currentIndex=0;

imgElement.addEventListener('click',function(){
  let curretImage= images[currentIndex];
  imgElement.src=curretImage;
  currentIndex++;
  if(currentIndex >= images.length){
    currentIndex=0;
  }
});


// window.addEventListener('mousemove',function(){})
window.addEventListener('mousemove',(e)=>{
  // e.clientX : 현재 화면에서 마우스의 x값을 추출
  // e.clientY : 현재 화면에서 마우스의 y값을 추출
  mousePos.x= -(e.clientX/window.innerWidth)*15;
  mousePos.y= -(e.clientY/window.innerHeight)*15;
  // - 달면 반대로 움직인다. 화면의 너비 값을 나는는건..?
  console.log(e.clientX,e.clientY)
  clickImage.style.transform=`translateY(${mousePos.y}px) translateX(${mousePos.x}px)`; 
})

// // window.addEventListener('mousemove',function(){})
// main.addEventListener('mousemove',(e)=>{
//   // e.clientX : 현재 화면에서 마우스의 x값을 추출
//   // e.clientY : 현재 화면에서 마우스의 y값을 추출
//   mousePos.x= -(e.clientX/window.innerWidth)*15;
//   mousePos.y= -(e.clientY/window.innerHeight)*15;
//   // - 달면 반대로 움직인다. 화면의 너비 값을 나는는건..?
//   console.log(e.clientX,e.clientY)
//   clickImage.style.transform=`translateY(${mousePos.y}px) translateX(${mousePos.x}px)`; 
// })
// main이라는 위치 안에서 움직일때