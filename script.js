document.addEventListener('keydown', function(e) {
    if (
        e.ctrlKey && 
        (e.key === 'c' || e.key === 'u' || e.key === 's')
    ) {
        e.preventDefault();
    }
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
