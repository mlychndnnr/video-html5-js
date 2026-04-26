var myPlayer = document.getElementById('myPlayer');

const options = {
  info: {
    beacon: 'xxxxxxxxxxx',
    licenseKey: 'xxxxxxxxxxx',
    applicationID: 'xxxxxxxxxxxx',
  },
};

const tracker = new Html5Tracker(myPlayer, options);

setTimeout(()=>{
  console.log("timer called")
}, 60000)