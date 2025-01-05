document.getElementById('changeTextButton').addEventListener('click', function() {
    var heading = document.getElementById('heading');
    if (heading.textContent === 'Hello, World!') {
        heading.textContent = 'You changed the text!';
    } else {
        heading.textContent = 'Hello, World!';
    }
});
