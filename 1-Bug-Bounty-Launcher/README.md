# Bug Bounty Launcher

## Difficulty

Easy

## Language

C

## Problem Statement

The system is preparing to launch the HACKDAYS 4.0 Bug Bounty Event.

It is supposed to:

- Display a welcome message
- Generate and print a reversed launch code

However, the program contains multiple bugs and produces incorrect output.

Identify and fix the bug(s) so that the program behaves correctly.

## Expected Output:

```txt
Welcome to HACKDAYS 4.0 Bug Bounty Event!
Launch Code: 4321
```

## How to Run

```sh
gcc main.c -o launcher
./launcher
```

## Files:

- `main.c`

## Hint

- Some statements here are in a toxic relationship… they just can’t commit to ending things properly.
- Look closely at how the program makes decisions and how values are returned.

## Scoring

- Correctly identifying the bug(s) location: half marks
- Fixing the bug(s) completely: full marks
