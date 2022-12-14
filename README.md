# Treetop Challenge 1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Application

It is splitted into three main components: 
- list for showing all the components
- detail view for showing the details of one component 
- form for adding a new treetop component

Also routing was used for navigating between pages, a compoment-factory for mocking the data and a component-service for maintaining the data (get, push,..). Data will be gone however after refreshing the page. 

## How to run it

1) Clone repo and run `npm install` to get all the dependencies. For this project bootstrap as a style library was used.
2) Run `ng serve` and navigate to `http://localhost:4200/`. 
3) Run `ng test` to execute the unit tests

## Demo

https://user-images.githubusercontent.com/65357373/204093590-fc7647e6-6183-4b2f-8e54-3281c0912231.mp4

## Further Improvements:

- option to edit or delete components
- add validation and error messages to form
- unique IDS for components: better ways to do that  
- improve component picker: add clear button, show the description, styling
- add chapters which can contain the components

# Treetop Challenge 2

When adding Treetop rules, the error messages should ideally show up at the same moment the error appears, so the user has to chance to solve it right away. Also Window Pop-Ups should be avoided as it interrupts the workflow.  

Example: 

![grafik](https://user-images.githubusercontent.com/65357373/203865317-2fbb7dc3-6e58-4dbd-8659-a2e630364a32.png)







