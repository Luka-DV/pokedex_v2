
export type CacheEntry<T> = {
    createdAt: number, //Date.now();
    val: T // obj we are caching
}

export class Cache {
    private cache = new Map<string, CacheEntry<any>>();

    add<T>(key: string, val: T) {
        this.cache.set(key, {createdAt: Date.now(), val: val})
    }
} 
