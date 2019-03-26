import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';

import { findDoctor } from './../src/api.js';

$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();

    const condition = $("#condition").val();
    $("#condition").val();
    const name = $("#name").val();
    $("#name").val();

    const findDoc = new findDoctor();
    let promise = findDoc.findByCondition(condition);
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      if(body.data.length === 0) {
        $(".output").append("<p>There are no doctors in the area that match the conditions.</p>");
      }
      else {
        for (let i = 0; i < 20; i++) {
          console.log("This ran");
          const pic = body.data[i].profile.image_url;
          $(".output").append("<img src='" + pic + "'>");

          const firstName = body.data[i].profile.first_name;
          const lastName = body.data[i].profile.last_name;
          $(".output").append("<p> Name: " + firstName + " " + lastName + "</p>");

          const acceptPatients = body.data.practices[0].accepts_new_patients;
          $(".output").append("<p> Accepting new patients: " + acceptPatients + "</p>");

          const address = body.data.practices[0].visit_address.street;
          $(".output").append("<p> Street address: " + address + " Portland, Or</p>");

          const phoneNumber = body.data.practices[0].phones[0].number;
          $(".output").append("<p> Phone Number: " + phoneNumber + "</p>");

          const website = body.date[i].practices[0].website;
          $(".output").append("<p> Website: " + website + "</p>");
        }
      }
    });
  });
});
