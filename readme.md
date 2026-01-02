# EmberShield (RBC Design Thinking Project)

EmberShield is a wildfire defense concept developed in the RBC Design Thinking program at Western University. The project combines a first-line exterior sprinkler system, real-time environmental monitoring, and computer vision to detect smoke and fire early, activate protection automatically, and deliver actionable data to homeowners and insurers.

## Project Context
Wildfires are escalating across Canada, with property damage and insurance gaps widening in high-risk regions. EmberShield addresses this challenge with a prevention-first approach: detect embers and smoke early, create a protective barrier before the flame front arrives, and provide localized risk data that can support fairer insurance pricing.

## Repository Layout
- `RBC-DesignThinking/`: Raspberry Pi sprinkler prototype (smoke detection, relay control, and logs).
- `RBC-DesignThinking/NewFrontEnd/`: UI concept for homeowner monitoring and control.
- `YOLO-Test/fire-and-smoke-detection-yolov8/`: Fire and smoke detection model, demo assets, and API server.

## RBC Design Thinking Program
EmberShield was created as part of the RBC Design Thinking program at Western University. We used a design thinking approach to move from problem framing to a testable solution:

- Empathize: focus on homeowners in wildfire-prone communities who need affordable, reliable protection.
- Define: early detection and prevention is the gap, not just reaction to active flames.
- Ideate: combine sprinkler automation, eco-friendly foam, backup power, and real-time monitoring.
- Prototype: build a Raspberry Pi sprinkler MVP, a YOLOv8-based fire/smoke detector, and a homeowner UI.
- Test and iterate: validate detection flows and user control concepts with demo media and a working pipeline.

This repo captures the technical proof-of-concept for the concept we pitched.

## System Overview
EmberShield combines hardware, software, and AI to move wildfire defense from reaction to prevention.

- Smart sprinkler unit with automatic activation and backup power.
- Environmental sensors and camera input for smoke and fire detection.
- AI detection pipeline built on a YOLOv8 fire/smoke model.
- Homeowner UI for real-time status, manual activation, and data visibility.
- Privacy-first data ownership with opt-in sharing for insurers.

## Getting Started

### 1) Sprinkler Prototype (Raspberry Pi)
From `RBC-DesignThinking/`:

```bash
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
python sprinkler\main.py
```

Notes:
- The prototype uses `RPi.GPIO` and a camera feed; run on a Raspberry Pi with the correct hardware attached.
- `sprinkler\detect_smoke.py` implements a simple HSV-based smoke heuristic for the MVP.

### 2) Fire and Smoke Detection (YOLOv8)
From `YOLO-Test/fire-and-smoke-detection-yolov8/`:

```bash
python -m venv .venv
.\.venv\Scripts\activate
pip install ultralytics opencv-python fastapi uvicorn
python server.py
```

This starts a local API server:
- `GET /status` returns the latest detection summary.
- `GET /video` streams the annotated webcam feed.

For a quick desktop demo:

```bash
python weights\test_yolo_cam.py
```

### 3) UI Prototype
From `RBC-DesignThinking/NewFrontEnd/`:

```bash
npm install
npm run dev
```

## Model Details
The fire and smoke detection model uses Ultralytics YOLOv8n (Nano) for lightweight, real-time inference.

- Detection classes: fire, smoke
- Weights: `YOLO-Test/fire-and-smoke-detection-yolov8/weights/best.pt`
- Dataset source: https://universe.roboflow.com/fire-rqbio/fire-and-smoke-yikzn

## Demo Media
![Fire Detection Demo](YOLO-Test/fire-and-smoke-detection-yolov8/fire%20demo%201.gif)
![Fire Detection Demo](YOLO-Test/fire-and-smoke-detection-yolov8/fire%20demo%202.gif)

## Credits and Attributions
- Pre-trained fire/smoke model and demo media are credited to https://github.com/luminous0219/fire-and-smoke-detection-yolov8 (used as the baseline CV model for this project).
- Dataset source: https://universe.roboflow.com/fire-rqbio/fire-and-smoke-yikzn
