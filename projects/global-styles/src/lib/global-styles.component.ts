import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-global-styles',
  template: `
    <p>
      global-styles works!
    </p>
  `,
  styles: []
})
export class GlobalStylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
