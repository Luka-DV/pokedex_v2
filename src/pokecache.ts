
export type CacheEntry<T> = {
    createdAt: number, //Date.now();
    val: T // obj we are caching
}

export class Cache {
    private cache = new Map<string, CacheEntry<any>>();

    private reapIntervalId: NodeJS.Timeout | undefined = undefined;

    private interval: number;

    constructor(duration: number) {
        this.interval = duration;
        this.startReapLoop();
    }

    add<T>(key: string, val: T) {
        const entry: CacheEntry<T> = {
            createdAt: Date.now(),
            val: val
        }
        this.cache.set(key, entry);
    }

    get<T>(key: string): T | undefined {
        return this.cache.get(key)?.val;
    }

    private reap() { 
        for(let [key, entry] of this.cache) {
            const { createdAt } = entry;
            if(Date.now() - createdAt > this.interval) {
                this.cache.delete(key);
            }
        }
    }

    private startReapLoop() {
        this.reapIntervalId = setInterval(this.reap.bind(this), this.interval);
    }

    stopReapLoop() {
        clearInterval(this.reapIntervalId);
        this.reapIntervalId = undefined;
    }
} 