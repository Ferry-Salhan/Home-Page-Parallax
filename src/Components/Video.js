import React from 'react';
//import { Player } from "video-react";
//import logo from './logo.svg';
import Parallax from 'react-rellax';

import "../App.css";

function Video() {
  return (
      <>
      <div class="container">
  <section class="background">
    <div class="content-wrapper">
      <video autoplay="" muted="" loop="" id="myVideo">
	<source src="http://vcanaglobal.ga/vcana-new/wp-content/uploads/2021/04/final1.webm" type="video/mp4" />
	</video>
       <p class="content-title">Full Page Parallax Effect</p>
      <p class="content-subtitle">Scroll down and up to see the effect!</p> 
    </div>
  </section>
  <section class="background">
    <div class="content-wrapper">
      <p class="content-title">Cras lacinia non eros nec semper.</p>
      <p class="content-subtitle">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.</p>
    </div>
  </section>
  <section class="background">
    <div class="content-wrapper">
      <p class="content-title">Etiam consequat lectus.</p>
      <p class="content-subtitle">Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at nibh aliquam dapibus.</p>
    </div>
  </section>
</div>
    {/* <div className="myvideo">


      <section>
      <header className="App-header">
      <Parallax speed ={ -10 }>
     
      <video autoplay loop muted className="myVideo">
    <source src="http://vcanaglobal.ga/vcana-new/wp-content/uploads/2021/04/final1.webm" type="video/mp4" />
     </video>
     </Parallax>
     </header>

      </section>
       
    </div>
    <div className="red-section">
    <h2>SlideShow</h2>
    </div> */}
    </>
  );
}

export default Video;





{/* <div class="container body-content">
        



<div class="container">


 <div class="row justify-content-start" 
 style={{
     'padding-top':'10px'}}
     >
<label></label>



</div>
<div class="row justify-content-start" style={{
 'padding-top':'10px'
 }}>

<div class="col" style={{
 'padding-top':'10px'
 }}>
<button class="btn btn-primary"></button>


</div>
<div class="col" style={{'padding-top':'10px'}}>
<a href=""></a>


</div>
</div>
<div class="row justify-content-start" style={{
 'padding-top':'10px'}}>
<button class="btn btn-primary"></button>


</div>
<div class="row justify-content-center" style=
{{'padding-top':'10px'}}
>
<label><input type="radio" /> </label>


</div>
<div class="row justify-content-center" style={{"padding-top":"10px"}}>
<a href="#" target="_blank">React</a>


</div>
<div class="row justify-content-end" style={{"padding-top":"10px"}}>
<button class="btn btn-primary"></button>


</div>
<div class="row justify-content-end" style={{"padding-top":"10px"}}>


<img alt="Image html" width="90%" height="90%" style={{"max-height":"500px"
,"max-width":"500px"}}
src="https://sketch2code.azurewebsites.net/Content/img/fake_img.svg" />


</div>
<div class="row justify-content-end" style={{"padding-top":"10px"}}>
<h1></h1>


</div>
<div class="row justify-content-end" style={{"padding-top":"10px"}}>
<label></label>



</div>
<div class="row justify-content-end" style={{"padding-top":"10px"}}>
<button class="btn btn-primary"></button>


</div>
<div class="row justify-content-start" style={{"padding-top":"10px"}}>

<div class="col" style={{"padding-top":"10px"}}>
<button class="btn btn-primary"></button>


</div>
<div class="col" style={{"padding-top":"10px"}}>
<button class="btn btn-primary"></button>


</div>
</div>
<div class="row justify-content-end" style={{"padding-top":"10px"}}>
<a href="#" target="_blank">JS</a>


</div>
<div class="row justify-content-center" style={{"padding-top":"10px"}}>
<button class="btn btn-primary"></button>


</div>
<div class="row justify-content-end" style={{"padding-top":"10px"}}>
<a href="#" target="_blank">CSS</a>


</div>
<div class="row justify-content-center" style={{"padding-top":"10px"}}>
<p class="text-black-50">
Lorem ipsum dolor sit amet, consectetur adipiscing elit
<br />
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<br />
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
</p>
</div>
<div class="row justify-content-end" style={{"padding-top":"10px"}}>
<a href="#" target="_blank">HTML</a>


</div>
<div class="row justify-content-end" style={{"padding-top":"10px"}}>
<label></label>



</div>
<div class="row justify-content-start" style={{"padding-top":"10px"}}>

<div class="col" style={{"padding-top":"10px"}}>
<label></label>



</div>
<div class="col" style={{"padding-top":"10px"}}>
<button class="btn btn-primary"></button>


</div>
</div>


</div>
</div> */}