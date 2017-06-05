# CRUD-Application-Angular
This is a basic CRUD application using AngularJS

### CRUD Application
A CRUD application is an application which does the 4 most basic operations on data being:
- C - Create
- R - Read
- U - Update
- D - Delete

### The App:
All the above mentioned operations can be performed in the application, the home page gives 2 buttons `Create` and `Display` which routes to the respective pages.

Create gives you a form to enter the details and the app redirects to display page after the addition where you are provided with two actions `Edit` and `Delete`. Delete prompts you for confirmation, upon which acts accordingly and edit redirects you to a form where you are to change the details as needed.

On editing successfully you are redirected back to the display page which lists all the available records. You can abort Edit operation by redirecting to the home by clicking the header text.

### Instructions:
```
bower install --save
browser-sync start --server
```
