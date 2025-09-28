# 系统安装

本章将详细介绍如何为VerdiBot安装和配置操作系统及相关软件环境。

## 系统要求

### 推荐系统配置

#### 树莓派5方案
- **操作系统**: Raspberry Pi OS (64-bit) 推荐
- **内存要求**: 4GB以上
- **存储空间**: 32GB以上 (推荐64GB)
- **网络**: WiFi 6 或以太网连接

#### 树莓派Zero 2W方案  
- **操作系统**: Raspberry Pi OS Lite (64-bit)
- **内存要求**: 512MB
- **存储空间**: 16GB以上 (推荐32GB)
- **网络**: WiFi 连接

### 支持的操作系统

| 系统版本 | Pi 5 支持 | Zero 2W 支持 | 推荐度 | 备注 |
|---------|----------|--------------|--------|------|
| **Raspberry Pi OS (64-bit)** | ✅ | ✅ | ⭐⭐⭐⭐⭐ | 官方推荐 |
| **Raspberry Pi OS Lite** | ✅ | ✅ | ⭐⭐⭐⭐ | 轻量版本 |
| **Ubuntu Server 22.04** | ✅ | ✅ | ⭐⭐⭐ | 服务器版本 |
| **DietPi** | ✅ | ✅ | ⭐⭐⭐ | 极简系统 |

## 系统安装

### 方法一：使用Raspberry Pi Imager (推荐)

#### 准备工作
```bash
# 下载官方烧录工具
# 访问: https://www.raspberrypi.com/software/

# 或使用命令行下载 (Linux/macOS)
wget https://downloads.raspberrypi.org/imager/imager_latest.dmg
# 或
wget https://downloads.raspberrypi.org/imager/imager_latest.exe
```

#### 烧录步骤

1. **启动Imager**
   - 运行 Raspberry Pi Imager
   - 选择操作系统镜像
   - 选择目标SD卡

2. **高级设置** (推荐配置)
   ```yaml
   启用SSH:
     - 开启SSH服务
     - 设置用户名: verdibot
     - 设置密码: [自定义密码]
   
   WiFi配置:
     - SSID: [你的WiFi名称]  
     - 密码: [你的WiFi密码]
     - 国家代码: CN (中国)
   
   地区设置:
     - 时区: Asia/Shanghai
     - 键盘布局: us
   ```

3. **开始烧录**
   - 点击"Write"开始烧录
   - 等待完成 (约5-15分钟)
   - 验证烧录结果

### 方法二：手动烧录

#### 下载系统镜像
```bash
# 官方镜像下载地址
# Raspberry Pi OS (64-bit)
wget https://downloads.raspberrypi.org/raspios_arm64/images/raspios_arm64-2024-03-15/2024-03-15-raspios-bookworm-arm64.img.xz

# 解压镜像
xz -d 2024-03-15-raspios-bookworm-arm64.img.xz
```

#### 烧录到SD卡
```bash
# Linux/macOS 烧录命令
# 注意：替换 /dev/sdX 为你的SD卡设备
sudo dd if=2024-03-15-raspios-bookworm-arm64.img of=/dev/sdX bs=4M status=progress

# 或使用 balenaEtcher (图形化工具)
# 下载地址: https://www.balena.io/etcher/
```

#### 启用SSH
```bash
# 在boot分区创建SSH文件
touch /media/boot/ssh

# 配置WiFi (可选)
cat > /media/boot/wpa_supplicant.conf << EOF
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid="你的WiFi名称"
    psk="你的WiFi密码"
}
EOF
```

## 首次启动配置

### 连接到树莓派

#### 方式一：SSH连接 (推荐)
```bash
# 查找树莓派IP地址
nmap -sn 192.168.1.0/24 | grep -B2 "Raspberry Pi"

# 或使用路由器管理页面查看
# 或使用官方工具: rpi-connect

# SSH连接
ssh verdibot@192.168.1.xxx
```

#### 方式二：直接连接显示器
- 连接HDMI显示器
- 连接USB键盘鼠标
- 直接操作图形界面

### 系统初始配置

#### 更新系统
```bash
# 更新软件包列表
sudo apt update

# 升级系统 (首次启动必做)
sudo apt full-upgrade -y

# 重启系统
sudo reboot
```

#### 基础配置
```bash
# 运行配置工具
sudo raspi-config

# 推荐配置项：
# 1. System Options > Password (修改密码)
# 2. Interface Options > SSH (启用SSH)
# 3. Interface Options > SPI (启用SPI，用于显示屏)
# 4. Interface Options > I2C (启用I2C，用于传感器)
# 5. Interface Options > Camera (启用摄像头，如果需要)
# 6. Localisation Options > Timezone (设置时区)
# 7. Advanced Options > Memory Split (GPU内存分配64MB)
```

#### 创建VerdiBot用户
```bash
# 创建专用用户 (如果没有在烧录时创建)
sudo useradd -m -s /bin/bash verdibot
sudo usermod -aG sudo,gpio,spi,i2c verdibot

# 设置密码
sudo passwd verdibot

# 切换用户
su - verdibot
```

## 依赖软件安装

### Python环境配置

```bash
# 安装Python依赖管理工具
sudo apt install -y python3-pip python3-venv python3-dev

# 创建虚拟环境
cd /home/verdibot
python3 -m venv verdibot-env

# 激活虚拟环境
source verdibot-env/bin/activate

# 升级pip
pip install --upgrade pip setuptools wheel
```

### 核心依赖库
```bash
# GPIO控制
pip install RPi.GPIO gpiozero

# 显示相关
pip install luma.oled luma.lcd pillow

# 音频处理
sudo apt install -y portaudio19-dev
pip install pyaudio sounddevice

# 传感器库
pip install adafruit-circuitpython-mpu6050
pip install adafruit-circuitpython-dht

# 网络和API
pip install requests websockets aiohttp

# 系统工具
pip install psutil netifaces
```

### 系统级依赖
```bash
# 音频系统
sudo apt install -y pulseaudio pulseaudio-utils
sudo apt install -y alsa-utils alsa-base

# 图像处理
sudo apt install -y libjpeg-dev libpng-dev libfreetype6-dev

# 开发工具
sudo apt install -y git vim wget curl htop

# I2C和SPI工具
sudo apt install -y i2c-tools spi-tools

# 可选：媒体处理
sudo apt install -y ffmpeg imagemagick
```

## VerdiBot软件安装

### 下载项目代码
```bash
# 切换到工作目录
cd /home/verdibot

# 克隆主项目
git clone https://github.com/maker-community/VerdiBot.git
cd VerdiBot

# 克隆语音助手代码
git clone https://github.com/maker-community/Verdure.Assistant.git

# 克隆WiFi配网项目
git clone https://github.com/maker-community/PiWiFiAP.git
```

### 安装项目依赖
```bash
# 激活虚拟环境
source ~/verdibot-env/bin/activate

# 安装VerdiBot依赖
cd ~/VerdiBot
pip install -r requirements.txt

# 安装语音助手依赖
cd ~/Verdure.Assistant
pip install -r requirements.txt

# 安装WiFi配网依赖
cd ~/PiWiFiAP
pip install -r requirements.txt
```

### 配置文件设置
```bash
# 复制配置模板
cd ~/VerdiBot
cp config/config.example.json config/config.json

# 编辑配置文件
nano config/config.json
```

配置示例：
```json
{
  "device": {
    "name": "VerdiBot-001",
    "version": "1.0.0",
    "hardware": "rpi5"
  },
  "display": {
    "main_screen": {
      "driver": "st7789",
      "size": [320, 240],
      "spi_port": 0,
      "spi_device": 0
    },
    "oled_screen": {
      "driver": "ssd1306",
      "size": [128, 64],
      "i2c_address": "0x3C"
    }
  },
  "audio": {
    "input_device": 1,
    "output_device": 1,
    "sample_rate": 16000
  },
  "sensors": {
    "mpu6050": {
      "i2c_address": "0x68"
    },
    "dht22": {
      "gpio_pin": 18
    }
  }
}
```

## 服务配置

### 创建系统服务

#### VerdiBot主服务
```bash
# 创建服务文件
sudo nano /etc/systemd/system/verdibot.service
```

服务配置：
```ini
[Unit]
Description=VerdiBot Main Service
After=network.target sound.target
Wants=network-online.target

[Service]
Type=simple
User=verdibot
Group=verdibot
WorkingDirectory=/home/verdibot/VerdiBot
Environment=PATH=/home/verdibot/verdibot-env/bin
ExecStart=/home/verdibot/verdibot-env/bin/python main.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

#### WiFi配网服务
```bash
# 创建配网服务
sudo nano /etc/systemd/system/verdibot-wifi.service
```

```ini
[Unit]
Description=VerdiBot WiFi Setup
After=network.target

[Service]
Type=oneshot
User=root
ExecStart=/home/verdibot/verdibot-env/bin/python /home/verdibot/PiWiFiAP/main.py
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

### 启用和启动服务
```bash
# 重载systemd配置
sudo systemctl daemon-reload

# 启用服务
sudo systemctl enable verdibot.service
sudo systemctl enable verdibot-wifi.service

# 启动服务
sudo systemctl start verdibot.service
sudo systemctl start verdibot-wifi.service

# 检查服务状态
sudo systemctl status verdibot.service
```

## 硬件接口测试

### GPIO接口测试
```bash
# 测试GPIO输出
python3 -c "
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
for i in range(10):
    GPIO.output(18, GPIO.HIGH)
    time.sleep(0.5)
    GPIO.output(18, GPIO.LOW)
    time.sleep(0.5)
GPIO.cleanup()
print('GPIO test completed')
"
```

### I2C设备扫描
```bash
# 扫描I2C设备
sudo i2cdetect -y 1

# 应该看到类似输出：
#      0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
# 00:                         -- -- -- -- -- -- -- --
# 10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
# 20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
# 30: -- -- -- -- -- -- -- -- -- -- -- -- 3c -- -- --
# 40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
# 50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
# 60: -- -- -- -- -- -- -- -- 68 -- -- -- -- -- -- --
# 70: -- -- -- -- -- -- -- --
```

### 音频设备测试
```bash
# 列出音频设备
aplay -l
arecord -l

# 测试音频播放
speaker-test -t sine -f 1000 -l 1

# 测试音频录制
arecord -D plughw:1,0 -f cd -t wav -d 5 test.wav
aplay test.wav
```

### 显示屏测试
```bash
# 安装测试工具
pip install luma.examples

# 测试OLED显示
python3 -m luma.examples.demo --display ssd1306 --interface i2c

# 测试TFT显示
python3 -c "
from luma.lcd.device import st7789
from luma.core.interface.serial import spi
from PIL import Image, ImageDraw
import time

serial = spi(port=0, device=0, gpio_DC=24, gpio_RST=25)
device = st7789(serial, width=240, height=320, rotate=0)

image = Image.new('RGB', (240, 320), 'black')
draw = ImageDraw.Draw(image)
draw.text((50, 100), 'VerdiBot', fill='white')
device.display(image)
time.sleep(5)
"
```

## 故障排除

### 常见问题

#### SSH连接失败
**问题**: 无法通过SSH连接到树莓派
**解决方案**:
```bash
# 1. 检查SSH服务状态
sudo systemctl status ssh

# 2. 启用SSH服务
sudo systemctl enable ssh
sudo systemctl start ssh

# 3. 检查防火墙设置
sudo ufw status
sudo ufw allow ssh

# 4. 检查网络连接
ping 8.8.8.8
```

#### 权限问题
**问题**: GPIO或I2C设备访问权限不足
**解决方案**:
```bash
# 添加用户到相关组
sudo usermod -aG gpio,i2c,spi,audio $USER

# 重新登录或重启
sudo reboot
```

#### 软件包安装失败
**问题**: pip安装包时出错
**解决方案**:
```bash
# 更新pip
pip install --upgrade pip

# 使用国内源
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ package_name

# 安装编译依赖
sudo apt install -y python3-dev build-essential
```

### 性能优化

#### Zero 2W优化
```bash
# 禁用不必要的服务
sudo systemctl disable bluetooth
sudo systemctl disable cups

# 减少GPU内存分配
# 在 /boot/config.txt 中添加：
echo "gpu_mem=16" | sudo tee -a /boot/config.txt

# 启用zram交换
sudo apt install -y zram-tools
echo "ALGO=lz4" | sudo tee -a /etc/default/zramswap
```

#### Pi 5优化
```bash
# 启用硬件加速
echo "dtparam=arm_freq=2400" | sudo tee -a /boot/config.txt

# 优化内存分配
echo "gpu_mem=128" | sudo tee -a /boot/config.txt

# 启用PCIe
echo "dtparam=pciex1" | sudo tee -a /boot/config.txt
```

---

::: tip 安装成功标志
系统安装成功后，你应该能够：
- SSH正常连接到设备
- I2C扫描检测到传感器设备
- 音频播放测试正常
- 显示屏能够显示测试内容
:::

::: warning 重要提醒
- 首次启动后必须更新系统
- 启用必要的接口 (SPI, I2C, GPIO)
- 定期备份SD卡，避免数据丢失
- 注意电源供应，避免欠压导致系统不稳定
:::

**下一步**: [软件配置](/zh/software/configuration)