

function init(){
document.addEventListener("deviceready",onDeviceReady,false);
}
var watcher = null;

function onDeviceReady(){
	
var options = {frequency:500};
watcher = navigator.accelerometer.watchAcceleration(onSuccess,onError,options);
}

function onSuccess(acceleration){
	var element = document.getElementById('accel');
	
	element.innerHTML = 'Acceleration X: ' + acceleration.x         + '\n' +
                        'Acceleration Y: ' + acceleration.y         + '\n' +
                        'Acceleration Z: ' + acceleration.z         + '\n' +
                        'Timestamp: '      +  new Date(acceleration.timestamp);
}

function onError(error){
alert('onError!');
}

function stopWatch(){
	if(watcher != null){
		navigator.accelerometer.clearWatch(watcher);
		watcher = null;
	}
	
}