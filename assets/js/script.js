window.onload = function init() {

    var dev = document.querySelector('#dev');
    var arrow = document.querySelector('#rarrow');
    var state = false;
    var command = document.querySelector('#command');
    var effect = '';

    var container = document.querySelector('#container');
    var pacman = document.querySelector('.pacman');

    dev.addEventListener('click', function(evt) {
        arrow.classList.toggle('hide');
        state = !arrow.classList.contains('hide');    
            
           
        if (state) {
            document.body.addEventListener('keypress', code); 
            return;
        }

        command.innerHTML = '';
        effect = '';
        document.body.removeEventListener('keypress', code); 
            
    });



    function code(evt) {
        if (evt.keyCode !== 13) {
            effect += evt.key
            command.innerHTML = effect;
           } else {
               
               if (effect == 'reset') {
                   document.location.reload(false);
               } else {
                   
                   if (effect == 'pacman') {
                       pacman.classList.add('movepacman');
                   } else {
                       container.classList.add(effect);
                   }
               }
               effect = '';
               command.innerHTML = '';
               
           }
       }
       


}
























