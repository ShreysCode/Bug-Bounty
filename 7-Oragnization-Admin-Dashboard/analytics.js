function renderAnalytics() {
  const total    = teams.length;
  const approved = teams.filter((t) => t.status === "approved");
  const pending  = teams.filter((t) => t.status === "pending");
  const rejected = teams.filter((t) => t.status === "rejected");

  const approvalRate  = Math.round((approved.length / total) * 100);
  const rejectionRate = Math.round((rejected.length / approved.length) * 100);

  const categoryCount = {};
  teams.forEach((t) => {
    categoryCount[t.category] = (categoryCount[t.category] || 0) + 1;
  });

  const topCategory = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])[0][0];

  document.getElementById("stat-total").textContent     = total;
  document.getElementById("stat-approved").textContent  = approved.length;
  document.getElementById("stat-pending").textContent   = pending.length;
  document.getElementById("stat-rejected").textContent  = rejected.length;
  document.getElementById("stat-approval-rate").textContent  = `${approvalRate}%`;
  document.getElementById("stat-rejection-rate").textContent = `${rejectionRate}%`;
  document.getElementById("stat-top-category").textContent   = topCategory;
}
