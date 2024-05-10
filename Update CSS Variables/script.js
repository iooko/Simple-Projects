const inputs = document.querySelectorAll('.variables input');
function handleUpdate() {
    console.log(this.value)
}
inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))