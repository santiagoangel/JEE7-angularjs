JEE7-angularjs
==============

JEE7 web application with REST WS for CRUD operations in the backend and AngularJS in the frontend.


##Prerequisites for frontend development using Node npm, Yeoman, grunt and bower:

###Fedora 20

* yum install npm
* npm install -g yo
* npm install -g generator-angular
* npm install -g phantomjs
* npm install -g imagemin



##run in Development mode
* npm install grunt-connect-proxy --save-dev
* mvn wildfly:run  #### lauch JBoss Wildfly 8 JEE7 application server(in port 8080) #### (or run the web application in your IDE)
* npm install
* bower install
* grunt serve
 

##Deploy

* mvn clean install
* mvn wildfly:deploy ###optional


##Live Demo

http://jee7-santiagoangel.rhcloud.com/jee7angularjs/






