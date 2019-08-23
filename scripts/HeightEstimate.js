//feature 1
    // Start: code for device orientation

    let deviceAbsolute = null;
    // try-catch: exception handling
    try
    {
        // initialising object for device orientation
        deviceAbsolute = new AbsoluteOrientationSensor({ frequency: 10 });

        //if sensor is available but there is problem in using it
        deviceAbsolute.addEventListener('error', event => {
        // Handle runtime errors.
        if (event.error.name === 'NotAllowedError')
        {
          errorRef.innerText ="Permission to access sensor was denied.";
        }
        else if (event.error.name === 'NotReadableError' )
        {
          errorRef.innerText = "Cannot connect to the sensor.";
        }});
        // when sensor has a reading, call the function
        deviceAbsolute.addEventListener('reading', () => reloadOrientationValues(deviceAbsolute));

        //start the sensor
        deviceAbsolute.start();
    }
    catch (error)
    {
    // Handle construction errors.
      let errorText = "";
      if (error.name === 'SecurityError')
      {
        errorText = "Sensor construction was blocked by the Feature Policy.";
      }
      else if (error.name === 'ReferenceError')
      {
        errorText =" Sensor is not supported by the User Agent.";
      }
      else
      {
        errorText = "Sensor not supported";
      }
      errorRef.innerText = errorText;
    }

    let data = 0;
    // function to print value on the webpage
    function reloadOrientationValues(deviceAbsolute)
    {
	let x = deviceAbsolute.quaternion[0];
	let y = deviceAbsolute.quaternion[1];
	let z = deviceAbsolute.quaternion[2];
	let w = deviceAbsolute.quaternion[3];
	data = Math.atan2(2*(w*x + y*z), 1 - 2*(Math.pow(x,2)+Math.pow(y,2))); //beta
	//console.log(data);
    document.getElementById("bValue").innerText = average(data[0]*(180/Math.PI));
    document.getElementById("mActivated").innerText = deviceAbsolute.activated;
    document.getElementById("mHasReading").innerText = deviceAbsolute.hasReading;
    }
    // end: code for device orientation

//feature 2
// global variale
let array = [];
// create function for the data
function average(data)
{
    let sumOfNumbers = 0;
    array.push(data);
    if(array.length < 25)
    {
      for(let i=0;i<array.length;i++)
      {
        sumOfNumbers += array[i];
      }
      let average = sumOfNumbers/array.length;
      return roundAverage = average.toFixed(2);
    }
    else if(array.length = 25)
    {
      for(let i=0;i<array.length;i++)
      {
        sumOfNumbers += array[i];
      }
      let average = sumOfNumbers/array.length;
      array.shift();
      return roundAverage = average.toFixed(2);
    }
}

//feature 3
let heightInput = "";
function cameraHeight()
    {
        heightInput = prompt("Enter Height:");
        while(isNaN(heightInput) || heightInput<0)
            {
            heightInput = prompt("Invalid Height pls press new input:");
            }
        document.getElementById("heightOfCamera").innerHTML= heightInput;
    }

//feature 4
let apexAngle

function measureApexAngle()
    {
        let roundAverage = y.toFixed(2);
        document.getElementById("baseAngle")= apexAngle;
        return apexAngle
    }
