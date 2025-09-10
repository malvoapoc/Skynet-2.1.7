const Promise = require('bluebird'),
  {
    Menu,
    Tray,
    app,
    BrowserWindow,
    shell,
    nativeImage,
    dialog,
  } = require('electron'),
  electron = require('electron'),
  ipc = require('electron').ipcMain,
  cps = require('child_process'),
  process = require('process'),
  { spawn } = require('child_process'),
  fs = require('fs'),
  fse = require('fs-extra'),
  path = require('path'),
  http = require('http'),
  https = require('https')
var request = require('request'),
  qs = require('querystring'),
  sudo = require('sudo-prompt')
const { autoUpdater } = require('electron-updater'),
  { isMac, isWin, isLinux, isDev, isNoPack } = require('./env.js'),
  { net } = require('electron'),
  util = require('util'),
  defaultGateway = require('default-gateway'),
  { ensureFile, ensureDir } = require('fs-extra'),
  os = require('os'),
  tracer = require('tracer')
let _isQuiting = false,
  mainWindow,
  coreServer,
  coreServerPID,
  tray,
  forceUpdate = false
autoUpdater.autoDownload = false
let message = {
    error: '检查更新失败',
    checking: '正在检查更新',
    updateAva: '检测到新版本\uFF0C系统将自动下载并更新',
    updateNotAva: '当前已是最新版\uFF0C无需更新',
    updateEnd: '应用已完成更新\uFF0C下次启动将加载最新版本',
    updateLocal: '开发环境,不支持更新',
  },
  __libname = path.dirname(path.dirname(path.dirname(__dirname)))
if (isDev) {
  __libname = path.dirname(path.dirname(__dirname))
} else {
  isDev && isWin && (__libname = __dirname)
}
isNoPack && (__libname = path.dirname(path.dirname(__dirname)))
var __static = path.join(__libname, 'extra', 'static')
const _appname = 'xigua',
  appConfigDir = path.join(app.getPath('appData'), _appname),
  logPath = path.join(appConfigDir, 'app_client.log'),
  confPath = path.join(os.homedir(), '.config'),
  dirPath = path.join(confPath, _appname),
  geoipPath = path.join(appConfigDir, 'geoip.db'),
  geositePath = path.join(appConfigDir, 'geosite.db'),
  configPath = path.join(appConfigDir, 'config.json'),
  configPath2 = path.join(__libname, 'extra/config.json'),
  libcorePath = path.join(appConfigDir, 'libcore.exe'),
  sysproxyPath = path.join(appConfigDir, 'sysproxy.exe'),
  userConfigDir = app.getPath('userData')
var tun2socksPath = path.join(__libname, 'extra/libcore.exe'),
  tun2socksToolPath = path.resolve(userConfigDir, 'libcore.exe')
let winToolPath
isWin && (winToolPath = path.join(__libname, '/extra/sysproxy.exe'))
var userKey = '',
  serverLoad = '',
  serverConnected = '',
  serverMode = '',
  isModeBeforeSleep,
  isRouteBeforeSleep,
  noHelper = null,
  closeFlag = false,
  intervalId = null
function init() {
  logger.info('app init.')
  const _0x232031 = [
    {
      label: 'Application',
      submenu: [
        {
          label: 'About',
          selector: 'orderFrontStandardAboutPanel:',
        },
        { type: 'separator' },
      ],
    },
    {
      label: 'edit',
      submenu: [
        {
          label: 'Cut',
          accelerator: 'CmdOrCtrl+X',
          selector: 'cut:',
        },
        {
          label: 'Copy',
          accelerator: 'CmdOrCtrl+C',
          selector: 'copy:',
        },
        {
          label: 'Paste',
          accelerator: 'CmdOrCtrl+V',
          selector: 'paste:',
        },
        {
          label: 'SelectAll',
          accelerator: 'CmdOrCtrl+A',
          selector: 'selectAll:',
        },
      ],
    },
  ]
  logger.info('app init 2.')
  initProxyHelper()
    .then(function () {
      initConfig()
        .then(function () {
          isMac
            ? Menu.setApplicationMenu(Menu.buildFromTemplate(_0x232031))
            : Menu.setApplicationMenu(null)
          createWindow()
          renderTray()
        })
        .catch(function (_0x27fff6) {
          logger.info('initConfig' + _0x27fff6)
          noHelper = 1
          exit()
        })
      initPowerMonitor()
    })
    .catch(function (_0x2dd6cc) {
      logger.info('initProxyHelper' + _0x2dd6cc)
      noHelper = 1
      exit()
    })
}
function createWindow() {
  isMac && app.dock.show()
  isDev
    ? ((mainWindow = new BrowserWindow({
        width: 720,
        height: 680,
        closable: true,
        resizable: false,
        maximizable: false,
        skipTaskbar: false,
        useContentSize: true,
        frame: false,
        icon: 'assets/favicon.icns',
        titleBarStyle: 'hiddenInset',
        webPreferences: {
          nodeIntegration: true,
          nodeIntegrationInWorker: true,
          webSecurity: false,
          webviewTag: true,
          contextIsolation: false,
          enableRemoteModule: true,
		  devTools: true
        },
      })),
      mainWindow.webContents.setUserAgent('windows.v2board.app 2.0'),
      mainWindow.loadFile('app.html'))
    : ((mainWindow = new BrowserWindow({
        width: 720,
        height: 680,
        closable: true,
        resizable: false,
        maximizable: false,
        skipTaskbar: false,
        useContentSize: true,
        frame: false,
        icon: 'assets/favicon.icns',
        titleBarStyle: 'hiddenInset',
        webPreferences: {
          nodeIntegration: true,
          nodeIntegrationInWorker: true,
          webSecurity: false,
          webviewTag: true,
          contextIsolation: false,
          enableRemoteModule: true,
		  devTools: true
        },
      })),
      mainWindow.webContents.setUserAgent('windows.v2board.app 2.0'),
      mainWindow.loadFile('app.html'))
  mainWindow.on('close', (_0x55afdd) => {
    !isQuiting() && (_0x55afdd.preventDefault(), mainWindow.hide())
  })
  mainWindow.on('closed', function () {
    mainWindow = null
    isMac && app.dock.hide()
  })
  logger.info('createWin done')
}
function getWindow() {
  return mainWindow
}
function isQuiting(_0x2544dd) {
  if (_0x2544dd !== undefined) {
    _isQuiting = _0x2544dd
  } else {
    return _isQuiting
  }
}
function reloadWindow() {
  mainWindow == null
    ? createWindow()
    : (mainWindow.close(),
      setTimeout(function () {
        reopenWindow()
        updateTray()
      }, 1000))
}
function reopenWindow() {
  mainWindow == null
    ? createWindow()
    : (mainWindow.show(), isMac && app.dock.show())
}
if (isDev) {
}
ipc.on('checkForUpdate', () => {})
autoUpdater
  .on('error', (_0x3dedd8) => {
    sendUpdateMessage(
      'error',
      _0x3dedd8 ? _0x3dedd8.stack || _0x3dedd8 : 'unknown' + message.error
    )
  })
  .on('checking-for-update', (_0xc771c8) => {
    sendUpdateMessage('checking-for-update', message.checking)
  })
  .on('update-available', (_0x2effc0) => {
    sendUpdateMessage('update-available', message.updateAva)
    sendUpdateMessage('update-available', _0x2effc0)
  })
  .on('download-progress', ({ percent: _0x29f327 }) => {
    sendUpdateMessage('downloadProgress', _0x29f327)
  })
  .on('update-not-available', (_0x1a0fb6) => {
    sendUpdateMessage('update-not-available', message.updateNotAva)
  })
  .on('update-downloaded', () => {
    sendUpdateMessage('update-success', message.updateEnd)
  })
ipc.on('isUpdateNow', (_0x2ecacc, _0x252b40) => {
  sendUpdateMessage('update-isnow', '开始更新')
  autoUpdater.quitAndInstall()
  mainWindow && mainWindow.destroy()
})
ipc.on('downloadUpdate', () => {
  autoUpdater
    .downloadUpdate()
    .then((_0x503018) => {
      sendUpdateMessage('update-path', 'download path ' + _0x503018)
    })
    .catch((_0x35629c) => {
      sendUpdateMessage('update-path-error', 'download error ' + _0x35629c)
    })
})
function sendUpdateMessage(_0x64b2f7, _0x3d39de) {
  mainWindow &&
    mainWindow.webContents.send('message', {
      message: _0x64b2f7,
      data: _0x3d39de,
    })
}
function checkUpdate(_0x302196 = false) {
  forceUpdate = _0x302196
  autoUpdater.checkForUpdates()
}
function windowAlert(_0x5db569) {
  var _0x1fff4c = {
    type: 'info',
    title: global.SiteName,
    message: _0x5db569,
    buttons: ['done'],
    defaultId: 0,
    icon: path.join(__static, 'ico', 'ico.png'),
  }
  dialog.showMessageBox(_0x1fff4c, function (_0x18c0b0) {})
}
function exit() {
  webContentsSend('appExit', 'true')
  NotTunkillCoreProcess()
    .then(function () {
      serverConnected = null
      app.exit()
    })
    .catch((_0x3f64b8) => {
      serverConnected = null
    })
}
function webContentsSend(_0x247998, _0xe70d8, _0x10fe40 = false) {
  if (mainWindow != null) {
    mainWindow.webContents.send(_0x247998, _0xe70d8)
  } else {
    !_0x10fe40 && console.log('No Window: ' + _0x247998 + ' | ' + _0xe70d8)
  }
}
function webContentsSendAction(
  _0x199ca0,
  _0x34c6c8,
  _0x4955c3,
  _0x103074 = false
) {
  mainWindow = getWindow()
  if (mainWindow != null) {
    mainWindow.webContents.send(_0x199ca0, _0x34c6c8, _0x4955c3)
  } else {
    !_0x103074 && console.log('No Window: ' + _0x199ca0 + ' | ' + _0x4955c3)
  }
}
const gotTheLock = app.requestSingleInstanceLock()
!gotTheLock
  ? app.quit()
  : (app.on('second-instance', (_0x3646f9, _0x114f8a, _0x2c2bef) => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) {
          mainWindow.restore()
        }
        mainWindow.focus()
      }
    }),
    app.on('ready', init))
app.on('window-all-closed', () => {})
app.on('before-quit', () => {
  isQuiting(true)
})
app.on('quit', function () {
  console.log('quit ' + noHelper)
  noHelper == null && closeServer()
})
app.on('activate', () => {
  getWindow() === null ? createWindow() : reopenWindow()
})
dialog.showErrorBox = (_0x2ce5fd, _0x187908) => {
  console.log(_0x2ce5fd + '\n' + _0x187908)
}
ipc.on('onClickControl', async function (_0x409650, _0x25e00c, _0x1aae86) {
  switch (_0x25e00c) {
    case 'winHide':
      !isQuiting() && mainWindow.hide()
      break
    case 'winMini':
      mainWindow != null && mainWindow.minimize()
      break
    case 'InitCore':
      rebootServer()
      break
    case 'Connect':
      setProxy(true),
        webContentsSend('statusJS', 'true'),
        console.log('Connect global')
      break
    case 'Stop':
      console.log('closeServer'),
        setProxy(),
        webContentsSend('statusJS', 'false')
      break
    case 'saveSysConfig':
      saveSysConfig(_0x1aae86).then(
        (_0x4df3e8) =>
          function (_0x5e8f95) {
            console.log(_0x4df3e8)
          }
      )
      break
    case 'quit':
      ;(userKey = ''), (serverLoad = ''), closeServer(), reloadWindow()
      break
    default:
      webContentsSend('V2Ray-log', 'IllegalAccess')
      break
  }
})
const logger = tracer.console({
  transport(_0x94d5c) {
    _0x94d5c &&
      fs
        .createWriteStream(logPath, { flags: 'a+' })
        .write(_0x94d5c.output + '\n', 'utf8')
  },
})
function setProxy(_0x8f8ad7) {
  let _0x404612 = path.join(appConfigDir, 'sysproxy.exe')
  var _0x3f692d = ''
  _0x8f8ad7
    ? (_0x3f692d = '"' + _0x404612 + '" global 127.0.0.1:10090 ""')
    : (_0x3f692d = '"' + _0x404612 + '" pac ""')
  cps.execSync(_0x3f692d)
  console.log('proxy: ' + _0x3f692d)
  logger.info('proxy: ' + _0x3f692d)
}
async function initConfig() {
  return new Promise(async function (_0xe3d8df) {
    return (
      await ensureFile(logPath),
      os.platform() == 'darwin'
        ? ((tun2socksPath = path.join(__libname, 'extra/libcore')),
          (tun2socksToolPath = path.resolve(userConfigDir, 'libcore')))
        : ((tun2socksPath = path.join(__libname, 'extra/libcore.exe')),
          (tun2socksToolPath = path.resolve(userConfigDir, 'libcore.exe'))),
      !fs.existsSync(appConfigDir) &&
        (await ensureDir(appConfigDir), logger.info('SystemFolderCreated')),
      !fs.existsSync(sysproxyPath) &&
        fs.copyFile(
          path.join(__libname, 'extra/sysproxy.exe'),
          path.join(appConfigDir, 'sysproxy.exe'),
          (_0x117240) => {
            if (_0x117240) {
              throw _0x117240
            }
            logger.info('sysproxy.exe copy done')
          }
        ),
      fs.copyFile(
        path.join(__libname, 'extra/libcore.exe'),
        path.join(appConfigDir, 'libcore.exe'),
        (_0x236421) => {
          if (_0x236421) {
            throw _0x236421
          }
        }
      ),
      logger.info('init Done.'),
      _0xe3d8df()
    )
  })
}
function saveSysConfig(_0xfe9109) {
  return new Promise((_0x113b46, _0x3b64e6) => {
    fs.writeFile(
      configPath,
      JSON.stringify(_0xfe9109, null, 4),
      {
        flag: 'w',
        encoding: 'utf-8',
        mode: '0666',
      },
      function (_0x2e84ec) {
        return _0x2e84ec
          ? _0x3b64e6(_0x2e84ec)
          : (coreServer != null && callRestartCore(), _0x113b46(true))
      }
    )
  })
}
function callRestartCore() {
  if (coreServer != null) {
    let _0x57c425 = coreServer.pid
    rebootServer()
    console.log('coreServer SIGHIUP:' + _0x57c425)
  } else {
    console.log('No coreServer')
  }
}
function getExeParams() {
  let _0x267ea8
  return (_0x267ea8 = ['run', '-D', '' + getResource()]), _0x267ea8
}
function getExeLocation() {
  let _0x348da9
  return (_0x348da9 = '"' + getResource('libcore.exe') + '"'), _0x348da9
}
const getResource = (_0x22f73a) => {
  let _0x53bccf = ''
  return (
    isWin &&
      (app.isPackaged
        ? (_0x53bccf = path.join(process.cwd(), '/resources/extra'))
        : (_0x53bccf = path.join(process.cwd(), '/extra'))),
    _0x22f73a && (_0x53bccf = path.join(_0x53bccf, _0x22f73a)),
    _0x53bccf
  )
}
async function startClashProcess(_0xb3c1ee, _0x4ec26e) {
  let _0x2f9277 = path.join(appConfigDir, 'libcore.exe')
  const _0x3c818b = '"' + _0x2f9277 + '" run -D "' + appConfigDir + '"'
  sudo.exec(_0x3c818b, { name: 'My App' })
  const _0x200149 = 'libcore.exe',
    _0x13983a = 'tasklist /FI "IMAGENAME eq ' + _0x200149 + '"'
  coreServer = cps.exec(_0x3c818b)
  logger.info('run: ' + _0x3c818b)
  coreServer.stdout.on('data', (_0x4ebb8f) => {
    webContentsSend('applog', 'data:' + _0x4ebb8f)
    if (_0x4ebb8f.indexOf('sing-box started') > -1) {
      console.log('start success:' + coreServer.pid)
      webContentsSend('coreStatus', 'true')
    } else {
      _0x4ebb8f.indexOf('external controller listen failed error') > -1 &&
        console.log('start err.')
    }
  })
  coreServer.on('SIGINT', function () {
    console.log('core ignore SIGINT')
  })
  coreServer.stderr.on('data', (_0x49166a) => {
    webContentsSend('applog', 'data2:' + _0x49166a)
    if (_0x49166a.indexOf('sing-box started') > -1) {
      console.log('start success:' + coreServer.pid)
      webContentsSend('coreStatus', 'true')
    } else {
      if (_0x49166a.indexOf('external controller listen failed error') > -1) {
        console.log('start err.')
      } else {
        _0x49166a.indexOf('open cache file: timeout') > -1 &&
          console.log('start err.')
      }
    }
  })
  coreServer.on('close', (_0xb5b6e4) => {
    webContentsSend('applog', 'close:' + _0xb5b6e4)
    console.log('RUN Close' + _0xb5b6e4)
  })
  coreServer.on('exit', (_0x1f23ec) => {
    webContentsSend('applog', 'exit:' + _0x1f23ec)
    coreServer = null
    console.log('RUN Exit' + _0x1f23ec)
  })
}
function NotTunkillCoreProcess() {
  return new Promise((_0xb3107a) => {
    let _0x5d4efd = 'cmd /k taskkill /f /im libcore.exe'
    cps.exec(_0x5d4efd)
    setProxy()
    coreServer != null &&
      (console.log('Kill Core:' + coreServer.pid), coreServer.kill())
    setTimeout(() => _0xb3107a(), 1500)
  }).catch((_0x421f41) => {
    return _0x421f41
  })
}
function killCoreProcess() {
  return new Promise((_0x1bb740, _0x52d93b) => {
    const _0x30d043 = 'libcore.exe',
      _0x29334e = 'tasklist /FI "IMAGENAME eq ' + _0x30d043 + '"'
    cps.exec(_0x29334e, (_0x3663df, _0x590145) => {
      !_0x3663df && _0x590145.includes(_0x30d043)
        ? (console.log(_0x30d043 + ' is run'),
          sudo.exec(
            'taskkill /F /IM libcore.exe',
            { name: 'App' },
            (_0x74736c, _0x435ded, _0x537f3a) => {
              if (_0x74736c) {
                const _0x2a2d36 = _0x74736c.toString()
                _0x2a2d36.includes('The process "libcore.exe" not found')
                  ? (console.log('Not found libcore'), _0x1bb740(_0x435ded))
                  : (console.error('ErrorMessage:', _0x2a2d36),
                    _0x52d93b(_0x74736c))
              } else {
                _0x435ded.includes(
                  'SUCCESS: The process "libcore.exe" with PID'
                ) &&
                  (console.log('libcore has been kill'), _0x1bb740(_0x435ded))
                _0x1bb740(_0x435ded)
              }
            }
          ))
        : (console.log(_0x30d043 + ' not run'), _0x1bb740(_0x590145))
    })
  }).catch((_0xd087ef) => {
    return _0xd087ef
  })
}
const RUN = ({ exe: _0x2abddb }, _0x559099) => {
  return new Promise((_0x5eecc1, _0x502bca) => {
    return sudo.exec(
      _0x2abddb,
      { name: 'Kill Process' },
      (_0x45e192, _0x2c6485) => {
        console.log(_0x45e192, _0x2c6485)
        if (_0x45e192) {
          return _0x502bca(_0x45e192)
        }
        _0x5eecc1(_0x2c6485)
        console.log('stdout: ' + _0x2c6485)
      }
    )
  })
}
function initPowerMonitor() {
  electron.powerMonitor.on('resume', () => {
    isModeBeforeSleep != 'OFF' &&
      isModeBeforeSleep != null &&
      typeof isModeBeforeSleep != 'undefined' &&
      console.log('run initPowerMonitor')
    isModeBeforeSleep = null
    isRouteBeforeSleep = null
  })
  electron.powerMonitor.on('suspend', () => {
    isRouteBeforeSleep = serverConnected
    console.log('suspend' + isModeBeforeSleep)
  })
  electron.powerMonitor.on('shutdown', () => {
    app.quit()
  })
}
function initProxyHelper() {
  return new Promise(function (_0x5647bb, _0x560c8f) {
    if (isMac) {
      logger.info('help init.')
      fs.readFile(
        tun2socksToolPath,
        { encoding: 'utf-8' },
        function (_0xa2fd0b, _0x4a0d1f) {
          if (_0xa2fd0b) {
            var _0xe6dae4 =
              ' cp ' +
              tun2socksPath +
              ' "' +
              tun2socksToolPath +
              '" && chown root:admin "' +
              tun2socksToolPath +
              '" && chmod a+rx "' +
              tun2socksToolPath +
              '" && chmod +s "' +
              tun2socksToolPath +
              '"'
            sudo.exec(
              _0xe6dae4,
              { name: 'APP' },
              (_0x566aa0, _0x59c963, _0x3fe7d7) => {
                return _0x566aa0 || _0x3fe7d7
                  ? (logger.info('help init err 授權失敗.' + _0x566aa0),
                    ProxyHelperAlert('授權失敗', 1),
                    _0x560c8f(_0x566aa0))
                  : (logger.info('help init success.'), _0x5647bb())
              }
            )
          } else {
            return logger.info('help done.'), _0x5647bb()
          }
        }
      )
    } else {
      return _0x5647bb()
    }
  })
}
function ProxyHelperAlert(_0x352374, _0x1749f4) {
  var _0xfff0c8 = {
    type: 'info',
    title: global.SiteName,
    message: _0x352374,
    buttons: ['done'],
    icon: path.join(__static, 'ico', 'ico.png'),
  }
  dialog.showMessageBox(_0xfff0c8, function (_0x3e074f) {})
}
function rebootServer() {
  NotTunkillCoreProcess()
    .then(function () {
      startClashProcess()
    })
    .catch((_0x39e1c6) => {
      console.log('kill error' + _0x39e1c6)
      serverConnected = null
    })
}
function closeServer() {
  NotTunkillCoreProcess()
    .then(function () {
      serverConnected = null
      webContentsSend('statusJS', 'false')
    })
    .catch((_0x1a5757) => {
      serverConnected = null
    })
}
function generateMenus() {
  let _0x5b4218 = [
    {
      label: '开启App',
      click: function () {
        reopenWindow()
      },
    },
    {
      label: '退出',
      click: function () {
        exit()
      },
    },
  ]
  return _0x5b4218
}
function updateTray() {
  const _0x1057b8 = generateMenus(),
    _0xa2c6a0 = Menu.buildFromTemplate(_0x1057b8)
  tray.setContextMenu(_0xa2c6a0)
  setTrayIcon()
}
function getTrayIcon() {
  return path.join(
    __static,
    'icons',
    isMac ? 'enabledTemplate@2x.png' : 'enabledTemplate@2x.png'
  )
}
function setTrayIcon() {
  tray.setImage(nativeImage.createFromPath(getTrayIcon()))
  isMac &&
    tray.setPressedImage(
      nativeImage.createFromPath(
        path.join(__static, 'icons', 'enabledTemplate@2x.png')
      )
    )
}
function renderTray() {
  tray = new Tray(nativeImage.createEmpty())
  updateTray()
  tray.on('click', function () {
    mainWindow != null &&
      (mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show())
  })
}