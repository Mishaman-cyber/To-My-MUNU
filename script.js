document.getElementById('showPopup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Hide popup after 3 seconds
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000);
});
