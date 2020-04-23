let sum = 0;
for (let i = 0; i < 200000000; i++) {
    sum += i
    if (i % 2000000 === 0) {
        postMessage({ progress: 1 })
    }
}

postMessage({ sum })