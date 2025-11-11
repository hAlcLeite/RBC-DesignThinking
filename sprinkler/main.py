# Entry point 
from detect_smoke import detect_smoke
from control_valve import open_valve, close_valve
from camera_stream import get_frame
from utils.logger import log_event
import time

while True:
    frame = get_frame()
    if detect_smoke(frame):
        log_event("SMOKE DETECTED - Activating sprinkler")
        open_valve()
        time.sleep(5)
        close_valve()
    time.sleep(1)
