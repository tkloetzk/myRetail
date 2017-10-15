# Programming Case Study - Browse/Front Facing App

myRetail is a rapidly growing company with HQ in Richmond, VA and over 200 stores across the east coast.
The company’s annual revenue last year was $5 billion and growing at the rate of 10% year over year.
myRetail sells general merchandise products, including a fast growing fresh grocery segment. The stores
average 80,000 sq. ft. in size and carry around 20,000 products. myRetail wants to provide a multi-channel
experience for its customers online.

myRetail is comparing solution options for the online grocery store. Create a web application that does the
following:
1) Use the provided design docs, desktop.psd and mobile.psd, as general guidelines to create the
user interface.
2) Use the provided json file, item-data.json, to populate the title, images and price.
3) The client side code can be backbone, angular or another framework of your choice. React
(additional library’s such as Redux are welcome). Use node to run the application.
4) Show the add to cart button only if the item is available online, purchasingChannelCode equals
0 or 1.
5) Show the pick up in store only if the item is available instore, purchasingChannelCode equals 0
or 2.
6) Create a carousel to scroll through the images

Test your code - simulate functional testing needs by generating test scripts (automation test cases
preferred).
2. Build your code and package using gulp, grunt or other tools of your choice.
3. Provide approach to deploy code in live environment - continuous delivery flow diagram will
suffice.
4. Store code in a public git repository like GitHub, GitLab, BitBucket, or Visual Studio Team Services
and forward link to Staffing Specialist and Recruiter.


## Software Stack
* [AngularJS ](https://angularjs.org/)
AngularJS was chosen as the backbone for my client side since that's the framework I'm most familiar with
* [Bootstrap](http://getbootstrap.com/)
I used bootstrap to help speed up styling the web page
* [NodeJS](https://nodejs.org/en/)
As mentioned in the case study document, node was used to run the application
* [Protractor](http://www.protractortest.org/#/) and [Jasmine and Karma](https://docs.angularjs.org/guide/unit-testing)
I used protractor framework for my end to end testing in combination with Jasmine and Karma for my unit testing. Protractor runs tests against your application running in a real browser, interacting with it as a user would. Karma is a JavaScript command line tool that uses a web server which loads the application's code and executes the tests. Jasmine is the most popular choice for testing AngularJS applications. It provides functions to help with structuring your tests and also making assertions.
* [Git 2.13.1](https://git-scm.com/)
	- The main version control system that I use to maintain and track my code work. 
	
## Launching the Web Application
* Make sure you have git installed and clone the repository here (myRetail)[https://github.com/tkloetzk/myretail] to your local
```
	git clone https://github.com/tkloetzk/myretail
```
* Make sure you have node installed and then navigate inside the folder that has myRetail code. Run the following command to install the package dependencies
```
	npm update
```
```
	npm install
```
* To start, run ``` npm start ```
This will start up the http-server on localhost:8000

Navigate to (localhost:8000/#!/product)[http://localhost:8000/#!/product] to view the web app

Click Ctrl-C to stop the server.
