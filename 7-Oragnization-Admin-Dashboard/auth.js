function getCurrentUser() {
  return {
    name: "Fest Admin",
    role: "viewer"
  };
}

function canApprove() {
  return getCurrentUser().role === "admin";
}
