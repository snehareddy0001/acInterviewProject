# AIRCRAFT-INTERVIEW-PROJECT
## The Problem

    A software subsystem of an air-traffic control system is defined to manage a queue of aircraft (AC) in an airport. The aircraft queue is managed by a process which responds to three types of requests:
   
	   - system boot used to start the system.
	   
	   - enqueue aircraft used to insert a new AC into the system.
	   
	   - dequeue aircraft used to remove an AC from the system.
   
   ### AC’s have the following properties:
   
	   AC type: Passenger or Cargo
	   
	   AC size: Small or Large
   
   ### The process which manages the queue of AC’s satisfies the following:
   
      There is no limit on the number of AC’s it can manage (could be tens of thousands)
   
   ### Dequeue aircraft requests result in selection of one AC for removal such that:
   
	   Passenger AC’s have removal precedence over Cargo AC’s
	   
	   Large AC’s of a given type have removal precedence over Small AC’s of the same type.
	   
	   Earlier enqueued AC’s of a given type and size have precedence over later enqueued AC’s of the same type and size.

## Installations and Project Setup

    You must have bower, node.js and its package manager (npm) installed.  You can get them from -

       NodeJS : https://nodejs.org/
       npm : https://www.npmjs.com/
       Bower : http://bower.io/

	### Project Setup
	
		$ cd your/project/path
		$ git clone https://github.com/snehareddy0001/acInterviewProject.git
		$ cd acInterviewProject
		$ npm install
		  During this step, if you notice that any of the dependencies were not installed, please run,
		  npm install <dependencyName>
		  to install the missing dependencies.
		$ bower install
	
	    You should find that you have two new folders in your project.

			* `node_modules` - contains the npm packages for the tools we need
			* `app/bower_components` - contains the angular framework files
	

## Build Application

     Run `grunt` for building and `grunt serve` for preview.

		$ grunt - building
		$ grunt serve - application preview


## Testing

     Unit Tests are written for this application using Karma.

	### Running Unit Tests

	     Run 'grunt test' to run unit tests with Karma.

	         $ grunt test