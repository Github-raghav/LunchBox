(function () { 
    
    let Nav=document.querySelector(".nav");
    let Tex=document.querySelector("#text1");
    window.addEventListener("scroll",function(){
        console.log("called");
        // Nav.classList.add("sticky",window.scrollY>0);
        Nav.classList.toggle("sticky",window.scrollY>0);
        Tex.classList.toggle("sticky",window.scrollY>0);
       })
    //    Nav.classList.remove("sticky",window.scrollY>0);
})();




 let emailid=document.getElementById(`email_id`);
 let password=document.getElementById(`password`);
 let supbtn=document.getElementById(`sup`);
 
 let details=[];

 const addData = (ev)=>{
     ev.preventDefault();  // to stop submit and reload
     
     let data={
         id: Date.now(),
         emailid : emailid,
         password:password,
        }

        details.push(data);
        localStorage.setItem("details",JSON.stringify(data));
        console.log(localStorage);
    }
    supbtn.addEventListener(`click`,addData);



let signInbuttn=document.querySelector(".signup");
let dish1=document.querySelector(`.pic1`);
    let pop=document.querySelector(`.pop`);
    let modalclosebtn=document.querySelector(`.modal-close`);
    
    
    signInbuttn.addEventListener(`click`,function(){
        pop.classList.add(`pop-active`);
        console.log("called");
        
    })
    
    modalclosebtn.addEventListener(`click`,function(){
        pop.classList.remove(`pop-active`);
    })
    
    dish1.addEventListener(`click`,function(){
        let opage=window.open("http://127.0.0.1:5500/dish1.html" ,"_self");
    })

    let pic2=document.querySelector(".pic2");
    pic2.addEventListener(`click`,function(){
        let page=window.open(`http://127.0.0.1:5500/pasta.html`,"_self");
    })

    let pic3=document.querySelector(".pic3");
    pic3.addEventListener(`click`,function(){
        let qpage=window.open(`http://127.0.0.1:5500/juice.html`,"_self");
    })

    let pic4=document.querySelector(".pic4");
    pic4.addEventListener(`click`,function(){
        let qpage=window.open(`http://127.0.0.1:5500/thali.html`,"_self");
    })

    let pic5=document.querySelector(".pic5");
    pic5.addEventListener(`click`,function(){
        let qpage=window.open(`http://127.0.0.1:5500/fries.html`,"_self");
    })


    let pic6=document.querySelector(".pic6");
    pic6.addEventListener(`click`,function(){
        let qpage=window.open(`http://127.0.0.1:5500/desert.html`,"_self");
    })
              

        let outerbox=document.querySelector(".outerbox");
        let dropbtn=document.querySelector(".dropicon");
        let dropoutbox=document.querySelector(".dropoutbox");
        dropbtn.addEventListener(`click`,function(){
            console.log("called dropbtn");
            
            outerbox.classList.toggle(`outerbox-active`);
        })
    