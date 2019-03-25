import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';

import { findDoctor } from './../src/api.js'

$(document).ready(function(){
  $("#form").click(function(event) {
    event.preventDefault();

    const condition = $(".condition").val();
    $(".condition").val();
    const name = $(".name").val();
    $(".name").val();

    const findDoc = new findDoctor();
    const promise = findDoc.findByCondition(condition);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      if(body.data.length < 0) {
        $(".output").append("<p>There are no doctors in the area that match the conditions.</p>");
      } else {
        for (let i = 0; i < 20; i++) {
          console.log(body);
        //   const pic =
        //   $(".output").append(``)
        }
      }
    });


  });
});
