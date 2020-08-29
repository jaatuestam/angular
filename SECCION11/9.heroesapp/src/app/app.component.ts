import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
	console.log('entro constructor');
	window.console.error = (errorMsg, url, lineNumber) => {
		alert("Error occured: " + errorMsg);//or any message
		console.log('error ' , errorMsg);
		
		return false;
	}
  }
}
