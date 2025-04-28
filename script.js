import { counter } from "./declarations/counter";

async function updateCount() {
    
    const current = await counter.get();
    document.getElementById('count').textContent = current;
}

async function increment() {
    await counter.increment();
    updateCount();
}

async function decrement() {
    await counter.decrement();
    updateCount();
}

async function reset() {
    await counter.reset();
    updateCount();
}


updateCount();
