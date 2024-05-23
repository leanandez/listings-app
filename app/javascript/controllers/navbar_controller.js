import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "menuMobile" ];
  // connect() {  
  // }
  // handleMenu(event){
  //   // console.log('click', event)
  //   this.menuMobileTarget.classList.toggle('hidden')
  // }
  handleMenu() {
    this.menuMobileTarget.classList.toggle("hidden");
  }
}
