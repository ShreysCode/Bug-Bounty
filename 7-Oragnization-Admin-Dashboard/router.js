const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

function switchTab(targetId) {
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.target === targetId);
  });
  panels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.id !== targetId);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    switchTab(tab.dataset.target);
    if (tab.dataset.target === "analytics") renderAnalytics();
    if (tab.dataset.target === "volunteers") renderVolunteers();
  });
});
