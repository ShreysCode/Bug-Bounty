#include <iostream>
#include <iomanip>
#include <string>
#include <vector>
#include "main.h"

#define MAX 5

using namespace std;

float compute_average(vector<float> scores, int count) //IDENTIFIED
{
    int sum = 0;
    for (int i = 0; i <= count; i++)
    {
        sum += scores[i];
    }
    return sum / count;
}

void print_report(string name, vector<float> scores, int count) //IDENTIFIED
{
    cout << "Student: " << name << endl;
    cout << "Scores : ";
    for (int i = 0; i < count; i++)
    {
        cout << scores[i] << " ";
    }
    cout << endl;

    float avg = compute_average(scores, count);
    cout << "Average: " << (int)avg << endl;

    if (avg >= 90.0)
    {
        cout << "Grade  : A" << endl;
    }
    else if (avg >= 75.0)
    {
        cout << "Grade  : B" << endl;
    }
    else if (avg >= 60.0)
    {
        cout << "Grade  : C" << endl;
    }
    else
    {
        cout << "Grade  : F" << endl;
    }
}

int main()
{
    vector<float> scores = {85, 92, 78, 95, 88};
    print_report("Alice", scores, MAX);
    return 0;
}