    const searchInput = document.getElementById("projectSearch");
      
let clicks = 0;
const projects = [
    {
        
        name: "Python Expense Tracker",
category: "python",
description: "A Python application for tracking and managing daily expenses.",
technologies: "Python, File Handling",
link: "https://github.com/syedhummadhyaseen/python-expense-tracker"
   
    },
    {
      name: "Personal Portfolio",
category: "javascript",
description: "An interactive personal portfolio showcasing my skills and projects.",
technologies: "HTML, CSS, JavaScript",
link: "https://github.com/Syedhummadhyaseen/interactive-portfolio"

    }
];

function displayProjects(projectArray) {
    const projectList = document.getElementById("projectList");

    projectList.innerHTML = "";
    if (projectArray.length === 0) {
    projectList.innerHTML = "<p>No projects available in this category yet.</p>";
    return;
}

    projectArray.forEach(function(project) {
        const projectCard = document.createElement("a");

        projectCard.textContent = project.name;
        projectCard.href = project.link;
        projectCard.target = "_blank";

        projectList.appendChild(projectCard);
        projectCard.addEventListener("click", function(event) {
    event.preventDefault();
    openPopup(project);
});
    });
    
   
}

function applyFilters() {

    const searchText = searchInput.value.toLowerCase();

    const activeButton = document.querySelector(".filter-btn.active");
    const selectedCategory = activeButton.dataset.filter;

    const filteredProjects = projects.filter(function(project) {

        const matchesSearch = project.name.toLowerCase().includes(searchText);

        const matchesCategory = selectedCategory === "all" ||
                                project.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    displayProjects(filteredProjects);
}

searchInput.addEventListener("input", applyFilters);
 const filterButtons = document.querySelectorAll(".filter-btn");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        applyFilters();

    });

});
function openPopup(project) {
    document.getElementById("popupTitle").innerText = project.name;

    document.getElementById("popupDescription").innerText = project.description;

    document.getElementById("popupTechnologies").innerText =
        "Technologies: " + project.technologies;

    document.getElementById("popupGithub").href = project.link;

    document.getElementById("projectPopup").style.display = "flex";
}
function closePopup() {
    document.getElementById("projectPopup").style.display = "none";
}
document.getElementById("projectPopup").addEventListener("click", function(event) {
    if (event.target === this) {
        closePopup();
    }
});
function changeText() {
    clicks = clicks + 1;
            document.getElementById("counter").innerText = "Clicks: " + clicks;

            document.getElementById("home").innerText =
                "Future AI Engineer loading 🚀";
        }
        function resetClicks(){
            clicks = 0;
            document.getElementById("counter").innerText = "Clicks: " + clicks;
            document.getElementById("home").innerText = "Hi, I am Syed";
        }
        
  
        function toggleTheme() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        document.getElementById("themeButton").innerText = "Dark Mode";
    } else {
        document.getElementById("themeButton").innerText = "Light Mode";
    }
}
displayProjects(projects);