import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CardsGameAngular';

  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
  }
  
  public preUrl = 'https://localhost:44313/api/cards';
  input: string = '';
  output: string = '';

  public specialcards: Numbers[] = [
    {value: '2T', viewValue: '2T'},
    {value: '4T', viewValue: '4T'},
    {value: 'PT', viewValue: 'PT'},
    {value: 'RT', viewValue: 'RT'},
    {value: 'ST', viewValue: 'ST'},
  ];

  public diamonds: Numbers[] = [
    {value: '2D', viewValue: '2D'},
    {value: '3D', viewValue: '3D'},
    {value: '4D', viewValue: '4D'},
    {value: '5D', viewValue: '5D'},
    {value: '6D', viewValue: '6D'},
    {value: '7D', viewValue: '7D'},
    {value: '8D', viewValue: '8D'},
    {value: '9D', viewValue: '9D'},
    {value: '10D', viewValue: '10D'},
    {value: 'JD', viewValue: 'JD'},
    {value: 'QD', viewValue: 'QD'},
    {value: 'KD', viewValue: 'KD'},
    {value: 'AD', viewValue: 'AD'}
  ];
  public spades: Numbers[] = [
    {value: '2S', viewValue: '2S'},
    {value: '3S', viewValue: '3S'},
    {value: '4S', viewValue: '4S'},
    {value: '5S', viewValue: '5S'},
    {value: '6S', viewValue: '6S'},
    {value: '7S', viewValue: '7S'},
    {value: '8S', viewValue: '8S'},
    {value: '9S', viewValue: '9S'},
    {value: '10S', viewValue: '10S'},
    {value: 'JS', viewValue: 'JS'},
    {value: 'QS', viewValue: 'QS'},
    {value: 'KS', viewValue: 'KS'},
    {value: 'AS', viewValue: 'AS'}
  ];
  public hearts: Numbers[] = [
    {value: '2H', viewValue: '2H'},
    {value: '3H', viewValue: '3H'},
    {value: '4H', viewValue: '4H'},
    {value: '5H', viewValue: '5H'},
    {value: '6H', viewValue: '6H'},
    {value: '7H', viewValue: '7H'},
    {value: '8H', viewValue: '8H'},
    {value: '9H', viewValue: '9H'},
    {value: '10H', viewValue: '10H'},
    {value: 'JH', viewValue: 'JH'},
    {value: 'QH', viewValue: 'QH'},
    {value: 'KH', viewValue: 'KH'},
    {value: 'AH', viewValue: 'AH'}
  ]; 
  public clubs: Numbers[] = [
    {value: '2C', viewValue: '2C'},
    {value: '3C', viewValue: '3C'},
    {value: '4C', viewValue: '4C'},
    {value: '5C', viewValue: '5C'},
    {value: '6C', viewValue: '6C'},
    {value: '7C', viewValue: '7C'},
    {value: '8C', viewValue: '8C'},
    {value: '9C', viewValue: '9C'},
    {value: '10C', viewValue: '10C'},
    {value: 'JC', viewValue: 'JC'},
    {value: 'QC', viewValue: 'QC'},
    {value: 'KC', viewValue: 'KC'},
    {value: 'AC', viewValue: 'AC'}
  ];

  public selectedspecialcards : string='';
  public selecteddiamond : string='';
  public selectedheart : string='';
  public selectedspade : string='';
  public selectedclub : string='';

  public addselectedspecialcards() {
    if(this.selectedspecialcards)
      this.input += this.selectedspecialcards+',';
    this.selectedspecialcards = '';
  }
  public addselecteddiamond() {
    if(this.selecteddiamond)
      this.input += this.selecteddiamond+',';
      this.selecteddiamond = '';
  }
  public addselectedheart() {
    if(this.selectedheart)
      this.input += this.selectedheart+',';
    this.selectedheart = '';
  }
  public addselectedspade() {
    if(this.selectedspade)
      this.input += this.selectedspade+',';
    this.selectedspade = '';
  }
  public addselectedclub() {
    if(this.selectedclub)
      this.input += this.selectedclub+',';
    this.selectedclub = '';
  }

  public onSubmit() {
    this.validate(this.input).subscribe(response => {
      this.output = response;
    }, error => console.error(error)
    )
  }

  public validate(name: string):Observable<any> {
    this.headers = this.headers.set('Content-Type', 'application/json');
    
    return this.http.post(this.preUrl, { body: name }, { withCredentials: false, headers: this.headers });
  }
}

interface Numbers {
  value: string;
  viewValue: string;
}


