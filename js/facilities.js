let facilityUl = document.querySelector(".Listing-facilities_facility-ul");
let showAllBtn = document.querySelector(".Listing-facilities__show-all-btn");



fetch("./js/facilities.json")
    .then((response) => {
        // if (!response.ok) {
        //   throw new Error('Der opstod en farlig fejl!');
        // }
        return response.json();
    })
    .then((facilitiesData) => {
        console.log("FacilitiesData: " + facilitiesData);

        showAllBtn.textContent = `Vis alle ${facilitiesData.total_facilities} faciliteter`;

        facilitiesData.facilities.forEach(facility => {

            facilityUl.innerHTML += `
            <li class="Listing-facilities_facility-li">
                <i class="${facility.icon_class} Listing-facilities_facility-icon"></i> ${facility.text} 
            </li>
        `;

        });



    })


// .catch((error) => {
//   console.log(error.message);
// });