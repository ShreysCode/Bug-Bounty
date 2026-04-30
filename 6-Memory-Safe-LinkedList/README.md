# Memory-Safe Linked List

## Difficulty

Hard

## Language

C

## Problem Statement

A developer wrote a singly linked list implementation in C to manage a roster of students for
TechFest 2026. Each node stores a student's ID, name, and score. The program is supposed to:

1. Build a linked list by appending 5 student records.
2. Print the list in insertion order.
3. Reverse the list in-place.
4. Print the reversed list.
5. Free all allocated memory cleanly.

Unfortunately, the code contains multiple bugs — some cause crashes, some cause silent data corruption,
and one causes incorrect output without any runtime error. Your job is to hunt them all down and
fix them so the program produces the exact expected output with no memory errors.

Expected output:

```txt
=== Original List ===
ID  | Name       | Score
----|------------|------
1   | Alice      | 85
2   | Bob        | 92
3   | Charlie    | 78
4   | Diana      | 95
5   | Eve        | 88

=== Reversed List ===
ID  | Name       | Score
----|------------|------
5   | Eve        | 88
4   | Diana      | 95
3   | Charlie    | 78
2   | Bob        | 92
1   | Alice      | 85
```

## How to Run

```sh
gcc main.c -o linked_list
./linked_list
```

For bonus validation, run with valgrind to confirm zero memory errors:

```sh
valgrind --leak-check=full ./linked_list
```

## Hint

- I allocate - bigly. The best malloc. But your sizeof is allocating like a bad negotiator - asking for less than it needs. Total rip-off. Alice deserves her full memory, not a discount.

- Not all bugs will cause an immediate crash — some will silently corrupt data or skip output. Read every function carefully. A wrong `sizeof`, a premature `free`, a skipped first node, and a buffer defined too small are among the things worth looking for.

## Scoring

- Correctly identifying the bug location: half marks
- Fixing the bug completely: full marks
