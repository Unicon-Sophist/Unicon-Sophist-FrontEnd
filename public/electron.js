const { app, BrowserWindow, Menu, Tray } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let tray;
//트레이 아이콘
function initTrayIconMenu() {
	tray = new Tray(path.join(__dirname, 'ms-icon-70x70.png'));
	const myMenu = Menu.buildFromTemplate([
		{
			label: '1번',
			type: 'normal',
			checked: true,
			click: () => {
				console.log('1번클릭!');
			},
		}, //checked는 기본선택입니다.
		{
			label: '2번',
			type: 'normal',
			click: () => {
				console.log('2번클릭!');
			},
		},
		{
			label: '3번',
			type: 'normal',
			click: () => {
				console.log('3번클릭!');
			},
		},
	]);
	tray.setToolTip('트레이 아이콘!');
	tray.setContextMenu(myMenu);
}

function createWindow() {
	// 브라우저 창을 생성합니다.
	let win = new BrowserWindow({
		show: false,
		width: 1600,
		height: 800,
		webPreferences: {
			nodeIntegration: true,
		},
		resizable: false,
		icon: path.join(__dirname, 'ms-icon-70x70.png'),
	});

	// 트레이 셋팅
	initTrayIconMenu();

	win.loadURL(
		isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`,
	);

	win.on('closed', () => (win = null));

	win.once('ready-to-show', () => {
		win.show();
	});
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
