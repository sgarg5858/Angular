 export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>('localhost');
    
  }
}

***************************************************

  public employees=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  
    this.employeeService.getEmployees()
    
    .subscribe(data => this.employees=data);
    
  }
