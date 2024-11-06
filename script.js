document.addEventListener("DOMContentLoaded", function () {
    // Function to generate the CV preview
    function generateCV() {
      // Retrieve data from input fields
      let fullname = document.getElementById("fullname_dsp");
      let firstname = document.querySelector(".firstname").value;
      let middlename = document.querySelector(".middlename").value;
      let lastname = document.querySelector(".lastname").value;
  
      // Concatenate the full name
      if (middlename) {
        fullname.innerHTML = `${firstname} ${middlename} ${lastname}`;
      } else {
        fullname.innerHTML = `${firstname}  ${lastname}`;
      }
  
      // Get other input values
      let designation = document.querySelector(".designation").value;
      let address = document.querySelector(".address").value;
      let email = document.querySelector(".email").value;
      let phoneno = document.querySelector(".phoneno").value;
      let summary = document.querySelector(".summary").value;
  
      // Update preview elements with retrieved values
      document.getElementById("designation_dsp").innerHTML = designation;
      document.getElementById("address_dsp").innerHTML = address;
      document.getElementById("email_dsp").innerHTML = email;
      document.getElementById("phoneno_dsp").innerHTML = phoneno;
      document.getElementById("summary_dsp").innerHTML = summary;
  
      // Achievements Section
      let achievements_dsp = document.getElementById("achievements_dsp");
      let achieve_title = document.querySelectorAll(".achieve_title");
      let achieve_description = document.querySelectorAll(".achieve_description");
  
      achievements_dsp.innerHTML = ""; // Clear previous entries
  
      for (let i = 0; i < achieve_title.length; i++) {
        // Create a new achievement item
        let ach = document.createElement("div");
        ach.classList.add("preview-item");
  
        ach.innerHTML = `
              <div class = 'title'>${achieve_title[i].value}</div>
              <div class = 'desc'>${achieve_description[i].value}</div>
          `;
  
        // Append the new achievement item to the preview
        achievements_dsp.appendChild(ach);
      }
  
      // Experiences Section (Similar to Achievements)
      let experiences_dsp = document.getElementById("experiences_dsp");
      let exp_title = document.querySelectorAll(".exp_title");
      let exp_organization = document.querySelectorAll(".exp_organization");
      let exp_location = document.querySelectorAll(".exp_location");
      let exp_start_date = document.querySelectorAll(".exp_start_date");
      let exp_end_date = document.querySelectorAll(".exp_end_date");
      let exp_description = document.querySelectorAll(".exp_description");
  
      experiences_dsp.innerHTML = "";
  
      for (let i = 0; i < exp_title.length; i++) {
        // Create a new experience item
        let exp = document.createElement("div");
        exp.classList.add("preview-item");
  
        // Format the date values
        let startDate = new Date(exp_start_date[i].value).toLocaleDateString(
          "en-US",
          { month: "short", year: "numeric" }
        );
        let endDate = new Date(exp_end_date[i].value).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });
  
        exp.innerHTML = `
              <div class = 'title'>${exp_title[i].value}</div>
              <div class = 'sub-title'>${exp_organization[i].value}, ${
          exp_location[i].value
        } </div>
              <div class = 'date'>${startDate} - ${endDate}</div>
              <div class = 'desc'>${exp_description[i].value}</div>
          `;
  
        experiences_dsp.appendChild(exp);
      }
  
      // Education Section (Similar to Achievements and Experiences)
      let educations_dsp = document.getElementById("educations_dsp");
      let edu_school = document.querySelectorAll(".edu_school");
      let edu_degree = document.querySelectorAll(".edu_degree");
      let edu_city = document.querySelectorAll(".edu_city");
      let edu_start_date = document.querySelectorAll(".edu_start_date");
      let edu_graduation_date = document.querySelectorAll(
        ".edu_graduation_date"
      );
      let edu_description = document.querySelectorAll(".edu_description");
  
      educations_dsp.innerHTML = ""; // Clear previous entries
  
      for (let i = 0; i < edu_school.length; i++) {
        // Create a new education item
        let edu = document.createElement("div");
        edu.classList.add("preview-item");
  
        let startDate = new Date(edu_start_date[i].value).toLocaleDateString(
          "en-US",
          { month: "short", year: "numeric" }
        );
        let endDate = new Date(
          edu_graduation_date[i].value
        ).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  
        edu.innerHTML = `
              <div class = 'title'>${edu_degree[i].value}</div>
              <div class = 'sub-title'>${edu_school[i].value}, ${
          edu_city[i].value
        } </div>
              <div class = 'date'>${startDate} - ${endDate}</div>
              <div class = 'desc'>${edu_description[i].value}</div>
          `;
  
        // Append the new education item to the preview
        educations_dsp.appendChild(edu);
      }
  
      // Projects Section (Similar to previous sections)
      let projects_dsp = document.getElementById("projects_dsp");
      let proj_title = document.querySelectorAll(".proj_title");
      let proj_link = document.querySelectorAll(".proj_link");
      let proj_description = document.querySelectorAll(".proj_description");
  
      projects_dsp.innerHTML = ""; // Clear previous entries
  
      for (let i = 0; i < proj_title.length; i++) {
        // Create a new project item
        let proj = document.createElement("div");
        proj.classList.add("preview-item");
  
        proj.innerHTML = `
              <div class = 'title'>${proj_title[i].value}</div>
              <div class = 'sub-title'>${proj_link[i].value}</div>
              <div class = 'desc'>${proj_description[i].value}</div>
          `;
  
        // Append the new project item to the preview
        projects_dsp.appendChild(proj);
      }
  
      // Skills Section (Similar to previous sections)
      let skills_dsp = document.getElementById("skills_dsp");
      let skill = document.querySelectorAll(".skill");
      skills_dsp.innerHTML = ""; // Clear previous entries
  
      for (let i = 0; i < skill.length; i++) {
        let skl = document.createElement("div");
        skl.classList.add("preview-item");
        skl.innerHTML = `
              <span>${skill[i].value}</span>
          `;
  
        skills_dsp.appendChild(skl);
      }
    }
  
    // Image Preview
    function previewImage() {
      let fileInput = document.querySelector(".image");
      let image_dsp = document.getElementById("image_dsp");
  
      if (fileInput.files && fileInput.files[0]) {
        let reader = new FileReader();
  
        reader.onload = function (e) {
          image_dsp.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    }
  
    // Event Listener for Image Upload
    document.querySelector(".image").addEventListener("change", previewImage);
  
    // Event Listener for form input to update CV preview
    document
      .getElementById("cv-form")
      .addEventListener("keyup", generateCV);
  
    // Print Functionality
    function printCV() {
      window.print();
    }
  
    // Event Listener for Print Button
    document.querySelector(".print-btn").addEventListener("click", printCV);
  
    // Initialize jQuery Repeater for dynamic form fields
    $(".repeater").repeater({
      // (Optional) Default values for new fields
      defaultValues: {},
  
      // (Optional) Show or hide the add button
      show: function () {
        $(this).slideDown();
      },
      hide: function (deleteElement) {
        $(this).slideUp(deleteElement);
      },
  
      // (Optional) Callback functions for add, delete, and ready events
      ready: function () {}, // Called when the repeater is ready
      repeaters: {}, // Allows nesting of repeaters
  
      // (Optional) Custom validation
      validate: function () {},
    });
  });
  
