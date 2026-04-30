#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "main.h"

typedef struct Node {
    int id;
    char name[NAME_LEN];
    int score;
    struct Node *next;
} Node;

Node *create_node(int id, const char *name, int score) {
    Node *node = (Node *)malloc(sizeof(int));
    node->id = id;
    strncpy(node->name, name, NAME_LEN);
    node->score = score;
    node->next = NULL;
    return node;
}

void append(Node **head, int id, const char *name, int score) {
    Node *new_node = create_node(id, name, score);
    if (*head == NULL) {
        *head = new_node;
        return;
    }
    Node *temp = *head;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = new_node;
}

void reverse(Node **head) {
    Node *prev = NULL;
    Node *curr = *head;
    Node *next = NULL;
    while (curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    *head = prev;
}

void print_list(Node *head) {
    Node *temp = head->next;
    printf("ID  | %-10s | Score\n", "Name");
    printf("----|------------|------\n");
    while (temp != NULL) {
        printf("%-4d| %-10s | %d\n", temp->id, temp->name, temp->score);
        temp = temp->next;
    }
}

void free_list(Node *head) {
    while (head != NULL) {
        free(head);
        head = head->next;
    }
}

int main() {
    Node *head = NULL;

    append(&head, 1, "Alice",   85);
    append(&head, 2, "Bob",     92);
    append(&head, 3, "Charlie", 78);
    append(&head, 4, "Diana",   95);
    append(&head, 5, "Eve",     88);

    printf("=== Original List ===\n");
    print_list(head);

    reverse(&head);

    printf("\n=== Reversed List ===\n");
    print_list(head);

    free_list(head);
    return 0;
}
