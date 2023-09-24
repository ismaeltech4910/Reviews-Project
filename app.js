const employees = [
  {
    name: "Tunde Omotoye",
    role: "CEO / Co-Founder",
    info: "The CEO, or Chief Executive Officer, is the highest-ranking executive in a company. The role of a CEO can vary depending on the size and nature of the organization, but generally, their responsibilities include:",
    image:
      "https://humansquad.com/img/HS%20Headshots/Tunde%20Omotoye-modified.jpg",
  },

  {
    name: "Funto Ademoye",
    role: "Study Admissions Specialist",
    info: "An admission consultant is a professional who provides guidance and support to individuals who are seeking admission to educational institutions, such as universities, colleges, or graduate schools.",
    image: "https://humansquad.com/img/HS%20Headshots/Funto.png",
  },

  {
    name: "Kelvin Njiriani",
    role: "Front-End Developer",
    info: "A front-end developer is a professional who specializes in creating the user interface (UI) and user experience (UX) of websites and web applications. Their role involves translating",
    image: "https://humansquad.com/img/HS%20Headshots/kelvin.jpg",
  },

  {
    name: "Seun Adeleke",
    role: "Financial Analyst",
    info: "A financial analyst plays a crucial role in analyzing and evaluating financial data to support informed decision-making within an organization. Their primary responsibilities include:",
    image: "https://humansquad.com/img/HS%20Headshots/Seun%20.jpg",
  },

  {
    name: "Ayo AI",
    role: "Communication Lead",
    info: "A Communication Lead, also known as a Communications Manager or Communications Director, is responsible for managing an organization's internal and external communication.",
    image: "https://humansquad.com/img/HS%20Headshots/Ayo-modified.jpg",
  },
];

//select the buttons
const nextBtn = document.querySelector(".chev-right");
const prevBtn = document.querySelector(".chev-left");

// employees info!
const employeeName = document.querySelector(".name");
const employeeRole = document.querySelector(".role");
const employeeInfo = document.querySelector(".info");
const employeeImage = document.querySelector(".img");

let currentItem = 0;

// As Website Loaded
window.addEventListener("DOMContentLoaded", () => {
  ShowEmployee(currentItem);
});

function ShowEmployee() {
  const item = employees[currentItem];
  employeeName.textContent = item.name;
  employeeInfo.textContent = item.info;
  employeeRole.textContent = item.role;
  employeeImage.src = item.image;
}

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > employees.length - 1) {
    // last item
    currentItem = 0;
  }

  ShowEmployee();
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) { // first item
    currentItem = employees.length - 1;
  }
  ShowEmployee();
});
