let cardWrapper = document.querySelector(".Rental-listings__card-container");

fetch("./js/cards.json")
    .then((response) => {
        // if (!response.ok) {
        //   throw new Error('Der opstod en farlig fejl!');
        // }
        return response.json();
    })
    .then((cardsData) => {
            console.log("Cards Data: " + cardsData);



            cardsData.cards.forEach(card => {

                        cardWrapper.innerHTML += `
            <hr class="Rental-card__horizontal-line">

            <section class="Rental-card">

                <img class="Rental-card__img" src=${card.img} alt="Rental photos" class="Rental-card__img">

                <article class="Rental-card__article">

                    <div class="Rental-card__titles-wrapper">

                        <h3 class="Rental-card__pre-title">${card.type} i ${card.location}</h3>
                        <i class="far fa-heart Rental-card__heart-icon"></i>
                        <h2 class="Rental-card__title">${card.title}</h2>

                        <hr class="Rental-card__horizontal-line_short">

                    <p class="Rental-card__info">${card.facilities.map(facility => `${facility} `).join(' · ')}</p>

                    </div>

                    <div class="reviews-and-price-wrapper">

                        <div class="Rental-card__reviews-wrapper">
                            <i class="fas fa-star Rental-card__star"></i>
                            <p class="Rental-card__reviews-p">
                                <span class="_font-weight-bold"> ${card.reviews_average} </span> (${card.reviews} omtaler)
                            </p>
                        </div>

                        <div class="Rental-card__price-wrapper">
                            <h2 class="Rental-card__price-daily">
                                <span class="_font-weight-bold _font-size-large">${card.price_daily}</span> / nat
                            </h2>    
                            <p class="Rental-card__price-total">I alt ${card.price_total}</p>
                        </div>
                    </div>

                </article>
            </section>
        `;

        });


    });


// .catch((error) => {
//   console.log(error.message);
// });