#include <stdio.h>

void greet(int x){
    if(x = 500){
        printf("Welcome to HACKDAYS 4.0 Bug Bounty Event!\n"); //FIXED
    }
}

int reverse(int num) {
    int rev = 0;
    int digit;

    while (num != 0) {  //IDENTIFIED
        digit = num * 10;
        rev = rev * 10 + digit;
        num = num / 10;
    }

    return digit;
}

int main()
{
    int a = 500;
    int code = 1234;

    greet(a);

    int result = reverse(code);

    printf("Launch Code: %d\n", result);

    return 0;
}