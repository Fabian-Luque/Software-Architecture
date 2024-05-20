// struct : is a keyword that defines a structure types and/or a variable s structure type
struct SiglyListNode {
    int val;
    // pointer to the next node
    SiglyListNode *next;
    /*
    * SiglyListNode(int x) : Constructor
    * val(x) : initialization of member val with value of x
    * next(NULL) : initialization of member next with value of NULL
    **/
    SiglyListNode(int x) : val(x), next(NULL) {}
}