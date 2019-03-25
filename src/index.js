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

    let findDoc = new findDoctor();
    let promise = findDoc.findByCondition(condition);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body.data[0].profile.image_url);
    });


  });
});
