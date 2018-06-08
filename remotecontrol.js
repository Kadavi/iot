const robot = require('robotjs');
const deepstream = require('deepstream.io-client-js');
const ds = deepstream('localhost:6020');
ds.login();

const movement = ds.record.getRecord('mouse/movement');
const press = ds.record.getRecord('mouse/press');

var screenSize = robot.getScreenSize();

movement.subscribe(data => {
	console.log(data.x * screenSize.width, data.y * screenSize.height);
	robot.moveMouse(data.x * screenSize.width, data.y * screenSize.height);
});

press.subscribe(data => {
	console.log(data.status, data.button);
	robot.mouseToggle(data.status, data.button);
});