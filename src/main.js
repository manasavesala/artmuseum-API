
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Art } from "./art.js";


$(document).ready(function() {
    $('#period').click(function() {
      event.preventDefault();
      $("#output1").empty();
      $("#output2").empty();
      $("#output3").empty();
      $('#output').empty();
      

      let art = new Art();
      let promise = art.period();
     

      promise.then(function(response) {
       
      let body = JSON.parse(response);
      for(let i=0 ; i< body.records.length; i++){
        $('#output').append("<li style='list-style: none;'> " + "<a href='https://en.wikipedia.org/wiki/Wikipedia' >"+ `${body.records[i].name}` + "</a>" + "</li>");
      }
      })
    });

    $('#century').click(function() {
      event.preventDefault();
      $("#output").empty();
      $("#output2").empty();
      $("#output3").empty();
      $('#output1').empty();


      let art = new Art();
      let promise = art.century();
    

      promise.then(function(response) {
        
      let body = JSON.parse(response);
      for(let i=0 ; i< body.records.length; i++){
        $('#output1').append("<li style='list-style: none;'> " + "<a href='https://en.wikipedia.org/wiki/Wikipedia' >"+ `${body.records[i].name}` + "</a>" + "</li>");
      }
      })
    });

    $('#classification').click(function() {
      event.preventDefault();
      $("#output").empty();
      $("#output1").empty();
      $("#output3").empty();
      $('#output2').empty();


      let art = new Art();
      let newpromise = art.classification();
     

      newpromise.then(function(response) {
        
      let body = JSON.parse(response);
      console.log(body);
      for(let i=0 ; i< body.records.length; i++){
        $('#output2').append("<li style='list-style: none;'> " + "<a href='https://en.wikipedia.org/wiki/Wikipedia' >"+ body.records[i].name + "</a>" + "</li>");
      }
      })
    });

    $('#technique').click(function() {
      event.preventDefault();
      $("#output").empty();
      $("#output1").empty();
      $("#output2").empty();
      $('#output3').empty();

      let art = new Art();
      let promise = art.technique();
     

      promise.then(function(response) {
        
      let body = JSON.parse(response);
      for(let i=0 ; i< body.records.length; i++){
        $('#output3').append("<li style='list-style: none;'> " + "<a href='https://en.wikipedia.org/wiki/Wikipedia' >"+ `${body.records[i].name}` + "</a>" + "</li>");
      }
      })
    });
   

   
  });