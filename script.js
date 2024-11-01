let currentPopup = 1;

// ַֿבֹ בÚׁײ ַבהַÝ׀ֹ ַבÊַבםֹ
function nextPopup(popupNumber) {
    document.getElementById(`popup${currentPopup}`).style.display = 'none';
    currentPopup = popupNumber;
    const next = document.getElementById(`popup${currentPopup}`);
    if (next) {
        next.style.display = 'block';
    }
}

// ַֿבֹ בֵÛבַÞ ßב ַבהזַÝ׀
function closePopups() {
    document.getElementById(`popup${currentPopup}`).style.display = 'none';
    currentPopup = 1;
}

// ֱָֿ Úׁײ ַבהזַÝ׀ ַָבÊÊַָÚ
function showPopups() {
    const firstPopup = document.getElementById('popup1');
    if (firstPopup) {
        firstPopup.style.display = 'block';
    }
}

// Êֳ־םׁ Úׁײ ַבהַÝ׀ֹ ַבֳזבל
setTimeout(() => {
    showPopups();
}, 1000); // Êֳ־םׁ ָדÞַֿׁ ַֻהםֹ זַֹֽֿ
