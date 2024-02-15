document.addEventListener("DOMContentLoaded", function () {
  const userListElement = document.getElementById("userList");

  // Fetch data from the server
  fetch("http://localhost:3000/users", { mode: "no-cors" })
    .then(results => {
      
    })
    // .then((users) => {
    //   // Update the HTML content with the fetched data

    //   console.log(users)
    //   // for (user in users) {
    //   //   const listItem = document.createElement("li");
    //   //   userListElement.textContent = `${user}`;
    //   //   userListElement.appendChild(listItem);
    //   // }
    // })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});