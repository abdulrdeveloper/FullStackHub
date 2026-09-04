let dragDiv = null;

export default function DragAndDrop() {

    document.addEventListener('dragstart', (event) => {
        if (event.target.classList.contains('task')) {
            dragDiv = event.target;
        }
    })

    document.addEventListener('dragover', (event) => {
        const closestColumn = event.target.closest(".tasks");
        if (closestColumn && dragDiv) {
            event.preventDefault();
        }
    })

    document.addEventListener("drop", (event) => {
        const closestDiv = event.target.closest(".tasks");
        if (closestDiv && dragDiv) {
            closestDiv.appendChild(dragDiv);
            dragDiv = null;
        }
    });

}
