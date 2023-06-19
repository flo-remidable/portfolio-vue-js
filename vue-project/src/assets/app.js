    let images1 = document.querySelector(".img-cv");
    let images2 = document.querySelector(".img-commentaire");
    let images3 = document.querySelector(".img-paysagiste");
    let modal = document.querySelector('.modal');
    let modalContent = document.querySelector('.modal-content');
    let caption = document.querySelector('#caption');

    images1.onclick = function(){
        modal.style.display = "block";
        modalContent.src = this.src;
        modalContent.alt = this.alt;
        caption.innerHTML = this.alt;

    }

    images2.onclick = function(){
        modal.style.display = "block";
        modalContent.src = this.src;
        modalContent.alt = this.alt;
        caption.innerHTML = this.alt;
    }

    images3.onclick = function(){
        modal.style.display = "block";
        modalContent.src = this.src;
        modalContent.alt = this.alt;
        caption.innerHTML = this.alt;
    }

    let closeBtn = document.querySelector('.close');

    closeBtn.onclick = function () {
        modal.style.display = "none"
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }


      const formElement = document.body.querySelector('form');
      formElement.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const firstNameInput = document.body.querySelector('#prénom');
        const lasteNameInput = document.body.querySelector('#nom');
        const commentTextarea = document.body.querySelector('#message');
        const errorElement = document.body.querySelector('#error-message');  
        
        if (!firstNameInput.value || !lasteNameInput.value || !commentTextarea.value) {
            errorElement.style.display = 'block';
            return 
        } else {
           errorElement.style.display = 'none';
        }
    })   
