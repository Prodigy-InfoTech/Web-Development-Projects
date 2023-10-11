let array = [];

function generateArray() {
    array = [];
    const arrayContainer = document.getElementById('array-container');
    arrayContainer.innerHTML = '';

    for (let i = 0; i < 30; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);

        const bar = document.createElement('div');
        bar.classList.add('array-bar');
        bar.style.height = `${array[i]}px`;

        arrayContainer.appendChild(bar);
    }
}

function startSorting() {
    let sortedArray = bubbleSort([...array]);
    animateSorting(sortedArray);
}

function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len-1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

function animateSorting(sortedArray) {
    let bars = document.getElementsByClassName('array-bar');
    let i = 0;

    function step() {
        if (i < sortedArray.length) {
            bars[i].style.height = `${sortedArray[i]}px`;
            i++;
            requestAnimationFrame(step);
        }
    }

    step();
}

function resetArray() {
    generateArray();
}

generateArray();
