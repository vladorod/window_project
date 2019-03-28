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
        btn.addEventListener('click', () => { 
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
    for (let i = 0; i < 2; i++) {
        showModal(glazinGpriceBtn[i],popupCalc);
    }
    showModal(popupCalcClose,popupCalc);

    balconIcons.addEventListener('click', (e) => { 
        
         if (e.target.tagName == "IMG") {
            showIMG(e.target.parentNode.className);
         }
     
    });
    
}

module.exports = modal; 