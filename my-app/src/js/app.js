import { LocalNotifications } from '@capacitor/local-notifications';
import { Share } from '@capacitor/share';
import { ScreenCapture } from '@capacitor/screen-capture';

document.getElementById('showTimeBtn').addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('timeDisplay').innerText = `Thời gian hiện tại: ${timeString}`;
});

document.getElementById('notifyBtn').addEventListener('click', async () => {
    const now = new Date().toLocaleTimeString();
    await LocalNotifications.schedule({
        notifications: [{
            title: 'Thông báo thời gian',
            body: `Thời gian hiện tại: ${now}`,
            id: Date.now(),
            schedule: { at: new Date(Date.now() + 1000) }
        }]
    });
});

document.getElementById('shareBtn').addEventListener('click', async () => {
    const now = new Date().toLocaleTimeString();
    await Share.share({
        title: 'Chia sẻ thời gian',
        text: `Thời gian hiện tại: ${now}`,
        dialogTitle: 'Chia sẻ với bạn bè'
    });
});

document.getElementById('screenshotBtn').addEventListener('click', async () => {
    try {
        await ScreenCapture.captureScreen();
    } catch (error) {
        console.error('Lỗi chụp màn hình:', error);
    }
});
