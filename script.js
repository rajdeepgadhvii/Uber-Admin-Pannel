document.addEventListener("DOMContentLoaded", function () {
  const teamMembers = [
    { name: "Rajdeep Gadhvi", role: "CEO", imageUrl: "ceo.jpg" , researchPaperUrl: "https://docs.google.com/document/d/1fg8XhmI8lZMk-yQEHR0BRojMF0USUj63Rl5lY1zT2N4/edit?usp=drivesdk"},
    { name: "Neti Dhoot", role: "Teachnology Officer", imageUrl: "techofiicer.jpg", researchPaperUrl: "https://docs.google.com/document/d/1ddH8JoUDL--BMh360YGQu7zQhi1ekhgwg8NCz8O6T3w/edit?usp=drivesdk" },
    { name: "Harsh Chauhan", role: "Data Analyst", imageUrl: "dataanalyst.jpg" , researchPaperUrl: "https://docs.google.com/document/d/1fg8XhmI8lZMk-yQEHR0BRojMF0USUj63Rl5lY1zT2N4/edit?usp=drivesdk"},
    { name: "Prit M Bavadiya", role: "Driver Representative", imageUrl: "driverrep.jpg", researchPaperUrl: "https://docs.google.com/document/d/1fg8XhmI8lZMk-yQEHR0BRojMF0USUj63Rl5lY1zT2N4/edit?usp=drivesdk" },
    { name: "Ridham Shah", role: "Economic analyst", imageUrl: "ecoanalyst.jpg", researchPaperUrl: "https://docs.google.com/document/d/1fg8XhmI8lZMk-yQEHR0BRojMF0USUj63Rl5lY1zT2N4/edit?usp=drivesdk" },
  ];

  const teamGrid = document.querySelector(".team-grid");

  teamMembers.forEach((member) => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("team-member");

    memberDiv.innerHTML = `
      <img src="${member.imageUrl}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.role}</p>
      <a href="${member.researchPaperUrl}" target="_blank" class="research-link">View Research Paper</a>
    `;

    teamGrid.appendChild(memberDiv);
  });
});