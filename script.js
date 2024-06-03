function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    if (dropdownContent.style.display === 'flex') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'flex';
    }
  }
