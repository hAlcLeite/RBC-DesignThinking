# RBC-DesignThinking
Prototype for code

# 🔥 Smart Wildfire Defense Sprinkler (MVP)

**A Raspberry Pi–powered wildfire defense system** that detects smoke using OpenCV and automatically sprays water via a solenoid or pump. Designed as a proof-of-concept for wildfire prevention and smart home defense.

---

## 🌲 Overview

This project demonstrates an **autonomous fire-response sprinkler system**.  
When the camera detects smoke in the environment, the Raspberry Pi triggers a relay to open a water valve for a few seconds.

It can be scaled for real homes or used as a prototype model for wildfire-prone regions.

---

## 🧠 System Architecture
Camera → Raspberry Pi (OpenCV) → Smoke Detection → Relay → Solenoid/Pump → Water Spray


Optional modules:
- DHT22 sensor for weather context
- Servo motor to rotate nozzle
- Cloud logging or SMS alerts

---

## 🧩 Components

| Component | Example | Purpose |
|------------|----------|----------|
| Raspberry Pi 4 | – | Central controller |
| Pi Camera | – | Vision input |
| 12V Pump or Solenoid Valve | – | Water spray control |
| Relay Module | 1-Channel 5V | Activates water system |
| DHT22 Sensor | Optional | Temperature/humidity |
| Power Supply | 5V Pi, 12V pump | Dual supply system |
| 3D-Printed Shell | PETG/ABS | Sprinkler housing |


## 🧠 Smoke Detection Logic

The current MVP uses a **color and motion heuristic**:
- Detects grayish, semi-transparent moving regions.
- Flags as smoke if >5% of frame matches pattern.
- In future: upgrade to CNN-based model (FireNet or YOLOv5).

---

## ⚙️ Setup Instructions

### 1. Install dependencies
```bash
sudo apt update
sudo apt install python3-opencv python3-pip
pip install RPi.GPIO adafruit-circuitpython-dht

