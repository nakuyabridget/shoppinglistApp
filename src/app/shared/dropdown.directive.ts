import {Directive, HostListener, HostBinding} from '@angular/core';
@Directive ({
    // '[]' is an attribute selector
    selector : '[appDropdown]'
})
export class DropDownDirective {
    isOpen = false;
    // open is css class we are binding to our class isOpen, that allows for the opening up of dropdown menus that were not opening before.
    @HostBinding ('class.open') isOpen = false;

    // using the Hostlistener decorator to listen to a click
    @HostListener ('click') toggleOpen() {
        this.isOpen = !this.isOpen;

    }

// tslint:disable-next-line:eofline
}