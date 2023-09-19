import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DS Catalog';

  ngOnInit() {
    // console.log('ngOnInit AppComponent');
  }

  ngDoCheck() {
    // console.log('ngDoCheck AppComponent');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit AppComponent');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked AppComponent');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit AppComponent');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked AppComponent');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy AppComponent');
  }

  ngOnChanges() {
    // console.log('ngOnChanges AppComponent');
  }

  onActivate() {
    // console.log('onActivate AppComponent');
  }

  onDeactivate() {
    // console.log('onDeactivate AppComponent');
  }

  onInit() {
    // console.log('onInit AppComponent');
  }
}
