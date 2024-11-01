import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRngif]'
})
export class RngifDirective {

  constructor(private view:TemplateRef<any>, private container:ViewContainerRef) { 
    
    
  }

  @Input() set appRngif(condition:boolean){
    if(!condition){
      this.container.createEmbeddedView(this.view)
    }
    else{
      this.container.clear()
    }
  }

}
