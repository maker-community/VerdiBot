# PCB制作指南

本指南将详细介绍VerdiBot的PCB制作过程，包括设计文件获取、工艺参数设置等。
![全部板子](/zh/all-pcb.jpg)

## PCB设计文件

### 获取设计文件

所有PCB设计文件已在立创EDA平台开源，你可以通过以下方式获取：

1. **立创开源社区**: https://oshwhub.com/greenshade/verdibot
2. **GitHub仓库**: [maker-community/VerdiBot](https://github.com/maker-community/VerdiBot)

### PCB模块说明

VerdiBot包含以下PCB模块：

#### 主控扩展板和显示屏驱动
- **功能**: 树莓派接口扩展和电源管理，主屏幕和OLED屏幕驱动
- **层数**: 2层板
- **厚度**: 1.6mm

#### 语音板子
- **功能**: usb声卡和usb hub功能
- **层数**: 2层板
- **厚度**: 1.6mm

#### 舵机驱动板
- **功能**: 改装舵机的驱动板子，通过i2c和树莓派通讯。
- **层数**: 2层板
- **厚度**: 1.6mm
  
# 打板

**注意事项，板子可以保持1.6mm的厚度。**

三个板子都要进行下面的下单操作，请大家仔细并且耐心的操作。

## 访问立创开源广场的项目

首先打开项目地址，并且在编辑器打开项目

[立创开源广场链接（包含项目打板文件）](https://oshwhub.com/lxw4864607/electronbot-pi-liang-zhi-zao-ban-ben)

![开源广场地址图片](/zh/pcb-home.png)

选择编辑器打开，使用专业版打开项目，打开项目如下：

![PCB打板操作.jpg](/zh/pcb-order.png)

![下单1.jpg](/zh/pcb-order-01.png)

![下2.jpg](/zh/pcb-order-02.png)

大家有的可能第一次到达这个页面，可能比较陌生，可以多点点看看。

![pcb下单3.jpg](/zh/pcb-order-03.png)

![pcb下单4.jpg](/zh/pcb-order-04.png)

![pcb下单5.jpg](/zh/pcb-order-05.png)

![pcb下单6.jpg](/zh/pcb-order-06.png)

达到图上的操作基本上就可以提交订单了，提交订单就会跳转到嘉立创的PCB管理后台了。

## 通过制板文件直接打板

访问嘉立创的网站：https://www.jlc.com/

点击图上按钮进入后台：

![pcb下单4.jpg](/zh/pcb下单4.jpg)

可以在图上进行上传PCB打板，这个可以作为大家的备用选项，这里就不展开了。

![pcb下单5.jpg](/zh/pcb下单5.jpg)

至此打板的流程就到此结束了，如果你顺利打板完成，你将收到如下的板子。

![全部板子](/zh/all-pcb.jpg)


**下一步**: [查看物料清单](/zh/hardware/bill-of-materials)