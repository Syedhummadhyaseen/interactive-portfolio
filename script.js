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
link: "https://github.com/Syedhummadhyaseen/interactive-portfolio",
demo: "https://syedhummadhyaseen.github.io/interactive-portfolio/"
    
    },
   {
    name: "To-Do App",
    category: "javascript",
    description: "A task manager where you can add, complete and delete tasks. Tasks are saved in the browser using localStorage.",
    technologies: "HTML, CSS, JavaScript",
    link: "https://github.com/Syedhummadhyaseen/todo-app",
    demo: "https://syedhummadhyaseen.github.io/todo-app/"
} ,
{
    name: "GitHub Profile Finder",
    category: "javascript",
    description: "A web app that searches GitHub users and displays their profile and latest repositories using live data from the GitHub API.",
    technologies: "HTML, CSS, JavaScript, GitHub API",
    link: "https://github.com/Syedhummadhyaseen/github-finder",
    demo: "https://syedhummadhyaseen.github.io/github-finder/"
},
{
    name: "Quiz App",
    category: "javascript",
    description: "A multiple-choice quiz with instant feedback, score tracking and a results screen, built with plain JavaScript.",
    technologies: "HTML, CSS, JavaScript",
    link: "https://github.com/Syedhummadhyaseen/quiz-app",
    demo: "https://syedhummadhyaseen.github.io/quiz-app/"
},
{
  name: "GitHub Profile Finder (React)",
  category: "Frontend",
  description: "React rebuild of the GitHub Finder. Search any username to see their profile and latest repositories, built with components and useState.",
  technologies: "React, Vite, JavaScript, GitHub API",
  link: "https://github.com/Syedhummadhyaseen/github-finder-react",
  demo: "https://syedhummadhyaseen.github.io/github-finder-react/"
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

    const demoLink = document.getElementById("popupDemo");

if (project.demo) {
    demoLink.href = project.demo;
    demoLink.style.display = "inline-block";
} else {
    demoLink.style.display = "none";
}

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