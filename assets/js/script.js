const cards = document.querySelectorAll('.match-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // Second click
        hasFlippedCard = false;
        secondCard = this;

        // Do cards match?
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            // it's a match!
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            // not a match
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1000);
                
        } 
        
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));