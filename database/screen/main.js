document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();

    // Update the UI with the fetched data
    const userName = document.getElementById("user-name");
    const userEmail = document.getElementById("user-email");

    userName.innerHTML = data.map((row) => `<p>${row.name}</p>`).join("");
    userEmail.innerHTML = data.map((row) => `<p>${row.email}</p>`).join("");

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// posting form data

async function postData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      console.log("Data submitted successfully");
      fetchData(); // Refresh the displayed data
    } else {
      console.error("Error submitting data:", response.statusText);
    }
  } catch (error) {
    console.error("Error submitting data:", error);
  }
}
