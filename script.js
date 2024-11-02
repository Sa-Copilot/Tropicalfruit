document.addEventListener("DOMContentLoaded", function() {
    let currentPopup = 1;
    const notificationSound = document.getElementById("notificationSound");
    const showPopup = (popupNumber) => {
        document.getElementById(`popup${popupNumber}`).style.display = 'block';
        notificationSound.play();
    };
    const hidePopup = (popupNumber) => {
        document.getElementById(`popup${popupNumber}`).style.display = 'none';
    };
    window.nextPopup = (nextNumber) => {
        hidePopup(currentPopup);
        currentPopup = nextNumber;
        showPopup(currentPopup);
    };
    window.closePopup = () => {
        hidePopup(currentPopup);
    };
    showPopup(currentPopup);
});

