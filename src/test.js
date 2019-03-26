import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';

// import { findDoctor } from './../src/api.js';

$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    console.log('this');
  })
});
