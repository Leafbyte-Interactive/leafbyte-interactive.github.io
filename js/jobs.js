fetch("../data/jobs.json")
    .then(response => response.json())
    .then(data => {

        const container = document.getElementById("jobs");

        data.jobs.forEach(job => {

            const badges = `
                ${job.status ? `<span class="badge status">${job.status}</span>` : ""}
                ${job.type ? `<span class="badge type">${job.type}</span>` : ""}
                ${job.beginner_friendly ? `<span class="badge beginner">🌱 Beginner Friendly</span>` : ""}
            `;


            const requirements = job.requirements
                ? `
                    <h3>
                        Looking For
                    </h3>

                    <ul>
                        ${job.requirements.map(item => `<li>${item}</li>`).join("")}
                    </ul>
                `
                : "";


            const preferred = job.preferred_skills
                ? `
                    <h3>
                        Preferred Skills
                    </h3>

                    <ul>
                        ${job.preferred_skills.map(skill => `<li>${skill}</li>`).join("")}
                    </ul>
                `
                : "";


            container.innerHTML += `
                <article class="job-card">

                    <h2>
                        ${job.title}
                    </h2>


                    <div class="badges">
                        ${badges}
                    </div>


                    <p class="department">
                        ${job.department}
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


                    ${requirements}


                    ${preferred}


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

    })
    .catch(error => {
        console.error("Failed to load jobs:", error);
    });