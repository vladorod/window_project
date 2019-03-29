function modal () { 
    let popupEngineer = document.querySelector('.popup_engineer'),
        popupEngineerBtn = document.querySelector('.popup_engineer_btn'),
        popupClose = document.querySelectorAll('.popup_close')[1],
        glazinGpriceBtn = document.querySelectorAll('.glazing_price_btn'),
        popupCalc = document.querySelector('.popup_calc'),
        popupCalcClose = document.querySelector('.popup_calc_close'),
        balconIcons = document.querySelector('.balcon_icons'),
        bigIMG = document.querySelectorAll('.big_img img');
    
        this.modalOpen = false;
        
    function showModal(btn, modal) { 
        let body = document.body;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modalOpen != true) { 
            modal.style.display = "block"; 
            modalOpen = true;
       
            } else { 
            modal.style.display = "none"; 
            modalOpen = false;
            } 
        });
    }

    function showIMG (img) { 
        for (let i = 0; i < bigIMG.length; i++) {
         if (bigIMG[i].id == img) { 
            bigIMG[i].style.display = 'inline-block';
         } else {
            bigIMG[i].style.display = 'none';
         }
        }
    }
    
    // first modal 
    showModal(popupEngineerBtn,popupEngineer);
    showModal(popupClose,popupEngineer);
    
    // calc 
    for (let i = 0; i < glazinGpriceBtn.length; i++) {
        showModal(glazinGpriceBtn[i],popupCalc);
    }
    showModal(popupCalcClose,popupCalc);

    balconIcons.addEventListener('click', (e) => { 
        e.preventDefault();
         if (e.target.tagName == "IMG") {
            showIMG(e.target.parentNode.className);
         }
     
    });
    // tab 

    let tabContent = document.querySelectorAll('.container')[2].querySelectorAll('.row'),
        tabBtn = document.querySelector('.slick-track');

    function showTAB(tab) { 
    for (let i = 0; i < tabContent.length; i++) { 
      let val = tabContent[i].className.replace(/row\ /,"")
        if (val == tab) { 
            tabContent[i].style.display = "block";
        } else {
            tabContent[i].style.display = "none";
        }
    }
    }
    tabBtn.addEventListener('click', (e) => {  
      let links = document.querySelector('.slick-track').querySelectorAll('a');
      if (e.target.tagName == "A") { 
        showTAB(e.target.className.replace(/_link/ig, "").replace(/ /, "").replace(/active/, ""));
        for(let i = 0; i < links.length; i++) { 
          links[i].classList.remove("active");
        }
        e.target.classList.add("active");
      }
    });
}

module.exports = modal; 