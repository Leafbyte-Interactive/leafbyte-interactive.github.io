async function loadTeam() {

    const container =
    document.getElementById("team-container");

    const response =
    await fetch("/data/team.json");

    const team =
    await response.json();


    if (team.length === 0) {

        container.innerHTML =
        `
        <div class="card">

            <p>
                Team Members will be Announced Soon.
            </p>

        </div>
        `;

        return;

    }


    const icons = {

        website: "fa-solid fa-globe",
        github: "fa-brands fa-github",
        itch: "fa-brands fa-itch-io",

        // Closest available icon (Kick does not have an official Font Awesome icon)
        kick: "fa-brands fa-kickstarter-k",

        discord: "fa-brands fa-discord",
        youtube: "fa-brands fa-youtube",
        x: "fa-brands fa-x-twitter",
        bluesky: "fa-brands fa-bluesky",
        linkedin: "fa-brands fa-linkedin",
        twitch: "fa-brands fa-twitch"

    };


    team.forEach(person => {

        let socialsHTML = "";

        if (person.socials) {

            for (const [platform, url] of Object.entries(person.socials)) {

                if (icons[platform]) {

                    socialsHTML +=
                    `
                    <a
                        href="${url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-link"
                        aria-label="${platform}"
                        title="${platform}">

                        <i class="${icons[platform]}"></i>

                    </a>
                    `;

                }

            }

        }


        container.innerHTML +=
        `
        <div class="team-card">

            <img
                src="${person.image}"
                class="person-image"
                alt="${person.name}">

            <h2>
                ${person.name}
            </h2>

            <h3>
                ${person.role}
            </h3>

            <p>
                ${person.description}
            </p>

            <div class="team-socials">
                ${socialsHTML}
            </div>

        </div>
        `;

    });

}


loadTeam();