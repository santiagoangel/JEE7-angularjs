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
* mvn wildfly:run  #### lauch jboss wildfly 8 jee7 application server(in port 8080) #### (or run in your IDE)
* npm install
* bower install
* grunt serve
 

##Deploy

* mvn clean install
* mvn wildfly:deploy ###optional






