import Node from "./node.class";
export default interface ILinkedList<T> {
    insertInBegin(data:T): Node<T>;
    insertAtEnd(data:T): Node<T>;
    deleteNode(node: Node<T>): void;
    traverse(): T[];
    size(): number;
    search(comparator: (data: T) => boolean): Node<T> | null;
}