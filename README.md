# Discord HeartRate Status

# Önemli Not
Saatinizdeki program hep açık kalmalı uygulamanın ekranında durmalı bunu kullanmak istiyorsanız.

# Destek & Yardım için:
 [![Discord Presence](https://lanyard-profile-readme.vercel.app/api/474917640066826240?theme=light&bg=809ecf&animated=false&hideDiscrim=true&borderRadius=30px&idleMessage=Probably%20doing%20something%20else...)](https://discord.com/users/474917640066826240)

# Gerekli Programlar
- Node
https://nodejs.org/en/download/prebuilt-installer

- NotePad++
https://notepad-plus-plus.org/download/

# Kurulum Öncesi
1- https://www.hyperate.io/ linkinden uygulamayı saatinize indirin ve çalıştırın.

2- Get your ID tuşuna tıklayın ve IDyi bir yere yazın.

3- Yazdığınız IDyi https://app.hyperate.io/ID ID yazan yere yazın ve bunu bir yere kopyalayın.

# Kurulum
1- İndirdikten sonra dosyaları zipten çıkarın.

2- Zipten çıkarttığınız klasörün içine sağ tıklayıp terminalde aç kısmına tıklayın

3- "npm i" yazın ve indirmesini bekleyin.

4- Ardından https://discord.com/developers/applications sitesine girin.

5- New Application tuşuna tıklayın uygulamanıza isim verin bu isim durum kısmında gözükecek isim. Oluşturduktan sonra alttaki application id kısmını bir yere kopyalayın.

6- Sol taraftaki "Rich Presence" tuşuna basın. Ordan 

7- En altta bulunan yerden large ve small fotoğraf yükleyin. (yüklerken onlara birer isim koyun ve "Upload Asset"e basın)

8- Application IDyi config.js dosyasında bulunan "appid" kısmının önüne koyun.

9- Yazıları düzenlemek için "config.js" dosyasını açın.

10 - Son olarak onları değiştirip kaydettikten sonra "başlat.bat" dosyasına çift tıklayın ve çalıştırın.

# config.json'da Bulunan Yazıların Anlamları
- "url" : hyperate urlniz buraya gelecek
- "AppID": oluşturduğumuz application'un ID'si.
 - "aciklama": ikinci satırda yazacak olan mesaj.
 - "buyukResimAd": large (büyük) olarak yüklediğimiz fotoğrafa koyduğumuz ad.
 - "kucukResimAd": small (küçük) olarak yüklediğimiz fotoğrafa koyduğumuz ad.
 - "buyukResimYazi": large (büyük) resime imleç geldiğinde yazacak olan mesaj.
 - "kucukResimYazi": small (küçük) resime imleç geldiğinde yazacak olan mesaj.


 # Credit

Projenin temelini burdan aldım üzerine kalp atış sistemini entegre ettim.
https://github.com/erenozer/Discord-RPC-Maker/
