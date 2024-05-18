const rpc = require("discord-rpc");
const puppeteer = require('puppeteer');
const config = require('./config.js');

rpc.register(config.AppID);

const client = new rpc.Client({ transport: 'ipc' });

client.on('ready', () => {
  console.log('RPC çalışıyor!');

  const updateStatus = async () => {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto(config.url, { waitUntil: 'networkidle2' });

      // Ek bir bekleme süresi
      await new Promise(resolve => setTimeout(resolve, 2000));

      const heartRate = await page.evaluate(() => {
        const element = document.querySelector('p.heartrate');
        return element ? element.textContent.trim() : null;
      });

      await browser.close();

      if (heartRate && !isNaN(heartRate) && heartRate !== "0") {
        client.setActivity({
          details: `Kalp Atışı: ${heartRate} BPM`,
          state: config.aciklama || 'Durum güncelleniyor',
          largeImageKey: config.buyukResimAd,
          largeImageText: config.buyukResimYazi,
          smallImageKey: config.kucukResimAd,
          smallImageText: config.kucukResimYazi,
        });
        console.log(`Durum güncellendi Kalp Atışı: ${heartRate} BPM`);
      } else {
        console.log('Kalp atışı verisi bulunamadı veya geçersiz.');
      }
    } catch (error) {
      console.error('Kalp atış hızı verileri alınırken hata oluştu:', error);
    }
  };

  updateStatus();
  setInterval(updateStatus, 5000);
});

client.login({ clientId: config.AppID }).catch((error) => {
  throw error.message;
});
