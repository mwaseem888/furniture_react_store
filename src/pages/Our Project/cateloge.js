import React from 'react'


import "./our_project.css"
export const Catalogue = () => {
   /* const prevBtn = document.querySelector("#prev-btn")
    const nextBtn = document.querySelector("#next-btn")
    const book = document.querySelector("#book")

    const paper1 = document.querySelector("#p1")
    const paper2 = document.querySelector("#p2")
    const paper3 = document.querySelector("#p3")

    prevBtn.addEventListener("click", goPrevPage);
    nextBtn.addEventListener("click",goNextPage);

    let currentLocation =1;
    let numberOfPaper =3;
    let maxLocation = numberOfPaper + 1;
    function openBook(){
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";


    }
    function closeBook(isAtBeginning){
        if(isAtBeginning)
        {
book.style.transform = "translateX(0%)";
        }
        else{
book.style.transform = "translateX(100%)";
        }
   
  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
    }
    function goNextPage(){
 if(currentLocation< maxLocation){
           switch(currentLocation){
               case 1:
                   openBook();
                   paper1.classList.add("flipped")
                   paper1.style.zIndex=1;
                   break;
               case 2:
                   paper2.classList.add("flipped")
                   paper2.style.zIndex=2;
                   break;
               case 3:
                   paper3.classList.add("flipped")
                   paper3.style.zIndex=3;
                   closeBook();
                   break;
                default:
                    throw new Error("unknown State")   

           }
           currentLocation++;
       }
    }
    function goPrevPage(){
      if(currentLocation > 1){
           switch(currentLocation){
               case 2:
                   closeBook(true);
                   paper1.classList.remove("flipped")
                   paper1.style.zIndex=3;
                   break;
               case 3:
                   paper2.classList.remove("flipped")
                   paper2.style.zIndex=2;
                   break;
               case 4:
                  openBook();
                   paper3.classList.remove("flipped")
                   paper3.style.zIndex=1;
                    
                   break;
                default:
                    throw new Error("unknown State")   

           }
           currentLocation--;
       }
    }


*/
    return (
        <div className="cat">
<button id="prev-btn">
    <i class="fas fa-arrow-circle-left"></i>
</button>
<div id="book" className="book">
{/*paper 1*/}
<div id="p1" className="paper ">
<div className="front">
    <div id="f1" className="front-content">
        <img src="/images/paper1.PNG"/>
    </div>
</div>
<div className="back">
    <div id="b1" className="back-content">
        <img src="/images/paper2.PNG"/>
    </div>
</div>
 </div>
 {/*paper 2*/}
<div id="p2" className="paper">
<div className="front">
    <div id="f2" className="front-content">
        <img src="/images/paper3.PNG"/>
    </div>
</div>
<div className="back">
    <div id="b2" className="back-content">
        <img src="/images/paper4.PNG"/>
    </div>
</div>
 </div>
 {/*paper 3*/}
<div id="p3" className="paper">
<div className="front">
    <div id="f3" className="front-content">
        <img src="/images/paper5.PNG"/>
    </div>
</div>
<div className="back">
    <div id="b3" className="back-content">
        <img src="/images/paper1.PNG"/>
    </div>
</div>
 </div>
</div>
 
<button id="next-btn">
 <i class="fas fa-arrow-circle-right"></i>
</button>        

        </div> 
    )
}
