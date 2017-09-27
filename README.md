# Sorts

## What is this project?

In this repo I've made some basic sorting algorithms. So far these are just in Javascript for my own edification but I plan to add more languages as I continue. Right now there are:

* [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort)
* [Merge sort](https://en.wikipedia.org/wiki/Merge_sort)
* [Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort)
* [Selection sort](https://en.wikipedia.org/wiki/Selection_sort)

This is the way I've chosen to use up some of my free time so that it feels like I'm being productive even though I'm just sorting things.

Each program by default will generate a 10 integer list of random numbers from 1-100 and sort that list. These values can be altered using flags at run time to generate a different length list or another range of values.

---

## Usage

To run these files you will need one of the following depending on the language you choose:

---

### Running a JavaScript file:

Built with [node.js](https://nodejs.org/en/)

    node <pathToFile>

---

### Running a Python file:

Built with [python3](https://www.python.org) 
(python2.7 should work as well, but I have been testing with python3)

To run one of the sorts in python you have two options:

Run the python file as a plain python file

    python3 <pathToFile>

or you can enable execution of the python file and run it that way (saves on typing in the long run)

    chmod +x <pathToFile>
    ./<pathToFile>

---
## Changelog
* 2017-Sep-26: Separated redundant code into helper module, fixed js/JS path conflict, added python versions of insert and sorting helper module
* 2017-Sep-10: Added Selection sort, removed flags
* 2017-Sep-01: Initial codebase, 3 basic sorts, light customization options