const projects = [
    {
        name: "Jessica Eisah Anak Dickson - Real Time Single-Phase Electrical Power Monitoring System",
        description: "This project aims to develop a low-cost, standalone, real-time single-phase power monitoring system using an ESP32 microcontroller and PZEM-004T module. The system measures voltage, current, active power, and energy consumption, displaying the readings on a 2004 I2C LCD without requiring an internet connection. The prototype is programmed using Arduino IDE and tested to ensure its functionality. This project promotes energy efficiency and raises awareness of daily electricity consumption.",
        poster: "images/poster 1.jpg",
        video: "videos/video 1.mp4"
    },
    {
        name: "Arrabella Estee Anak Suraya - Smart Cool: Intelligent Thermoelectrical Cooling Tumblr Using An ESP32 Microcontroller",
        description: "This project develops a smart tumbler using an ESP32 microcontroller and a Peltier module to automatically cool beverages. A temperature sensor monitors the beverage temperature, while the ESP32 controls the cooling process through a relay. A heatsink removes heat from the Peltier module to improve cooling performance. The system automatically stops cooling when the desired temperature is reached.",
        poster: "images/poster 2.jpg",
        video: "videos/video 2.mp4"
    },
    {
        name: "Alicecia Rossa Anak Malevicton Cliff - IoT-Based Real Time River Water Quality Monitoring and Automated Pollution Response Using Multi-Sensor Integration",
        description: "This project develops an IoT-based river water quality monitoring system using an ESP32 and multiple sensors to measure pH, temperature, turbidity, and total dissolved solids (TDS). Data is transmitted via Wi-Fi to an IoT dashboard for real-time monitoring. Threshold-based detection identifies abnormal readings and provides alerts to support early pollution detection and more efficient water resource management.",
        poster: "images/poster 3.jpg",
        video: "videos/video 3.mp4"
    },
    {
        name: "Nur Haziemah Binti Jummiat - Intelligent Electrical Room Safety Using Sensor Fusion and AI",
        description: "This project develops an intelligent electrical room safety monitoring system using an ESP32, sensors, and AI-based computer vision. Ultrasonic, motion, and gas sensors detect potential hazards, while a Raspberry Pi camera with OpenCV checks helmet and safety vest compliance. The system provides immediate alerts through a buzzer and LED indicators to improve workplace safety.",
        poster: "images/poster 4.jpg",
        video: "videos/video 4.mp4."
    }
];

const homePage = document.getElementById("homePage");
const detailPage = document.getElementById("detailPage");
const projectGrid = document.getElementById("projectGrid");
const videoModal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");

let selectedProject = null;

// Create the project cards
projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const poster = document.createElement("img");
    poster.src = project.poster;
    poster.alt = project.name + " poster";

    poster.onerror = () => {
        poster.onerror = null;
        poster.removeAttribute("src");
        poster.alt = "Poster not provided yet";
    };

    const title = document.createElement("h3");
    title.textContent = project.name;

    const button = document.createElement("button");
    button.textContent = "View Project";
    button.addEventListener("click", () => openProject(index));

    card.append(poster, title, button);
    projectGrid.appendChild(card);
});

// Open a project
function openProject(index) {
    selectedProject = projects[index];

    document.getElementById("detailTitle").textContent =
        selectedProject.name;

    document.getElementById("detailDescription").textContent =
        selectedProject.description;

    const poster = document.getElementById("detailPoster");
    poster.src = selectedProject.poster;

    poster.onerror = () => {
        poster.onerror = null;
        poster.removeAttribute("src");
        poster.alt = "Poster not provided yet";
    };

    homePage.hidden = true;
    detailPage.hidden = false;
}

// Return to Main Menu
document.getElementById("backButton").addEventListener("click", () => {
    detailPage.hidden = true;
    homePage.hidden = false;
});

// Play the project video
document.getElementById("playButton").addEventListener("click", () => {
    if (!selectedProject) return;

    document.getElementById("videoTitle").textContent =
        selectedProject.name + " - Video";

    videoPlayer.src = selectedProject.video;
    videoModal.hidden = false;

    videoPlayer.play().catch(() => {
        // Press Play manually if autoplay is blocked.
    });
});

// Close the video
function closeVideo() {
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
    videoModal.hidden = true;
}

document.getElementById("closeVideo")
    .addEventListener("click", closeVideo);

// Close the video with Escape
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !videoModal.hidden) {
        closeVideo();
    }
});
