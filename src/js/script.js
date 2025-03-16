document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".exclusive");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            let group = document.getElementsByName(this.name);
            group.forEach(item => {
                if (item !== this) item.checked = false;
            });
        });
    });
});