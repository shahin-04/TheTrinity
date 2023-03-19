
const logoutBtn = document.getElementById("logout-btn");

// Add a click event listener to the logout button
logoutBtn.addEventListener("click", function(e) {
  e.preventDefault(); // prevent the link from redirecting immediately

  // Sign the user out of Firebase
  firebase.auth().signOut()
    .then(() => {
      // Redirect the user to the login page after logout
      window.location.href = "file:///E:/VS%20Code/hackathon/logino.html";
    })
    .catch((error) => {
      console.error(error);
    });
});

  function HopenDialog(myDialog) {
    document.getElementById("myDialog").style.display = "block";
  }
  
  function HcloseDialog(myDialog) {
    document.getElementById("myDialog").style.display = "none";
  }

  // driver
  function DopenDialog(drivermyDialog) {
    document.getElementById("drivermyDialog").style.display = "block";
  }
  
  function DcloseDialog(drivermyDialog) {
    document.getElementById("drivermyDialog").style.display = "none";
  }
  // garderner
  function GopenDialog(gardenermyDialog) {
    document.getElementById("gardenermyDialog").style.display = "block";
  }
  
  function GcloseDialog(gardenermyDialog) {
    document.getElementById("gardenermyDialog").style.display = "none";
  }

  //againg houeshelper
  function HHopenDialog(househelper) {
    document.getElementById("househelper").style.display = "block";
  }
  
  function HHcloseDialog(househelper) {
    document.getElementById("househelper").style.display = "none";
  }

  //contactus button
 // Get the contact button element
