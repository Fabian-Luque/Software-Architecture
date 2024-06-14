import { IHashTable } from "./HashTable.interface";
import { Node } from "../Node/Node.class";

export class HashTable<K extends string | number | symbol, V> implements IHashTable<K, V> {
    private buckets: Array<Node<K, V> | null>;
    private _size: number;
    
    constructor(private capacity: number = 16) {
        this.buckets = new Array<Node<K ,V> | null>(capacity).fill(null);
        this._size = 0;
    }

    private hash(key: K): number {
        let hash = 0;
        const keyStr = key.toString();
        for (let i = 0; i < keyStr.length; i++) {
            hash = (hash << 5) - hash + keyStr.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash) % this.capacity;
    }

    put(key: K, value: V): void {
        const index = this.hash(key);
        let current = this.buckets[index];

        if (!current) {
            this.buckets[index] = new Node(key, value);
            this._size++;
            return;
        }

        while (current) {
            if (current.key === key) {
                current.value = value;
                return;
            }

            if (!current.next) {
                current.next = new Node(key, value);
                this._size++;
                return;
            }

            current = current.next;
        }
    }

    get(key: K): V | undefined {
        const index = this.hash(key);
        let current = this.buckets[index];

        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined;
    }

    remove(key: K): V | undefined {
        const index = this.hash(key);
        let current = this.buckets[index];
        let prev: Node<K, V> | null = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.buckets[index] = current.next;
                }
                this._size--;
                return current.value;
            }
            prev = current;
            current = current.next;
        }

        return undefined;
    }

    containsKey(key: K): boolean {
        return this.get(key) !== undefined;
    }

    size(): number {
        return this._size;
    }

    clear(): void {
        this.buckets.fill(null);
        this._size = 0;
    }


}