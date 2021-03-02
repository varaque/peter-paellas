import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  modal_activated: boolean

  constructor() {
    this.modal_activated = false
  }

  ngOnInit(): void {
  }

  toggleModal() {
    this.modal_activated ? this.modal_activated = false : this.modal_activated = true;
  }

}
