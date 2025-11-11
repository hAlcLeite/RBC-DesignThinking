import cv2
import numpy as np

def detect_smoke(frame, debug=False):
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    # Smoke tends to have low saturation, medium value
    lower = np.array([0, 0, 80])
    upper = np.array([180, 60, 255])
    mask = cv2.inRange(hsv, lower, upper)
    
    smoke_pixels = cv2.countNonZero(mask)
    ratio = smoke_pixels / (frame.shape[0] * frame.shape[1])

    if debug:
        cv2.imshow("Smoke Mask", mask)

    return ratio > 0.05   # if >5% of frame looks like smoke
