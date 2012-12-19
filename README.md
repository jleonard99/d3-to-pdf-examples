#d3-to-pdf-examples

Simple makefile workflow examples using D3.

# Files needed

These examples assume that you've install R-tools and Phantom JS.

* http://cran.r-project.org/bin/windows/Rtools/

* http://phantomjs.org/

I also recommend that you install Make 3.81 rather than Make 3.79 that comes with r-tools.

* http://sourceforge.net/projects/gnuwin32/files/make/3.81/


# Instructions

* Install the software above
* download the repo
* Then -

    make all

This target will create bullet.png.  

* For fun, edit the `bullet.json` file to change the data.  A [R JSON package](http://cran.r-project.org/web/packages/rjson/rjson.pdf) for converting R-data frames to JSON files is available.

# What is happening?

PhantomJS is running `rasterize.js` to render the web page `bullet.html' to `bullet.png'.  This technique allows us to leverage D3.JS and other scripting libraries for the web into our R-Knitr documents.

