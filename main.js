const { app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    // create brouser window
    win = new BrowserWindow({
       width: 1180,
       height: 100,
       backgroundColor: '#ffffff'
    });

    win.loadURL(`file://${__dirname}/dist/conlimit/index.html`);

    //// uncoment below to open the DevTools
   // win.webContents.openDevTools();

    // Event when the window os closed
    win.on('closed', function () {
        win = null;
    });
}

// create window on electron initialization
app.on('ready', createWindow);

app.on('window-all-closed', function () {

    // On macOS specific close process
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', function () {
    // macOS cpecific close process
    if (win === null){
        createWindow();
    }
});
