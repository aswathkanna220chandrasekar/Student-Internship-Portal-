let internships = [
    {
        id: 1,
        title: "Python Developer Intern",
        company: "Tech Solutions",
        location: "Chennai",
        duration: "3 Months",
        stipend: "₹8,000/month"
    },
    {
        id: 2,
        title: "Web Developer Intern",
        company: "Web Technologies",
        location: "Coimbatore",
        duration: "2 Months",
        stipend: "₹5,000/month"
    },
    {
        id: 3,
        title: "JavaScript Developer Intern",
        company: "Digital Company",
        location: "Madurai",
        duration: "3 Months",
        stipend: "₹6,000/month"
    }
];

let applications = [];

// Display internships
function displayInternships() {
    let container = document.getElementById("internships");
    container.innerHTML = "";

    internships.forEach(function(internship) {
        container.innerHTML += `
    < div >
                <h3>${internship.title}</h3>
                <p>Company: ${internship.company}</p>
                <p>Location: ${internship.location}</p>
                <p>Duration: ${internship.duration}</p>
                <p>Stipend: ${internship.stipend}</p>
                <button onclick="applyInternship(${internship.id})">
                    Apply Now
                </button>
            </div >
    <hr>
        `;
    });
}

        // Apply for an internship
        function applyInternship(id) {
            let internship = internships.find(function(item) {
        return item.id === id;
    });

        if (applications.includes(id)) {
            alert("You have already applied for this internship!");
    } else {
            applications.push(id);
        alert("Successfully applied for " + internship.title);
        displayApplications();
    }
}

        // Track applications
        function displayApplications() {
            let container = document.getElementById("applications");
        container.innerHTML = "";

        applications.forEach(function(id) {
            let internship = internships.find(function(item) {
            return item.id === id;
        });

        container.innerHTML += `
        <p>${internship.title} - Application Submitted</p>
        `;
    });
}

        // Show internships when the page loads
        displayInternships();
