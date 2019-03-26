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
          console.log(i);
          // let pic = body.data[i].profile.image_url;
          $(".output").append(`<img src=${body.data[i].profile.image_url}>`);
          $(".output").append(`<p> Name: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</p>`);
          $(".output").append(`<p>Address: ${body.data[i].practices[i].visit_address.street}</p>`);
          $(".output").append(`<p>Accepting New Patients: ${body.data[i].practices[0].accepts_new_patients}</p>`);
          $(".output").append(`<p>Phone Number: ${body.data[i].practices[i].phones[0].number}</p>`);
          // $(".ouput").append(`<p>Website: ${body.date[i].practices[0].website}</p>`);
        }
      }
    });
  });
});
