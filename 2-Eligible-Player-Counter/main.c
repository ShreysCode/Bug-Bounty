#include <stdio.h>

int count_eligible(int arr[], int n) {
    int count = 0;

    for (int i = 0; i < n; i++) {
        if (arr[i] >= 50 || arr[i] <= 100) { 
            count++;
        }
    }

    return count;
}

int main() {
    int scores[5] = {45, 55, 60, 30, 110};

    int eligible = count_eligible(scores, 3); //FIXED

    if (eligible > 3) { 
        printf("Qualified\n");
    } else {
        printf("Not Qualified\n");
    }

    return 0;
}