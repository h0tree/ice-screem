const tasteButtons = document.querySelectorAll('.taste-button');
const iceCreamImages = document.querySelectorAll('.ice-cream-img');
const names = document.querySelectorAll('.name');

tasteButtons.forEach((tasteButton, buttonIndex) => {
    tasteButton.addEventListener('click', () => {
        iceCreamImages.forEach((iceCream) => {
            iceCream.classList.remove('ice-current');
        });
        names.forEach((name) => {
            name.classList.remove('name-current')
        })



        iceCreamImages.forEach((iceCream, iceCreamIndex) => {
            if(iceCreamIndex === buttonIndex) {
                iceCream.classList.add('ice-current');
            }
            
        });
        names.forEach((name, nameIndes) => {
            if(nameIndes === buttonIndex) {
                name.classList.add('name-current');
            }
        })
    })
});


