let s = [
    "images.jpg",
    "images1.jpg",
    "images2.jpg",
    "images3.jpg",
    "images4.jpg",
    "images5.jpg",
    "images6.jpg",
    "images7.jpg"
  ];
  let k = 0;
  let interval
  let parent=document.querySelector('.article')
  let pag=document.querySelector('#pagination')
function change(direction,e){
  let current_image=document.querySelector('#image')
  current_image.style.position='absolute'
  // \Bu hissəni yoxla
  let img
  if(document.querySelector(`#${'image'+k}`)){
    img=document.querySelector(`#${'image'+k}`)
  }
  else{
    img=document.createElement('img')
    img.style.position='absolute'
    img.style.top='0px'
    img.src=s[k]
    img.id='img'
    parent.append(img)
  }
  
  
 
 
  if(direction=='left'){
          window.clearTimeout(interval)
          current_image.style.right='0'
          current_image.style.left=''
          if(!img.style.left){
              img.style.left='-100%'
              if(k>=s.length-1){
                k=0
                slide(img,current_image,'left')
              }
              else{
                // if(img.style.left!='-100%'){
                //   slide(current_image,img,'left')
                // } 
                  k++
                  img.id='image'+k
                  slide(img,current_image,'left')
              }}
            else{
              slide(current_image,img,'left')
            }
          
  }
  
  else {
      current_image.style.right=''
      current_image.style.left='0'
      img.style.right='-100%'
      if(k<=0){
        k=s.length-1
        img.id='image'+k
        slide(img,current_image,'right')
      }
    
      else{
        k--
        img.id='image'+k
        slide(img,current_image,'right')
      }
    }

}



function slide(elem,elem1,direction){

  if(elem.style.left=='0%'){
    elem1.remove()
    elem.id='image'
    elem.style.right='0%'
    
  }
  else if(elem.style.right=='0%'){
    elem1.remove()
    elem.id='image'
    elem.style.left='0%'
  }
  else if(direction=='left'){
   
          elem.style.left=Number.parseInt(elem.style.left)+10+'%'
          elem1.style.right=Number.parseInt(elem1.style.right)-10+'%'
          interval=setTimeout(()=>slide(elem,elem1,direction),30)
  }
  else{
    elem.style.right=Number.parseInt(elem.style.right)+10+'%'
    elem1.style.left=Number.parseInt(elem1.style.left)-10+'%'
    interval=setTimeout(()=>slide(elem,elem1,direction),30)
  }

}

 for(i of s){
  let span=document.createElement('div')
  span.style.width='25px'
  span.style.height='8px'
  span.classList.add(i.split('.')[0])
  span.style.backgroundColor='white'
  span.style.zIndex='1'
  pag.append(span)
 }


 
 




// function change(direction) {
  //   elem = document.querySelector("#slide");
  //   elem1=document.querySelector("#slide1");
  //   elem.src = s[k];
  //   elem1.src=s[k+1]
  //   if (direction == "right") {
  //     frame(-100);
  //     k++;
  //     if (k >= s.length) {
  //       k = 0;
  //     }
  //   } else {
  //     frame(100);
  //     k--;
  //     if (k < 0) {
  //       k = s.length - 1;
  //     }
  //   }
  // }
  
  // window.setInterval(() => {
  //   slide(),
  //   //   (document.querySelector("div").style.width =
  //   //     document.body.clientWidth + "px"),
  //     10;
  // });
  
  // function frame(l) {
  //   elem1.style.left = -l + "%";
  //   console.log(elem1.style.left)
  //   if (l == 0) {
  //       elem1.style.left = 0 + "%";
  //       elem.style.left = -100 + "%";
  //   } 
  //   else if(l<0){
  //       elem.style.left = l+100 + "%";
  //       setTimeout(() => frame(l+10), 400);
  //   }
  //   else {
  //       elem.style.left = l-100 + "%";
  //       setTimeout(() => frame(l - 10), 400);
  //   }
  // }
  
  // function slide() {
  //   let image = document.querySelectorAll("#map img");
  //   // let cur=Array.prototype.find.call(image,elem=>elem.src==document.querySelector('#slide').src)
  //   for (cur of image) {
  //     if (cur.src == document.querySelector("#slide").src) {
  //       cur.style.border = "solid green";
  //       cur.style.opacity = "1";
  //     } else {
  //       cur.style.border = "";
  //       cur.style.opacity = "0.4";
  //     }
  //   }
  // }
  
  function change_background(){
    
    for(i of document.querySelectorAll(`div`)){
      if(i.classList[0]==s[k].split('.')[0]){
        i.style.backgroundColor='green'
      }
      else{
        i.style.backgroundColor='white'
      }
    }
  }
  let intr=setInterval(change_background,10)