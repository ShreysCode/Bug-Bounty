const searchInput = document.getElementById("search");
const searchBtn   = document.getElementById("searchBtn");
const approveBtn  = document.getElementById("approveBtn");
const teamList    = document.getElementById("teamList");
const summary     = document.getElementById("summary");
const statusText  = document.getElementById("status");

let filteredTeams = [...teams];

function renderTeams(list) {
  teamList.innerHTML = "";

  if (list.length === 0) {
    teamList.innerHTML = "<li class='empty'>No teams match your search.</li>";
    summary.textContent = "Showing 0 teams";
    return;
  }

  list.forEach((team) => {
    const item = document.createElement("li");
    item.className = `team-item ${team.status}`;
    item.innerHTML = `
      <span class="team-name">${team.name}</span>
      <span class="team-meta">${team.category} &bull; ${team.members} members</span>
      <span class="team-badge ${team.status}">${team.status}</span>
    `;
    teamList.appendChild(item);
  });

  const approvedCount = list.filter((t) => t.status === "approved").length;
  const pendingCount  = list.filter((t) => t.status === "pending").length;
  summary.textContent = `Showing ${list.length} team(s) — ${approvedCount} approved, ${pendingCount} pending`;
}

function searchTeams() {
  const query = searchInput.value.toLowerCase();
  filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(query) ||
    team.category.toLowerCase().includes(query)
  );
  renderTeams(teams);
}

async function approveFirstPending() {
  if (!canApprove()) {
    statusText.textContent = "Only admins can approve teams.";
    return;
  }

  const pendingTeam = filteredTeams.find((team) => team.status === "pending");
  pendingTeam.status = "approved";
  await Promise.resolve();
  statusText.textContent = `✔ ${pendingTeam.name} approved successfully.`;
}

searchBtn.addEventListener("click", searchTeams);
approveBtn.addEventListener("click", approveFirstPending);

renderTeams(filteredTeams);
