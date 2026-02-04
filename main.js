 

const { app, BrowserWindow } = require("electron"); 

const path = require("path"); 

 

let win; 

 

function createWindow() { 

 

  win = new BrowserWindow({ 

    width: 1400, 

    height: 900, 

    minWidth: 1000, 

    minHeight: 700, 

    backgroundColor: "#0b0f1a", 

 

    webPreferences: { 

      nodeIntegration: true, 

      contextIsolation: false, 

      webviewTag: true 

    } 

  }); 

 

  // Load your OS 

  win.loadFile("index.html"); 

 

  // Prevent DevTools opening automatically 

  win.webContents.on("devtools-opened", () => { 

    win.webContents.closeDevTools(); 

  }); 

} 

 

app.whenReady().then(() => { 

  createWindow(); 

 

  app.on("activate", () => { 

    if (BrowserWindow.getAllWindows().length === 0) { 

      createWindow(); 

    } 

  }); 

}); 

 

app.on("window-all-closed", () => { 

  if (process.platform !== "darwin") { 

    app.quit(); 

  } 

}); 
