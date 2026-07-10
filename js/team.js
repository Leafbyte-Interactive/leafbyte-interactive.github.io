async function loadTeam() {


    const container =
    document.getElementById("team-container");


    const response =
    await fetch("/data/team.json");


    const team =
    await response.json();



    if(team.length === 0) {

        container.innerHTML =
        `
        <div class="card">

            <p>
            Team members will be announced soon.
            </p>

        </div>
        `;

        return;

    }



    team.forEach(person => {


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


        </div>

        `;


    });


}


loadTeam();