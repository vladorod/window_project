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
        this.scrollisFreezed = false; 
        this.whoModalIsOpen = "";
        this.order = { 
            material: "",
            type: "",
            size: { 
                width: "",
                height: "",
                window: ""
            },
            name: "",
            phone: ""
        };

    function showModal(modal = whoModalIsOpen) { 
            freezeScreen();
            if (modalOpen != true) { 
            modal.style.display = "block"; 
            modalOpen = true;
            whoModalIsOpen = modal;
            } else { 
            modal.style.display = "none"; 
            modalOpen = false;
            } 
    };

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

    popupEngineerBtn.addEventListener('click', (e) => { showModal(popupEngineer) });
    popupClose.addEventListener('click', (e) => { showModal(popupEngineer) });

    // digitСheck in modal

    let widthModal  = document.querySelector(".form-control[placeholder='Ширина']"),
        heightModal = document.querySelector(".form-control[placeholder='Высота']"); 
    
        widthModal.addEventListener('input', (e) => {
            digitСheck(widthModal);
            order.size.width = e.target.value;
        });
        heightModal.addEventListener('input', (e) =>{ 
            digitСheck(heightModal)
            order.size.height = e.target.value;
        });

    // button next 

    let buttonNext      = document.querySelector('.popup_calc_button'), 
        lastmodal       = document.querySelector('.popup_calc_end'),
        buttonNextClose = document.querySelector('.popup_calc_end_close'),
        inputUserName   = document.querySelectorAll('input[name="user_name"]'),
        inputUserPhone  = document.querySelectorAll('input[name="user_phone"]');
        
        // added all input name and phone value listner 

        for (let i = 0; i < inputUserName.length; i++ ) { 
            inputUserName[i].addEventListener('input', (e) => { 
               order.name = e.target.value;
            });
        }
        for (let i = 0; i < inputUserPhone.length; i++ ) { 
            inputUserPhone[i].addEventListener('input', (e) => { 
               order.phone = e.target.value;
            });
        }
    
        buttonNext.addEventListener('click', () => { 
            showModal();
            showModal(lastmodal);
            clearAllInput();
        });
        buttonNextClose.addEventListener('click', (e) => showModal());


    // calc 

    for (let i = 0; i < glazinGpriceBtn.length; i++) {
        glazinGpriceBtn[i].addEventListener('click', (e) => {
            let type = e.target.parentNode.parentNode.childNodes[1].classList[0].replace(/glazing_/ig, ""); 
            showModal(popupCalc);
            order.type = type;
         });
    }
    popupCalcClose.addEventListener('click', (e) => { showModal() });

    balconIcons.addEventListener('click', (e) => { 
        e.preventDefault();
         if (e.target.tagName == "IMG") {
            showIMG(e.target.parentNode.className);
            order.size.window = e.target.parentNode.className;
         }
    });

    // tab 

    let tabContent = document.querySelectorAll('.container')[2].querySelectorAll('.row'),
        tabBtn     = document.querySelector('.slick-track');

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
      let links    = document.querySelector('.slick-track').querySelectorAll('a'),
          material = e.target.className.replace(/_link/ig, "").replace(/ /, "").replace(/active/, "");

      if (e.target.tagName == "A") { 
        showTAB(material);
        for(let i = 0; i < links.length; i++) { 
          links[i].classList.remove("active");
        }
        e.target.classList.add("active");
        order.material = material;
      }
    });
    
    // addEventListener("click", (e) => {
    //     if (e.target.classList == "popup_engineer") 
    // });

    // freeze Scrool body
    function freezeScreen() { 
        if (!scrollisFreezed) {  
        document.body.classList.add("freezeScroll")
        scrollisFreezed = true; 
        }
        else { 
            scrollisFreezed = false; 
            document.body.classList.remove("freezeScroll");
        }  
    }

    // digit Check
    function digitСheck(input) {
        input.value = input.value.replace(/[^\d,]/g, '');
    };
    
    function clearAllInput () { 
         let allInput = document.querySelectorAll('input');
         for (let i in allInput) { 
             allInput[i].value = "";
         }
    }
}

module.exports = modal; 