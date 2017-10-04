# Sorts

## What is this project?

In this repo I've made some basic sorting algorithms. So far these are just in Javascript for my own edification but I plan to add more languages as I continue. Right now there are:

* [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort)
* [Merge sort](https://en.wikipedia.org/wiki/Merge_sort)
* [Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort)
* [Selection sort](https://en.wikipedia.org/wiki/Selection_sort)

The sorts are currently available in:

* [JavaScript](https://nodejs.org/en/)
* [Python](https://www.python.org) 
* [Ruby](https://www.ruby-lang.org)

This is the way I've chosen to use up some of my free time so that it feels like I'm being productive even though I'm just sorting things.

Each program by default will generate a 10 integer list of random numbers from 1-100 and sort that list. I plan to make these values variable using flags at run-time.

---

## Usage

### Running a JavaScript file:

From the command line if you have node.js installed, simply type:

    node <pathToFile>.js

### Running a Python file:

To run one of the sorts in python you have two options:

Run the python file as a plain python file

    python3 <pathToFile>.py

Or you can enable execution of the python file if you are on a unix system and run it that way (saves on typing in the long run if you plan to fiddle with the sorts):

    chmod +x <pathToFile>
    ./<pathToFile>.py

### Running a Ruby file:

From the command line if you have Ruby installed, simply type:

    ruby <pathToFile>.rb

---
## Changelog
* 2017-Oct-03: Added Ruby processing module, insertion sort, and relevant documentation

* 2017-Sep-27: Added merge, bubble, and select python sorts & moved comparison and access counters to process.py

* 2017-Sep-26: Separated redundant code into helper module, fixed js/JS path conflict, added python versions of insert and sorting helper module

* 2017-Sep-10: Added Selection sort, removed flags

* 2017-Sep-01: Initial codebase, 3 basic sorts, light customization options