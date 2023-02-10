function toast({title= '', message= '', type= 'info', duration= 3000, fadeOutTimeSecond= 1}){
    const main = document.getElementById('toast');
    if(main){
          const toast = document.createElement('div');
          const fadeOutAnimationTimeSecond = 1;
          
          const delay = (duration / 1000).toFixed(2);
          const icons = {
                success: 'fa-regular fa-circle-check',
                info: 'fa-regular fa-circle-info',
                warning: 'fa-regular fa-circle-exclamation',
                error: 'fa-regular fa-circle-exclamation'
          };
          const icon = icons[type];
          const autoRemoveId = setTimeout(function(){
                main.removeChild(toast);
          }, duration + fadeOutAnimationTimeSecond * 1000);

          toast.onclick = function(e){
                if(e.target.closest('.toast__close')){
                      main.removeChild(toast);
                      // clearTimeout(autoRemoveId);
                }
          }

          
          
          toast.classList.add('toast', `toast--${type}`);
          toast.style.animation = `slideInLeft ease .3s, fadeOut linear ${fadeOutAnimationTimeSecond}s ${delay}s forwards`;
          toast.innerHTML = `
          <div class="toast__icon">
                <i class="${icon}"></i>
          </div>
          <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}
                </p>
          </div>
          <div class="toast__close">
                <i class="fa-regular fa-circle-xmark"></i>
          </div>
    `;
    
          main.appendChild(toast);

          
    }

}