import csv
import json


def load_config():
    with open("config.json", "r", encoding="utf-8") as file:
        return json.load(file)


def load_volunteers(path):
    with open(path, "r", encoding="utf-8") as file:
        return json.load(file)["volunteers"]


def load_slots(path):
    slots = {}
    with open(path, "r", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        for row in reader:
            slots[row["zone"]] = int(row["seats"]) #FIXED
    return slots
