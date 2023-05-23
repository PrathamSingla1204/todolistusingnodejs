const toggleButtons = document.querySelectorAll('.togglebutton');

// adding an event listener to each toggle button
toggleButtons.forEach(toggleButton => {
  toggleButton.addEventListener('change', function() {
    // get the task element associated with the toggle button
    const task = this.parentElement.querySelector('#task');
    // if the toggle button is checked, add a line-through text decoration to the task
    if (this.checked) {
      task.style.textDecoration = 'line-through';
    } else {
      // if the toggle button is not checked, remove the line-through text decoration from the task
      task.style.textDecoration = 'none';
    }
  });
});
