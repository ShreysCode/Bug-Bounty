# Eligible Player Counter

## Difficulty

Easy

## Language

C

## Problem Statement

A system counts how many players are eligible.

A player is eligible if:

score ≥ 50
and score ≤ 100

If at least 3 players are eligible, print "Qualified"
Otherwise print "Not Qualified"

However, the program produces incorrect results.

Identify and fix all the bug(s).

## Expected Output:

```txt
Not Qualified
```

## How to Run

```sh
gcc main.c -o counter
./counter
```

## Hint

- Your if-condition has never read the problem statement in its life and its giving main character energy for absolutely no reason. Not the vibe, jester.
- Compare the problem requirements with what the code is actually checking.

## Scoring

Correctly identifying the bug location: half marks
Fixing the bug completely: full marks
