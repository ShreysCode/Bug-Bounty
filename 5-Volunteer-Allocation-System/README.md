# Volunteer Allocation System

## Difficulty

Medium

## Language

Python

## Problem Statement

This program assigns volunteers to fest zones using configuration and data files. Some volunteers are not assigned correctly, and certain cases can crash the tool.

Debug the system and make the allocation flow reliable.

## Expected Behavior

- The program should read config, volunteer, and slot data without external dependencies.
- Volunteers with enough experience should be assigned while seats are available.
- Seat counts should decrease correctly after assignment.
- Missing or incomplete volunteer data should not crash the program.
- The program should print a clean list of final assignments.

## How to Run

```sh
python main.py
```

## Files

- `main.py`
- `loader.py`
- `allocator.py`
- `config.json`
- `volunteers.json`
- `slots.csv`

## Hint

- Ara ~ the CSV gave you seat counts as strings and you tried to do math with them.
  Yamete - you can't subtract a word, senpai. Cast before you blast.

- Check how configuration keys are being read, how seat counts are loaded from the CSV file, and how the program behaves when volunteer data is incomplete.

## Scoring

- Correctly identifying the bug location: half marks
- Fixing the bug completely: full marks
