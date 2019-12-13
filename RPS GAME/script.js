
const pimage = document.getElementById("image1")
const cimage = document.getElementById("image2")
const click = document.getElementById("btn")
const poptions = document.querySelectorAll("#options .btn")
const draw = document.getElementById("draw").style.display="none"
const compwinstats=document.getElementById("winstatus2")
const playerwinstats=document.getElementById("winstatus1")
compwinstats.style.display="none"
playerwinstats.style.display="none"
  
   poptions.forEach(option=>{
     
      option.addEventListener("click" , function(){
      
         const computeroptions = ["rock" , "paper" , "scissors"]
         const comp = Math.floor(Math.random()*computeroptions.length)
         
   
         cimage.style.display="block"
         
         cimage.src=`${computeroptions[comp]}.png`
         pimage.src=`${this.textContent}.png`
        
         if(this.textContent=="rock"){
            if(this.textContent===computeroptions[comp]){  
               document.getElementById("draw").style.display="block"
               compwinstats.style.display="none"
               playerwinstats.style.display="none"
               setTimeout(()=> document.getElementById("draw").style.display="none" , 1000)
               }

           else if(computeroptions[comp]=="paper"){
               compwinstats.style.display="block"
               setTimeout(()=>compwinstats.style.display="none" , 1000)
            }else{
               playerwinstats.style.display="block"
               setTimeout(()=>playerwinstats.style.display="none" , 1000)
              
            }
            
         }else if(this.textContent=="paper"){
            if(this.textContent===computeroptions[comp]){  
               document.getElementById("draw").style.display="block"
               compwinstats.style.display="none"
               playerwinstats.style.display="none"
               setTimeout(()=> document.getElementById("draw").style.display="none" , 1000)
               }
         else if(computeroptions[comp]=="rock"){
               playerwinstats.style.display="block"
               setTimeout(()=>playerwinstats.style.display="none" , 1000)
            }else{
               compwinstats.style.display="block"
               setTimeout(()=>compwinstats.style.display="none" , 1000)
            }
            
         }else if(this.textContent=="scissors"){
            if(this.textContent===computeroptions[comp]){  
               document.getElementById("draw").style.display="block"
               compwinstats.style.display="none"
               playerwinstats.style.display="none"
               setTimeout(()=> document.getElementById("draw").style.display="none" , 1000)
               }
          
           else if(computeroptions[comp]=="paper"){
               playerwinstats.style.display="block"
               setTimeout(()=>playerwinstats.style.display="none" , 1000)
            }else{
               compwinstats.style.display="block"
               setTimeout(()=>compwinstats.style.display="none" , 1000)
            }
            
         }
         
      })
   })
