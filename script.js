document.addEventListener('DOMContentLoaded', () => {
        const modelViewer = document.querySelector('model-viewer');
        const arButton = document.getElementById('ar-button');

        // Make the button clickable and activate AR
        arButton.addEventListener('click', () => {
            if (modelViewer.activateAR) {
                modelViewer.activateAR()
                    .then(() => {
                        console.log("AR mode activated!");
                    })
                    .catch((error) => {
                        console.error("Failed to activate AR:", error);
                    });
            } else {
                console.warn("AR is not supported on this device.");
            }
        });
    });

