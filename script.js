let currentPopup = 1;

// ���� ���� ������� �������
function nextPopup(popupNumber) {
    document.getElementById(`popup${currentPopup}`).style.display = 'none';
    currentPopup = popupNumber;
    const next = document.getElementById(`popup${currentPopup}`);
    if (next) {
        next.style.display = 'block';
    }
}

// ���� ������ �� �������
function closePopups() {
    document.getElementById(`popup${currentPopup}`).style.display = 'none';
    currentPopup = 1;
}

// ��� ��� ������� ��������
function showPopups() {
    const firstPopup = document.getElementById('popup1');
    if (firstPopup) {
        firstPopup.style.display = 'block';
    }
}

// ����� ��� ������� ������
setTimeout(() => {
    showPopups();
}, 1000); // ����� ������ ����� �����
