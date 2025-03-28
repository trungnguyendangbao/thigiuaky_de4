document.getElementById('show-time').addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time-display').textContent = timeString;
});

document.getElementById('notify-time').addEventListener('click', () => {
    alert(`Bây giờ là: ${new Date().toLocaleTimeString()}`);
});

document.getElementById('share-time').addEventListener('click', () => {
    const timeString = new Date().toLocaleTimeString();
    navigator.clipboard.writeText(timeString).then(() => {
        alert('Thời gian đã được sao chép vào clipboard!');
    }).catch(err => {
        console.error('Lỗi sao chép:', err);
    });
});

document.getElementById('screenshot').addEventListener('click', () => {
    alert('Tính năng chụp màn hình cần Capacitor plugin, nhưng đây là phiên bản mô phỏng.');
});
