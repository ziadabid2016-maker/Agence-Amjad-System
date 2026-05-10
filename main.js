const { app, BrowserWindow } = require('electron');
function createWindow () {
  const win = new BrowserWindow({
    width: 1200, height: 850,
    backgroundColor: '#0A0A0A',
    webPreferences: { nodeIntegration: true }
  });
  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}
app.whenReady().then(createWindow);
