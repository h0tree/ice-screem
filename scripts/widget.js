const tasteButtons = document.querySelectorAll('.taste-button');
const iceCreamImages = document.querySelectorAll('.ice-cream-img');
const names = document.querySelectorAll('.name');

tasteButtons.forEach((tasteButton, buttonIndex) => {
    tasteButton.addEventListener('click', () => {
// удалаяем увеливения всем шарикам мороженого
        iceCreamImages.forEach((iceCream) => {
            iceCream.classList.remove('ice-current');
        });
// Удаляем подписи
        names.forEach((name) => {
            name.classList.remove('name-current')
        })



// Увеличиваем шарик мороженого на которого шёлкнули 
        iceCreamImages.forEach((iceCream, iceCreamIndex) => {
            if(iceCreamIndex === buttonIndex) {
                iceCream.classList.add('ice-current');
            }
            
        });
        // показываем подпись
        names.forEach((name, nameIndes) => {
            if(nameIndes === buttonIndex) {
                name.classList.add('name-current');
            }
        })
    })
});


