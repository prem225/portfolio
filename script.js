function scrollInto(id){
    let element = document.getElementById(id);
    element.scrollIntoView({
         behavior: "smooth", 
      block: "start",
      inline: "nearest"
    })
}
    let roles = ["Developer", "QA Automation Engineer", "Manual tester"]

let index = 0;
const roleEl = document.getElementById("role");

function changeRole() {
  // roll up (exit)
  roleEl.classList.remove("show");
  roleEl.classList.add("hide");

  setTimeout(() => {
    roleEl.textContent = roles[index];
    index = (index + 1) % roles.length;

    // roll down (enter)
    roleEl.classList.remove("hide");
    roleEl.classList.add("show");
  }, 300);
}

changeRole();
setInterval(changeRole, 3000);