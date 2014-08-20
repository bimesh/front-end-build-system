# Prerequisites
* [NodeJS](http://nodejs.org/)

# Initial Steps
```
npm install -g grunt-cli
npm install
bower install
grunt
```
# [Grunt for build automation](http://gruntjs.com/)
> The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

We are automating all the things with Grunt. 

# [Bower for client side package management]()
> Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.

We are using bower to manage our client side dependencies.

# [LESS CSS Pre-Processor](http://lesscss.org/)
> Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable.

We are using LESS to enhance our CSS development experience.

# [JSHint for code quality](http://www.jshint.com/docs/)
> JSHint is a program that flags suspicious usage in programs written in JavaScript.

We are using JSHint to ensure consistent coding practices.

# [Grunt WireDep for auto-script including](https://github.com/stephenplusplus/grunt-wiredep)
> Inject Bower packages into your source code with Grunt.

We use wiredep to automatically inject ```<script>``` and ```<link>``` tags based on dependencies declared via Bower.

# [Faster Feedback with LiveReload](http://livereload.com/)
> a happy land where browsers don't need a Refresh button

We use LiveReload (and browser plugin) to enable a quick feedback cycle for ui changes. Save a "watched" file, and your browser will be auto-refreshed with no F5 click required.

# [Angular JS](https://angularjs.org/)
> AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.

Angular is currently the most popular client side application framework. We are using a limited subset of the application framework here.

# [Angular JS Form Validation](https://docs.angularjs.org/guide/forms)
> See the index.html form named ```headerLoginForm```

We are using semantic form markup using HTML5 attributes to perform form validation.

# [Istanbul for Code coverage](http://gotwarlost.github.io/istanbul/)
> Yet another code coverage tool for Javascript
We are using Istanbul for code coverage, and have 100% of our Angular code under test.

# [Decoupled system via pub/sub](http://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
>In software architecture, publish–subscribe is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers. Instead, published messages are characterized into classes, without knowledge of what, if any, subscribers there may be. Similarly, subscribers express interest in one or more classes, and only receive messages that are of interest, without knowledge of what, if any, publishers there are.

We are using pub/sub events to decouple the event creator from the event consumer. We are using unit tests to ensure the event "contract" is consistent.