const jobs = [
    {
        title: "Frontend Developer",
        company: "Tech Solutions"
    },
    {
        title: "Backend Developer",
        company: "InnovateX"
    },
    {
        title: "UI/UX Designer",
        company: "Creative Labs"
    }
];

const jobList = document.getElementById("jobList");

jobs.forEach(job => {

    const div = document.createElement("div");

    div.classList.add("job-card");

    div.innerHTML = `
        <h3>${job.title}</h3>
        <p>Company: ${job.company}</p>
    `;

    jobList.appendChild(div);
});

document.getElementById("applicationForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const selectedJob =
    document.getElementById("job").value;

    document.getElementById("message")
    .innerText =
    `${name}, your application for ${selectedJob} has been submitted successfully!`;

    this.reset();
});