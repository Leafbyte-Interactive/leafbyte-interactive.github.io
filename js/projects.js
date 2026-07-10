async function loadProjects() {

    const container =
    document.getElementById("projects-container");


    const emptyMessage =
    document.getElementById("no-projects");


    const response =
    await fetch("/data/projects.json");


    const projects =
    await response.json();



    if(projects.length > 0) {

        emptyMessage.style.display = "none";

    }



    projects.forEach(project => {


        container.innerHTML +=
        `
        <div class="card">

            <div class="project-image-container">

                <img
                src="${project.image}"
                class="project-image"
                alt="${project.name}">

            </div>


            <h2>
            ${project.name}
            </h2>


            <p>
            ${project.description}
            </p>


            <p>
            ${project.status}
            </p>


            <a href="${project.url}" target="_blank">
            View Project
            </a>


        </div>
        `;


    });


}


loadProjects();