export interface IHashTable<K extends string | number | symbol, V> {
    put(key: K, value: V): void;
    get(key: K): V | undefined;
    remove(key: K): void;
    containsKey(key: K): boolean;
    size(): number;
    clear(): void;
}