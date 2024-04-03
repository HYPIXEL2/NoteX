let moon = document.getElementById('moon');
let train = document.getElementById('train');
let city = document.getElementById('city');
let moon2= document.getElementById('about_moon');
let boat= document.getElementById('boat');
let back= document.getElementById('back-top');
let valuecal;

let h1=document.getElementById('h1_text');


window.addEventListener('scroll',()=>{
  let value = window.scrollY;
  moon.style.left=value*.1+'px';
  moon.style.top=value*.9+'px';
  train.style.left=value*.75+'px';
  moon2.style.top=value*.25+'px';
  boat.style.left=value*.5+'px';
  h1.style.top= (90 -value*.1)+'%';
  console.log(value);


});

let calScrollValue = ()=>{
  let scrollProgrsss=document.getElementById('back-top');
  let position= document.documentElement.scrollTop;

  let calcHeight=document.documentElement.scrollHeight=document.documentElement.clientHeight;
  let scrollValue = Math.round((position*100)/calcHeight);

  if(position>100){
    scrollProgrsss.style.display='grid';
  }
  else{
    
    scrollProgrsss.style.display='none';
  }

  //1 h1 h1 h1

  if(position>300){
    h1.style.display='none';
  }
  else{
    
    h1.style.display='block';
  }

  scrollProgrsss.addEventListener('click',()=>{
    document.documentElement.scrollTop=0;
  })

  h1.addEventListener('click',()=>{
    document.documentElement.scrollTop=400;
  })

}

window.onscroll = calScrollValue;
window.onload = calScrollValue;


