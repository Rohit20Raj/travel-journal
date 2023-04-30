// alert("Working...");
function theme(){
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });
}