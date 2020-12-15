# 这是一个live2d桌面宠物程序
------
### 程序涉及:
* Electron
* Node.js
* HTML
* live2d
<br/>

使用Electron实现的桌面live2d宠物<br/>
使用本地资源，**完全**脱离对网络的需求<br/>
可以随时随地摆在桌面上<br/><br/>

### 预览<br/>
![ ](https://github.com/MikuNyanya/live2dPet_windows/blob/master/live2d/image/preview.jpg)

<br/><br/>
### live2d模型
如果想使用其他live2d模型，需要修改live2d.html中的资源路径<br/>
>loadlive2d("live2d", "`live2d/model/shizuku/shizuku.model.json`");

<br/><br/>
### 日志
2020-12-15<br/>
虽然快懒死了，不过还是上传到gayhub了<br/>
但是路径方面有点问题，live2d模型资源的路径，在打包成exe后变得不一样了<br/><br/>

------
想吧live2d丢在桌面上，于是找到了Electron<br/>
还好会点js，研究了一下Electron就开搞了<br/>
但是太懒了，只能勉强可以用<br/>
应该加上live2d切换，也该兼容网络live2d资源链接的<br/>
然后在写个养成系统啥的=A=
