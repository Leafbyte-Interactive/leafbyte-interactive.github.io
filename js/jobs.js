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


            container.innerHTML += `
                <article class="job-card">

                    <h2>
                        ${job.title}
                    </h2>


                    <p class="badges">
                        ${badges}
                    </p>


                    <p>
                        ${job.department}
                    </p>


                    <p>
                        ${job.description}
                    </p>


                    <h3>
                        What You Can Help With
                    </h3>

                    <ul>
                        ${job.contribute.map(item => `<li>${item}</li>`).join("")}
                    </ul>


                    <h3>
                        What We're Looking For
                    </h3>

                    <ul>
                        ${job.looking_for.map(item => `<li>${item}</li>`).join("")}
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

    })
    .catch(error => {
        console.error("Failed to load jobs:", error);
    });