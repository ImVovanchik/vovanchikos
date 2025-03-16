const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: true, 
    },
  });

  win.loadFile('index.html');

  win.webContents.on('console-message', (event, level, message, line, sourceId) => {
    const levels = ['LOG', 'WARNING', 'ERROR', 'DEBUG', 'INFO'];
    console.log(`${message}`);
});
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
