let filters = document.querySelector(".Rental-listings__search-intro");
fetch("./js/filters.json")
  .then((response) => {
    // if (!response.ok) {
    //   throw new Error('Der opstod en farlig fejl!');
    // }
    return response.json();
  })
  .then((filterData) => {
    console.log("FilterData: " + filterData);
    filters.innerHTML = `
                    <h3 class="Rental-listings__date-and-guests">
                      ${filterData.availableListings} · ophold ${filterData.dates} · 1 gæst
                    </h3>
                    <h2 class="Rental-listings__search-title">
                      Ophold i det valgte kortområde
                    </h2>

                    <div class="Rental-listings__filters">
                      <button class="Rental-listings__filter-btn _btn--round-white">
                        Gratis annullering
                      </button>
                      <button class="Rental-listings__filter-btn _btn--round-white">
                        Boligtype
                      </button>
                      <button class="Rental-listings__filter-btn _btn--round-white">
                        Op til 250 DKK
                      </button>
                      <button class="Rental-listings__filter-btn _btn--round-white">
                        Øjeblikkelig booking
                      </button>
                      <button class="Rental-listings__filter-btn _btn--round-white">
                        Flere filtre
                      </button>
                    </div>

                    <p class="Rental-listings__covid-info">
                    Gennemgå rejserestriktioner i forbindelse med COVID-19, inden du
                    booker.
                    </p>

                    <button
                    class="Rental-listings__language-settings-btn _btn--round-white"
                    >
                    Vis på originalsprog
                    </button>

`;
  });
// .catch((error) => {
//   console.log(error.message);
// });
