$("*").css("background-color", "lightgrey");

//form validation
$("#form").submit(function (e) {
  e.preventDefault();
  var firstname = $("#firstname");
  var lastname = $("#lastname");
  var password = $("#password").val();
  var confirmpassword = $("#confirmpassword").val();
  var email = $("#email").val();
  var gender = $("#gender");
  var degree = $("#degree");
  var error = $(".error");
  var male = $("#male");
  var female = $("female");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (firstname.val() === "" && lastname.val() === "") {
    $("#firstname").after(`<span class="error">This field is required</span>`);
    $("#lastname").after(`<span class="error">This field is required</span>`);
  }

  if (password === "" && confirmpassword === "") {
    $("#password").after(`<span class="error">This field is required</span>`);
    $("#confirmpassword").after(
      `<span class="error">This field is required</span>`
    );
  } else {
    if (password.length > 8) {
      if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        $("#password").after(
          `<span class="error">password must have an one uppercase,one symbol,one number</span>`
        );
      } else {
        if (password === confirmpassword) {
        } else {
          $("#confirmpassword").after(
            `<span class="error">password must be same</span>`
          );
        }
      }
    } else {
      $("#password").after(
        `<span class="error">password must have a 8 characters</span>`
      );
    }
  }

  if (email === "") {
    $("#email").after(`<span class="error">This field is required</span>`);
  } else {
    if (!emailRegex.test(email)) {
      $("#email").after(
        `<span class="error"> enter a correct mail format</span>`
      );
    }
  }

//  if($("input[type='radio']:checked")){

//  }
//  else{
//   $("#gender").after(
//     `<span class="error"> This field is required</span>`
//   );

//  }
 
});
