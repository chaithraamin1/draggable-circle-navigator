import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    const nav: any = document.querySelector("nav"),
      toggleBtn: any = nav.querySelector(".toggle-btn");
    toggleBtn.addEventListener("click", () => {
      debugger
      nav.classList.toggle("open");
    })
    nav.addEventListener("mousedown", () => {
      nav.addEventListener("mousemove", onDrag);
    })
    nav.addEventListener("mouseup", () => {
      nav.addEventListener("mousemove", onDrag);
    })
    nav.addEventListener("mouseleave", () => {
      nav.addEventListener("mousemove", onDrag);  
    })
    function onDrag(movementY:any){
      const navstyle: any = window.getComputedStyle(nav),
        navTop = parseInt(navstyle.top),
        navHeight = parseInt(navstyle.height),
        windHeight = window.innerHeight;

        // nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
      
      if(navTop > windHeight - navHeight){
        nav.style.top=`${windHeight - navHeight}px`;

      }

     

      console.log(navTop)
    }
  }
}
