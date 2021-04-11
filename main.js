const { app, BrowserWindow } = require('electron')
const path = require('path')

let onlineStatusWindow

function createWindow() {

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'yarn dev'),
      //   devTools:false
    },
    title: "Profile | Labótica IFPA Paragominas - PA",
    // autoHideMenuBar:true,
    titleBarStyle: 'customButtonsOnHover'

  })



  win.loadURL('http://localhost:3000');
}
app.on("ready", createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})