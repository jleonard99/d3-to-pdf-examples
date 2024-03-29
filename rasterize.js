var page = require('webpage').create(),
    address, output, size;


if (phantom.args.length < 2 || phantom.args.length > 3) {
    console.log('Usage: rasterize.js URL filename');
    phantom.exit();
} else {
    address = phantom.args[0];
    output = phantom.args[1];
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
        } else {
            window.setTimeout(function () {
                page.render(output);
				var results = page.evaluate(function(){ return document.getElementById('chart').innerHTML })
//				console.log(results);
                phantom.exit();
            }, 200);
        }
    });
}
