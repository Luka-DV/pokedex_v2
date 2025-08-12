
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
        this.cache.set(key, {createdAt: Date.now(), val: val})
    }

    get<T>(key: string) {
        return this.cache.get(key)?.val;
    }

    private reap() { 
        for(let [key, entry] of this.cache) {
            const { createdAt } = entry;
            if(createdAt < Date.now() - this.interval) {
                this.cache.delete(key);
            }
        }
    }

    private startReapLoop() {
        this.reapIntervalId = setInterval(this.reap.bind(this), this.interval);
        //fix issue
    }

    stopReapLoop() {
        clearInterval(this.reapIntervalId);
        this.reapIntervalId = undefined;
    }
} 