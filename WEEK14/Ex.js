const selectedColorInput  = document.getElementById('Selectcolor')

selectedColorInput.addEventListener('input', 
    function() {
            const selectedColor = selectedColorInput.value;
            localStorage.setItem('selectedColor', selectedColor);
            document.body.style.backgroundColor = selectedColor;

    });

