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
                      ${filterData.available_listings} · ophold ${filterData.dates} · ${filterData.guests} gæst
                    </h3>
                    <h2 class="Rental-listings__search-title">
                      Ophold i ${filterData.location}
                    </h2>
                    <div class="Rental-listings__filters">
                      <button class="Rental-listings__filter-btn _btn--round-white">
                      ${filterData.filters[0]}
                      </button>
                      <button class="Rental-listings__filter-btn _btn--round-white">
                      ${filterData.filters[1]}
                      </button>
                      <button class="Rental-listings__filter-btn _btn--round-white">
                      ${filterData.filters[2]}
                      </button>
                      <button class="Rental-listings__filter-btn _btn--round-white">
                      ${filterData.filters[3]}
                      </button>
                      <button class="Rental-listings__filter-btn _btn--round-white">
                      ${filterData.filters[4]}
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