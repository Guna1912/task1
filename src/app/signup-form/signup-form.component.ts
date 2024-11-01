import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { filter, from, fromEvent, interval, map, of, range, debounceTime, merge, take, pluck, skip, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit, AfterViewInit{


  submit(form:any){
     console.log(form);
    // form.reset()
     console.log(form.value);   
  }
  show:boolean = false
  a:any = "aravind"
  ngOnInit(): void {
     of(1,2,3).subscribe((response)=>{console.log(response);
     })

     from(["rajesh","naresh","mahesh"]).subscribe((response)=>{console.log(response);
     })

     from("aravind").subscribe((response)=>{console.log(response);
     })

     of(["rajesh","naresh","mahesh"]).subscribe((response)=>{console.log(response);
     })

     range(9,5).subscribe((response)=>{console.log(response);
     })


    //  let obs = interval(1000)
    //  obs.subscribe((response)=>{console.log(response);
    //  })

    let observe1 = interval(1000).pipe(take(4))
    observe1.subscribe(()=>{console.log(this.a);})


    let observe = of(10,20,30).pipe(map((d)=>{return d*10}))
    observe.subscribe((response)=>{console.log(response);
    })

    let a = of(1,2,3).pipe(map(()=>{return "hello"}))
    a.subscribe((response)=>{console.log(response);
    })
   
    of(12,19).pipe(map((data)=>{return data+20})).subscribe((response)=>{console.log(response);
    })
    
    let c = of(20,34).pipe(map((data)=>{return data*10}))
    c.subscribe((response)=>{console.log(response);
    })

    let d = of(25,32,35,46,58).pipe(filter((data)=>{return data > 35}))
    d.subscribe((response)=>{console.log(response);
    })

    let k = of(23,42,34,64).pipe(filter((d)=>{return d < 30}))
    k.subscribe((response)=>{console.log(response);
    })

    let observable1 = of(23,45,67)
    let observable2 = from(["ramu", "ravi"])
    let observable3 = merge(observable2,observable1)

    observable3.subscribe((response)=>{console.log(response);
    })

    let obj = from([{'name':'guna','age':'21','gender':'male'}])
    obj.pipe(pluck('name')).subscribe((response)=>{console.log(response);
    })

    let obj1 = from([{'name':'aravind','marks':'93','grade':'A'}])
    obj1.pipe(skip(10)).subscribe((response)=>{console.log(response);
    })

    let obj2 = of(2,2,3,3,4,2,).pipe(distinctUntilChanged())
    obj2.subscribe((response)=>{console.log(response);
    })
  }

  @ViewChild("enter")name:any

  ngAfterViewInit(): void {
     fromEvent(this.name.nativeElement,'keyup').pipe(debounceTime(5000)).subscribe((response:any)=>{console.log(response.target.value);
     })
  }
  
}
