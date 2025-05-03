function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch {
      alert('Invalid Expression');
      clearDisplay();
    }
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
  
  // Keyboard support
  document.addEventListener('keydown', function (e) {
    const allowedKeys = '0123456789+-*/.';
    if (allowedKeys.includes(e.key)) {
      appendValue(e.key);
    } else if (e.key === 'Enter') {
      calculate();
    } else if (e.key === 'Backspace') {
      const display = document.getElementById('display');
      display.value = display.value.slice(0, -1);
    } else if (e.key === 'Escape') {
      clearDisplay();
    }
  });
  