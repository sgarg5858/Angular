1.Firstly suppose we have 2 components home and user and in home we have a subscription from observation which is not handeled by angular

then even after moving from home to user we will continue to get the data from subscription in home component which might cause memory 

leaks so it is preffered to unsubscribe the subscription when we are moving from component or component is getting destroyed.

2. params is an observable which is managed by angular so for this angular will take care of it. but we cal also unsubscribe for this

manually.

export class HomeComponent implements OnInit,OnDestroy {

  private firstObsSubscription:Subscription;
  constructor() { }

  ngOnInit() {
  this.firstObsSubscription=  interval(1000).subscribe(
      count =>{
        console.log(count);
      }

    )
  }
  ngOnDestroy()
  {
    this.firstObsSubscription.unsubscribe();
  }



}
