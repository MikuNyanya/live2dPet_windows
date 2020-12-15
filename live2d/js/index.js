//获取remote
const remote = require('electron').remote;
//获取screen模块
const screen = remote.screen;
//electron ipc通讯 渲染进程
const ipcRenderer = electron.ipcRenderer

window.onload = function () {
    //窗口拖动
    makeDraggable();
}

//该拖拽方法有个问题，鼠标甩的太快的时候，会由于鼠标脱离了窗体区域而导致触发不了鼠标移动事件，从而移动中断
function makeDraggable() {
    var live2d = this.document.querySelector("#live2d");
    //指示正在执行拖动操作
    let dragging = false;
    //指示鼠标左键是否按下
    let mousedown_left = false;
    let mouseOnPage;
    live2d.addEventListener('mousedown', (e) => {
        if (e.button == 0) {
            //鼠标左键
            mousedown_left = true;
        }
        // if(e.button == 1) //鼠标中键(滚轮)
        // if(e.button == 2) //鼠标右键

        //记录当前窗口中的鼠标相对位置
        //获取鼠标位置
        const { x, y } = screen.getCursorScreenPoint();
        //从主进程获取当前窗口位置
        const pos = ipcRenderer.sendSync('getMainPoint')
        //计算鼠标相对于窗口位置
        mouseOnPage = [(x - pos[0]), (y - pos[1])]

        // console.log("鼠标左键坐标:" + x + " " + y)
        // console.log("窗口坐标:" + pos)
        // console.log("鼠标相对于窗口坐标:" + mouseOnPage[0] + " " + mouseOnPage[1])
    });
    live2d.addEventListener('mouseup', () => {
        mousedown_left = false;
        dragging = false;
    });
    live2d.addEventListener('mousemove', () => {
        //按下鼠标并移动，判定为拖动窗口
        if (mousedown_left) {
            dragging = true;
        }

        //执行拖动操作
        if (dragging) {
            //移动窗口操作发送到主进程进行
            ipcRenderer.send('dragMain', mouseOnPage)
        }
    });
}