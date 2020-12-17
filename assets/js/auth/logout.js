const logout = () => {
  sessionStorage.clear();
  return document.body.innerHTML =
    `
      <div class="container">
        <h2>You are successfully logged out!<h2>
        <p>Hope to see you soon 🌱</p>
      </div>
    `;
}

export { logout };