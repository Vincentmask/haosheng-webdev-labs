// Exercise #1: Click Event - Copy text on button click
document.getElementById('copy').addEventListener('click', () => {
    const userInput = document.getElementById('userInput1').value;
    document.querySelector('.output').textContent = userInput;
});

// Exercise #2: Input Event - Live update output as user types
document.getElementById('userInput2').addEventListener('input', (event) => {
    const outputParagraph = document.createElement('p');
    outputParagraph.textContent = event.target.value;

    const section = document.getElementById('inputEventExample');
    const existingOutput = section.querySelector('p.output-text');

    if (existingOutput) {
        existingOutput.textContent = event.target.value;
    } else {
        outputParagraph.classList.add('output-text');
        section.appendChild(outputParagraph);
    }
});
