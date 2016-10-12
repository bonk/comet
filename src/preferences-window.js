const electron = require('electron')
const {BrowserWindow} = require('electron')

var win = null

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: true
    })
    win.loadURL(`file://${__dirname}/preferences.html`)

    // Emitted when the window is closed.
    win.on('closed', () => {
        win = null
    })
    return win
}

function closeWindow () {
    win.close()
}

module.exports = {
    create: createWindow,
    close: closeWindow
}