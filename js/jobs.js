fetch("../data/jobs.json")
    .then(response => response.json())
    .then(data => {

        const container = document.getElementById("jobs");

        data.jobs.forEach(job => {

            container.innerHTML += `
                <article class="job-card">

                    <h2>
                        ${job.title}
                    </h2>

                    <p>
                        ${job.department} • ${job.type}
                    </p>

                    <p>
                        ${job.description}
                    </p>


                    <h3>
                        Skills
                    </h3>

                    <ul>
                        ${job.skills.map(skill => `<li>${skill}</li>`).join("")}
                    </ul>


                    <a 
                        class="apply-button"
                        href="https://discord.gg/GhDzfU6CRC"
                        target="_blank"
                    >
                        Apply via Discord
                    </a>

                </article>
            `;

        });

    });