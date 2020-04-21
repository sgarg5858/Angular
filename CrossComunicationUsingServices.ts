First Define a Service

1. Then Define EventEmitter in Service

statusUpdated=new EventEmitter<string>();

2. Now we want to emit event from component a

 this.accountService.statusUpdated.emit(status);
 
3. Subscribe to recieve data in component B

constructor(private accountService:AccountService){
    this.accountService.statusUpdated.subscribe(
      (status:string)=>alert("New Status: "+ status)
    );
  }
