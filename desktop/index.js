const { app, BrowserWindow } = require('electron')

//confirguración de escritorio y muy importante lo agregamos a app.on()

let appWindow

//creamos una ventana
function createWindow () {
    appWindow = new BrowserWindow({
        width:1200,
        height:800,
        minWidth:800,
        minHeight:600,
        center:true,
        show:false,
        icon: 'icon.png'
    })

    //cunado la aplicación se cierra, eliminamos lo que estemos usando de memoria
    appWindow.on('closed', () => {
        appWindow = null
    })

    //cargar HTML
    appWindow.loadFile('./index.html')


    //cuando la app esté lista, mostrar la ventana
    appWindow.once('ready-to-show', () => {
        appWindow.show()
    } )


  }
  app.on('ready', createWindow)