# Student Grade Tracker

## Difficulty

Easy

## Language

C++

## Problem Statement

A student grade tracking utility is supposed to take a fixed list of 5 exam scores for a student,
compute the average, and print a formatted report with the correct letter grade.

However, the program contains multiple bugs spread across the source and header files. As a result,
it either crashes, produces a wrong average, or prints the wrong grade entirely.

Your task is to identify and fix all the bugs so that the program compiles cleanly and produces
the exact expected output shown below.

Expected output:

```txt
Student: Alice
Scores : 85 92 78 95 88
Average: 87.60
Grade  : B
```

## How to Run

```sh
g++ main.cpp -o grade_tracker
./grade_tracker
```

## Hint

- Doctor Strange once looked at 14 million futures. Your macro looked at the wrong number and didn't even flinch.
  Some sorcerer you are - check your constants, Kamar-Taj dropout.

- Pay close attention to macro definitions, loop boundaries, arithmetic types, and how the final result is shown.

## Scoring

- Correctly identifying the bug location: half marks
- Fixing the bug completely: full marks
