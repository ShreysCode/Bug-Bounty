const volunteerList   = document.getElementById("volunteerList");
const assignBtn       = document.getElementById("assignBtn");
const volunteerStatus = document.getElementById("volunteerStatus");

function renderVolunteers() {
  volunteerList.innerHTML = "";

  volunteers.forEach((v) => {
    const item = document.createElement("li");
    item.className = "volunteer-item";
    item.innerHTML = `
      <span class="vol-name">${v.name}</span>
      <span class="vol-exp">Exp: ${v.experience} yr(s)</span>
      <span class="vol-assigned">${v.assignedTeam ? "Assigned: " + v.assignedTeam : "Unassigned"}</span>
    `;
    volunteerList.appendChild(item);
  });
}

function assignVolunteers() {
  const approvedTeams = teams.filter((t) => t.status === "Approved");

  if (approvedTeams.length === 0) {
    volunteerStatus.textContent = "No approved teams to assign volunteers to.";
    return;
  }

  let assignedCount = 0;
  const unassigned = volunteers.filter((v) => v.assignedTeam === null);

  unassigned.forEach((volunteer, index) => {
    const team = approvedTeams[index % approvedTeams.length];
    volunteer.assignedTeam = team.name;
    assignedCount++;
  });

  volunteerStatus.textContent = `${assignedCount} volunteer(s) assigned successfully.`;
  renderVolunteers();
}

assignBtn.addEventListener("click", assignVolunteers);
