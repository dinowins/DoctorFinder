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
    const firstName = $("#first-name").val();
    $("#first-name").val();
    const lastName = $("#last-name").val();
    $("#last-name").val();

    const findDoc = new findDoctor();
    let promise = findDoc.findByCondition(condition, firstName, lastName);
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      if(body.data.length === 0) {
        $(".output").append("<p>There are no doctors in the area that match the conditions.</p>");
      }
      else {
        body.data.forEach(function(index){
          console.log(index);
          $(".output").append(`<img src=${index.profile.image_url}>`);
          $(".output").append(`<p> Name: ${index.profile.first_name} ${index.profile.last_name}</p>`);
          $(".output").append(`<p>Address: ${index.practices[0].visit_address.street}</p>`);
          $(".output").append(`<p>Accepting New Patients: ${index.practices[0].accepts_new_patients}</p>`);
          $(".output").append(`<p>Phone Number: ${index.practices[0].phones[0].number}</p>`);
          // $(".ouput").append(`<p>Website: ${body.date[i].practices[0].website}</p>`);
        });
      }
    });
  });
});
