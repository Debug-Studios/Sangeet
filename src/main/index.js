import { app, BrowserWindow, Menu, Tray, ipcMain } from 'electron'; // eslint-disable-line
import path from 'path';
import { listMusicFiles, deleteBrokenRecords } from './db/dbSync';
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  // prettier-ignore
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\') // eslint-disable-line
}

let mainWindow;
let tray = null;
const winURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9080'
    : `file://${__dirname}/index.html`;

// Main Menu
const mainMenuTemplate = [{}];

// MacOS requires the menu item to be the second object.
// This inserts an empty object to the start of mainMenuTemplate
if (process.platform === 'darwin') {
  mainMenuTemplate.unshift({});
}

async function createWindow() {
  /**
   * Initial window options
   */

  let isMinimized = false;
  let quitCompletely = false;

  mainWindow = new BrowserWindow({
    height: 768,
    useContentSize: true,
    width: 1366,
  });

  tray = new Tray(path.join(__static, '/logo.png'));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: () => {
        mainWindow.show();
      },
    },
    {
      label: 'Quit',
      click: () => {
        quitCompletely = true;
        app.quit();
      },
    },
  ]);
  tray.setToolTip('Sangeet');
  tray.setContextMenu(contextMenu);

  tray.on('click', () => {
    if (isMinimized) {
      isMinimized = false;
      mainWindow.show();
    } else {
      isMinimized = true;
      mainWindow.hide();
    }
  });

  mainWindow.loadURL(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('minimize', (event) => {
    event.preventDefault();
    mainWindow.hide();
  });

  mainWindow.on('show', () => {
    tray.setHighlightMode('always');
  });

  mainWindow.on('close', (event) => {
    if (!quitCompletely) {
      event.preventDefault();
      mainWindow.hide();
      isMinimized = true;
    }
  });

  Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate));

  // Sync Database
  ipcMain.on('refresh-database', async (event) => {
    event.sender.send('show-notification-loading', 'Refreshing your library...');
    await deleteBrokenRecords();
    await listMusicFiles();
    // event.sender.send('show-notification-success', 'Library synced');
    event.sender.send('hide-notification-loading');
    event.sender.send('sync-db');
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
