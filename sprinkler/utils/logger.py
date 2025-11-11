import datetime

def log_event(message):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {message}")
    with open("events.log", "a") as f:
        f.write(f"[{timestamp}] {message}\n")
