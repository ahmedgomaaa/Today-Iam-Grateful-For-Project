import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import {  VERSION, ViewChild, ElementRef } from "@angular/core";
import texts from "../../assets/data.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public text:{text:string}[] = texts;


  public textSelector:number = 0;
  public tmpselector:number = 0;

  show =false;
  shown:Array<number> = [];
  availableToShow:Array<number> = [ 0, 1, 2 , 3];


  constructor() { }
  buttonDisabled: boolean = false;

  ngOnInit(): void {
    this.buttonDisabled = false;

  }



  ShowAnswer() {
    this.show = true;
    console.log(this.textSelector);
    this.buttonDisabled = true;
    
  }


  
  Another(){ 

    if (this.textSelector === 4  ) {
      this.textSelector = 1;
    }
    else {
      
    console.log( "before: "+  this.textSelector);
    this.textSelector++;
    
    if (this.textSelector === 4  ) {
      this.textSelector = 1;
    } 
    console.log( " after  :  "  + this.textSelector);

    }


    


    // this.tmpselector = ( Math.floor(Math.random() * 10) % 4)  ;
    //     if ( this.shown.includes(this.tmpselector)  ){
    //       console.log("already shown" + this.tmpselector);
    //       this.Another();
    //     } 
    //     else {
    //       this.shown.push(this.tmpselector);
    //       this.textSelector = this.tmpselector;
    //     }
  }   
 }

