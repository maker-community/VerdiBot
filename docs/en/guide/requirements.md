# Hardware Requirements

## Hardware Solution Selection

VerdiBot supports two different hardware solutions, allowing you to choose the appropriate one based on your budget and performance needs.

### Solution Comparison

| Item | Raspberry Pi 5 Solution | Raspberry Pi Zero 2W Solution |
|------|------------------------|--------------------------------|
| **Main Controller** | Raspberry Pi 5 | Raspberry Pi Zero 2W |
| **Performance** | High performance, smooth operation | Basic performance, meets basic needs |
| **Budget** | ~$70-120 | ~$30-60 |
| **Power Consumption** | Higher | Low power |
| **Expandability** | Rich interfaces | Limited interfaces |
| **Target Users** | Users with high performance requirements | Budget-conscious beginners |

## Raspberry Pi 5 Solution

### Core Hardware

#### Main Control Module
- **Raspberry Pi 5** (4GB/8GB recommended)
- **MicroSD Card** 64GB Class 10 or higher
- **USB-C Power Adapter** 5V/3A

#### Display Module
- **Main Display** 3.5-inch IPS screen
- **Chest Display** Small OLED screen
- **Screen Adapter Board** Compatible with Raspberry Pi interface

#### Audio Module
- **Speaker** Small full-range speaker
- **Microphone** MEMS digital microphone
- **Audio Amplifier** I2S digital amplifier

#### Sensor Module
- **Gyroscope** Six-axis attitude sensor
- **Environmental Sensor** Temperature and humidity sensor
- **RGB LED** Ambient lighting effects

### Mechanical Structure

#### 3D Printed Parts
- Head shell (left and right halves)
- Body shell (front and rear covers)
- Arm assemblies (4 components each side)
- Base and support components
- Various connectors and mounting parts

#### Standard Parts
- **Screws** M2, M3 various lengths
- **Bearings** Small ball bearings
- **Springs** Return springs
- **Wires** Various colored dupont wires
- **Connectors** JST sockets

## Raspberry Pi Zero 2W Solution

### Core Hardware

#### Main Control Module
- **Raspberry Pi Zero 2W**
- **MicroSD Card** 32GB Class 10
- **USB-C Power Adapter** 5V/2.5A

#### Display Module
- **Main Display** 2.8-inch IPS screen
- **Chest Display** Simplified or omitted
- **Screen Adapter Board** Zero-specific adapter

#### Audio Module
- **Speaker** Small speaker
- **Microphone** Analog microphone
- **Audio Output** Simplified amplification circuit

#### Sensor Module
- **Basic Sensors** Simplified sensor configuration
- **LED** Basic indicator lights

### Simplified Design Notes

The Zero 2W solution simplifies certain features to control cost and complexity:

- Smaller display screen size
- Simplified audio functions
- Reduced sensor configuration
- Some motion functions may be limited

## Tool Requirements

### Essential Tools
- **Soldering Tools**: Soldering iron, solder, flux
- **Assembly Tools**: Screwdriver set, tweezers, wire strippers
- **Test Tools**: Multimeter, oscilloscope (optional)
- **3D Printer**: Or use printing service providers

### Recommended Tools
- **Heat Gun**: For heat shrink tube processing
- **Magnifying Glass**: Fine soldering assistance
- **Anti-static Tools**: Anti-static wrist strap, work mat
- **Label Maker**: Cable identification

## PCB Manufacturing

### PCB Requirements
- **Main Board**: Raspberry Pi expansion board
- **Display Driver Board**: Screen control board
- **Audio Board**: Audio processing and amplification
- **Sensor Board**: Various sensor integration

### Manufacturing Methods
1. **DIY**: Suitable for users with PCB manufacturing experience
2. **Contract Manufacturing**: Through platforms like LCEDA
3. **Purchase**: Wait for community to provide finished PCBs

## Budget Estimation

### Raspberry Pi 5 Solution Budget

| Category | Item | Price Range |
|----------|------|-------------|
| Controller | Raspberry Pi 5 + accessories | $60-85 |
| Display | Screens and driver boards | $12-22 |
| Audio | Audio modules | $8-15 |
| Sensors | Various sensors | $8-15 |
| Mechanical | 3D printing and standard parts | $15-30 |
| PCB | Circuit board manufacturing | $15-30 |
| **Total** | | **$118-197** |

### Raspberry Pi Zero 2W Solution Budget

| Category | Item | Price Range |
|----------|------|-------------|
| Controller | Pi Zero 2W + accessories | $22-38 |
| Display | Simplified screen modules | $6-12 |
| Audio | Basic audio modules | $5-8 |
| Sensors | Basic sensors | $3-6 |
| Mechanical | 3D printing and standard parts | $12-22 |
| PCB | Simplified circuit boards | $8-15 |
| **Total** | | **$56-101** |

## Procurement Suggestions

### Priority Purchase List
1. **Main Hardware**: Raspberry Pi, SD card, power supply
2. **Display Module**: Screen is the most important interface
3. **3D Printed Parts**: Structural parts need advance preparation
4. **Basic Tools**: Soldering and assembly tools

### Recommended Procurement Channels
- **Official Channels**: Raspberry Pi official distributors
- **Electronic Stores**: Digikey, Mouser, Adafruit
- **Online Marketplaces**: Amazon, eBay (from reputable sellers)
- **Local Markets**: Local electronics markets

---

::: tip Solution Selection Advice
**Beginners**: Start with Zero 2W solution - lower cost, lower risk
**Advanced Users**: Go directly with Pi 5 solution - complete features, better experience
:::

::: warning Important Notes
- Some components may have supply lead times, purchase in advance
- 3D printed parts require high precision, choose suitable printing services
- Budgets are for reference only, actual prices may vary by region and time
:::

**Next Step**: [Getting Started](/en/guide/getting-started)