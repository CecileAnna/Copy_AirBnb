let meetHostSection = document.querySelector(".Listing-meet-host");

fetch("./js/meet-host.json")
    .then((response) => {
        // if (!response.ok) {
        //   throw new Error('Der opstod en farlig fejl!');
        // }
        return response.json();
    })
    .then((meetHostData) => {
        console.log("Meet Host Data: " + meetHostData);

        meetHostSection.innerHTML = `

            <article class="Listing-meet-host__article">


                        <div class="Listing-meet-host__profile-wrapper">

                            <img src=${meetHostData.host_img} alt="Host picture" class="Listing-meet-host__profile-img">
                            <h2 class="Listing-meet-host__host-name">Vært: ${meetHostData.host}</h2>
                            <h3 class="Listing-meet-host__host-member-since">Tilmeldte sig i ${meetHostData.member_since}</h3>

                        </div>

                        <div class="Listing-meet-host__profile-details-wrapper">

                            <i class="fas fa-star Listing-meet-host__profile-details-icon"></i>
                            <h3 class="Listing-meet-host__profile-details-text">${meetHostData.reviews} omtaler</h3>

                            <i class="fas fa-shield-alt Listing-meet-host__profile-details-icon"></i>
                            <h3 class="Listing-meet-host__profile-details-text">Identitet bekræftet</h3>

                        </div>

                        <p class="Listing-meet-host__profile-text">${meetHostData.bio}
                            <span class="Listing-meet-host__profile-text-read-more">få mere at vide</span>
                        </p>

                    </article>

                    <aside class="Listing-meet-host__info">

                        <ul class="Listing-meet-host__info-ul">

                            <li class="Listing-meet-host__info-li">Politiknummer: ${meetHostData.policy_number}</li>
                            <li class="Listing-meet-host__info-li">Sprog: ${meetHostData.languages}</li>
                            <li class="Listing-meet-host__info-li">Svarrate: ${meetHostData.answer_rate}</li>
                            <li class="Listing-meet-host__info-li">Svartid: ${meetHostData.answer_time}</li>

                        </ul>

                        <button class="Listing-meet-host__info-contact-btn _btn--round-white">
                            Kontakt værten
                        </button>

                    </aside>

        `;

    });





// .catch((error) => {
//   console.log(error.message);
// });