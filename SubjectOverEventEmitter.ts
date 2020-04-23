<button class="btn btn-primary" (click)="onActivate()">Activate!</button>
<button class="btn btn-primary" (click)="onDeactivate()">Deactivate!</button>

 onActivate()
  {
    this.userService.activatedEmittor.next(true);    //next instead of emit
  }
  onDeactivate()
  {
    this.userService.activatedEmittor.next(false);
  }


In service.ts

activatedEmittor=new Subject<boolean>();


export class AppComponent implements OnInit,OnDestroy {
  constructor(private userService:UserService) {}
  private subscription1:Subscription;
  userActivated=false;
  ngOnInit(
  ) {
   this.subscription1= this.userService.activatedEmittor.subscribe(
      (didActivate)=>{
        this.userActivated=didActivate;
      }
    )
  }
  ngOnDestroy(){
    this.subscription1.unsubscribe();
  }
  }
