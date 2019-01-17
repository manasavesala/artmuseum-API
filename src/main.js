
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Art } from "./art.js";


$(document).ready(function() {
    $('#period').click(function() {
      event.preventDefault();
      $("#output1").hide();
      $("#output2").hide();
      $("#output3").hide();
      $('#output').empty();
      

      let art = new Art();
      let promise = art.period();
     

      promise.then(function(response) {
       
      let body = JSON.parse(response);
      for(let i=0 ; i< 25; i++){
        $('#output').append("<li style='list-style: none;'> " + "<a href='https://en.wikipedia.org/wiki/Wikipedia' >"+ `${body.records[i].name}` + "</a>" + "</li>");
      }
      })
    });

    $('#century').click(function() {
      event.preventDefault();
      $("#output").hide();
      $("#output2").hide();
      $("#output3").hide();
      $('#output1').empty();


      let art = new Art();
      let promise = art.century();
    

      promise.then(function(response) {
        
      let body = JSON.parse(response);
      for(let i=0 ; i< 25; i++){
        $('#output1').append("<li style='list-style: none;'> " + "<a href='https://en.wikipedia.org/wiki/Wikipedia' >"+ `${body.records[i].name}` + "</a>" + "</li>");
      }
      })
    });

    $('#classification').click(function() {
      event.preventDefault();
      $("#output").hide();
      $("#output1").hide();
      $("#output3").hide();
      $('#output2').empty();


      let art = new Art();
      let newpromise = art.classification();
     

      newpromise.then(function(response) {
        
      let body = JSON.parse(response);
      console.log(body);
      for(let i=0 ; i< 25; i++){
        $('#output2').append("<li style='list-style: none;'> " + "<a href='https://en.wikipedia.org/wiki/Wikipedia' >"+ body.records[i].name + "</a>" + "</li>");
      }
      })
    });

    $('#technique').click(function() {
      event.preventDefault();
      $("#output").hide();
      $("#output1").hide();
      $("#output2").hide();
      $('#output3').empty();

      let art = new Art();
      let promise = art.technique();
     

      promise.then(function(response) {
        
      let body = JSON.parse(response);
      for(let i=0 ; i< 25; i++){
        $('#output3').append("<li style='list-style: none;'> " + "<a href='https://en.wikipedia.org/wiki/Wikipedia' >"+ `${body.records[i].name}` + "</a>" + "</li>");
      }
      })
    });
   

   
  });