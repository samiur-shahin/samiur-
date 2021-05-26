 
 
 let parcentage=document.querySelector('.parcentage');
 
 let parcent=document.querySelector('.parcent');
 
 navigator.getBattery().then(function(battery){
  
  parcentage.style.width=battery.level*100+'%';
  
  parcent.innerHTML=battery.level*100+"%";
  
})



