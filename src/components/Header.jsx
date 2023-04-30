export default function Header() {
    function theme(){
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', () => {
        // document.body.classList.toggle('dark');
        alert("Working..");
    });
}
    return (
        <div className="header">
            <div className="navbar">
                <img src="/images/globe.svg" />
                <span>My Travel Journal</span>
            </div>
            <div className="theme">
                <input type="checkbox" class="checkbox" id="checkbox" />
                <label for="checkbox" class="label">
                    <i class="fas fa-moon"></i>
                    <i class='fas fa-sun'></i>
                    <div class='ball'></div>
                </label>
            </div>
        </div>
    )
}