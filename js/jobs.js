fetch("../data/jobs.json")
    .then(response => response.json())
    .then(data => {

        const container = document.getElementById("jobs");

        data.jobs.forEach(job => {

            const badges = [
    job.status,
    job.type,
    job.beginner_friendly ? "🌱" : ""
]
.filter(Boolean)
.join(" • ");


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


                    <p class="badges">
                        ${badges}
                    </p>


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