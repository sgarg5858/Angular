# Angular
*************************************************************************************************************************
# Starting Angular App

ng new projectName

Adding bootStrap to project

npm install --save bootstrap@4

In angular.json  in styles add

node_modules\bootstrap\dist\css\bootstrap.min.css

1. When Angular app starts the first file which is executed is main.ts.

2. In main.ts file we have this line.

   a). platformBrowserDynamic().bootstrapModule(AppModule)
    
3. This refers to AppModule and if we look at AppModule.we have

     a). bootstrap: [AppComponent]
      
     b). It tells angular to look at App Component ! and remember the selectors of all components present in bootstrap as we might need
      
      these selecters when we load index.html selectors are in.ts file.



**************************************************************************************************************************
# Components:

Angular uses components to build web pages and modules to bundle different pieces.

AppModule basically gives Angular gives the information which features my app should have and use!

AppModule has @NgModule Decorator  and bootstrap,providers,declarations and imports!
  
  a) bootstrap  tells angular of which components should it be aware of when whole application starts! meaning when we load index.html!
  
  b) Declaration contains all the components in this module !

a) ng generate component componentName

1. We can use compnents as custom tags!

<app-root></app-root>

2. We can also use components as Classes for that we have put . in front of selector in .ts file

selector: '.app-root'

<div class="app-root"></div>

Both will work same!

***************************************************************************************************************************
# String Interpolation:

String Interpolation has to return string in the end!

Suppose there is variable in .ts file and method which return string or number to render these things on html we can use Interpolation.

  1.public name="Sanjay";

  2. greetUser()  {   return "Hello"+" "+this.name;   }
  
  We can use Interpolation Here
  
 <h3 class="text-center text-success">Hello {{name}}</h3>
 
 <h3 class="text-center text-success">{{greetUser()}}</h3>
 
 ***************************************************************************************************************************
 # Property Binding:
  
  Before we dive into Property Binding, It is imp to note that ATTRIBUTE AND PROPERTY are not the same.
  
  1. Attributes are defined by Html Element.
  
  2. Properties are defined by Document Object Model.
  
  3. Attributes initailize DOM properties and then they are done.Attributes values cannot changes once they are done.
  
  4. However PROPERTIES value can change.
  
  5. Property Binding at first glance seems to like html attribute binding but in actual it is Dom Binding
  
  6. We can also perform Property Binding Using Interpolation then why do we need Property Binding 
  
  Because Only Limited to Strings therefore we need Property Binding.
  
  For Example:
  
  In .ts file we have   public  isDisabled=true
  
   <input [disabled]="isDisabled" type="text" id="{{myId}}" value="Sanjay98">
   
  <input bind-disabled="isDisabled" type="text" id="{{myId}}" value="Sanjay98">
  
   Here in Above Example Interpolation doesn't work.
   
************************************************************************************************************************
   # Class Binding:
   
   [class]=""               class=""
   
   We cannot use both properties on the same html element we can only use one or other
    
    public centerSuccess=["text-center","text-success"];
    
   <h3 [class]="centerSuccess" >{{greetUser()}}</h3>
   
****************************************************************************************************************************
# Style Binding:

<h4 [style.color]="isSuccess? 'green':'red'">Working</h4>

In .ts file

public isSuccess=true;

****************************************************************************************************************************
# Event Binding:

1. Alright! we had a look on data/class binding where data flow was from Component Class(.ts) to Template (.html)

2. But what about when User Interacts and we have to update Information In component Class(.ts) here the flow changes from

(.html) to (.ts file)

Event Binding is helpful in capturing events ! 

# Referencing Template Variables: Using #

 <input #userName id="username" type="text" class="form-control">
 
  <button (click)="onSubmit(userName.value,passWord.value)"></button>
  
# (input)
 
 Offered by <input> if we want to execute something when user types anything is this field
 
  (input)="onUpdateServerName($event)"
  
  here using $event we can access to data related to event occoured. 
 
# (click)  
 
 offered by <button> if we want to execute something on clicking the button
  
****************************************************************************************************************************
# Two Way Binding:

For two way binding to work, we need to enable the ngModel directive work!

This is done by adding FormsModule to imports[] in app.modulte.ts .

[(ngModel)] isequivalent to (input) + interpolation

(input) reflects every change interpolation gets the values.

When we are working with forms it is essential that both are template and components are in sync,Otherwise data might not be consistent.

 <input [(ngModel)]="username" name="username" type="text" class="form-control"> {{username}}
 
 In .ts file we have public username
 
 and we have to import FormsModule in app.module.ts and also in declarations !
 
 # Local Template Reference Variables:
 
 We can also local template reference vraibles to send data to typescipt file using button 
 
 # ng-Content  
 
 By default any data in your custom component tag will be lost.
 
 But if want display data which is in b/w opening and closing tag of custom component then in the template of custom component
 
 we have to specify 
 
 <ng-content></ng-content>
 
 # @ViewChild()
 
 # @ContentChild()
 
 
 
 **************************************************************************************************************************
 Data Binding Accross Components:
 
 By default properties in angular are only bindable in same component.
 
 If we want to bind to some property which is present in child component.ts to parent.html then
 
 Add @Input() decorator infront of property in child and use general binding in parent it will bind!
 
 *****************************************************************************************************************************
 # Component-Lifecycle
 
 # ngOnInit
 
   It is a life cycle hook.When angular instantaites the component it goes through different phases of creation.
   
   It will actually give us some chance to hook into these phases and execute some code.
   
   We can hook into these phases by implementing some methods if they are present
   
1. ngOnChanges -> Called after bound input property value changes.

2. ngOnInit  -> Called once the component is intialized.ngOnInit will run after the constructor.

3.ngDoCheck -> Called during every change detection run. Change Detection runs by which angular knows if there is any chnge happened.

Change Detection runs even if we press button.

4. ngAfterViewInit ->Called after component View and Child's view has been initialized.

5. ngOnDestroy: Called after once the component is about to be destroyed. suppose you but ngIf ='false' on component and it will call

this method.
   
 
 
 *****************************************************************************************************************************
# Structural Directives:

Directives are instructions in the DOM.

1.   ngIf      2.  ngSwitch  3. ngFor

First two directives are used when we want to conditionally render components.

ngFor Directive is used for rendering of list of Html Elements.

If directive get's false then it will the html elements from DOM.

1. ngIf

https://github.com/sgarg5858/Angular/blob/master/ngIf.html

2. ngSwitch:

https://github.com/sgarg5858/Angular/blob/master/ngSwitch.html

3. ngFor:

https://github.com/sgarg5858/Angular/blob/master/ngFor.html

4. ngStyle:
 
*******************************************************************************************************************************
# Component Interaction

1. When we load one component into another then we are doing Nested Components. Th component in which we are loading the component

is called Parent and other one is called Child.

2. Child can accept data from Parent using @input decorator and send data to Parent using @Output Decorator

1. First let's send data from Parent o Child and we will render it to template using Interpolation.

https://github.com/sgarg5858/Angular/blob/master/ParentToChild.html

2. Now we will send data from child to Parent and let's render it to template.

  a). In child Template we do not have Parent Selector unlike in Parent template we have Child Selector.
  
  b) So the way we send data to Parent from child is through events.
  
https://github.com/sgarg5858/Angular/blob/master/ParentToChild.html  


**********************************************************************************************************************************
# Service Dependency-Injection

1. Define Service Class    ng generate service 

2. Register It with Injecter register it with app.module.ts so that any component with in module can use it. in (providers)

3. Define Dependency and we know dependency is define in Constructor. and assign values in ngOnInit()

  a)ngOnInit() gets called when component is loaded.

4. @Injectable at Service class in necessary when service class also has dependency from another class.

**************************************************************************************************************************************
# Http and Observables

1. Observables->A sequence of items that arrive asyncronously over time.

2. import {HttpClientModule} from '@angular/common/http'; in app.module.ts; and add in imports!

https://github.com/sgarg5858/Angular/blob/master/service.ts

***************************************************************************************************************************************

