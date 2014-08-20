# Prerequisites
* [NodeJS](http://nodejs.org/)

# Initial Steps
```
npm install -g grunt-cli
npm install
bower install
grunt
```

# [LESS CSS Pre-Processor](http://lesscss.org/)
> Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable.

# [Angular JS](https://angularjs.org/)
> AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.

# [Angular JS Form Validation](https://docs.angularjs.org/guide/forms)
> See the index.html form named ```headerLoginForm```

# [Istanbul for Code coverage](http://gotwarlost.github.io/istanbul/)
We are using Istanbul for code coverage, and have 100% of our Angular code under test.

# [Decoupled system via pub/sub](http://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
We are using pub/sub events to decouple the event creator from the event consumer. We are using unit tests to ensure the event "contract" is consistent.