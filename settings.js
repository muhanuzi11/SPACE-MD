require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJ0xBVs4jaDETwQAAG0HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rFGEEUxIiOWC4iqI3QitBu7EMBBRb3hgKECf99A3t6eh52Z3t5KrIyMk*mOae+g7zANdqhHqy+g7LCLSRoPJK+RGAFpCYMUQUmIIAEghWYSeZtK84kxKlWslPUfMmaDr2kbe9Np5N6XYgyp1NTYZvZT+A+AWXjpdj*TUH31i1ecTRwrREtbC+4XXbdFS0orKqsxKx9sp2R4WiI0Yl+AvexIsQVzqN1eUUZqmC6Q70JcfU1+LTYeV3xRp375pIHimO2SUXvTYryh9hpOieuhCkfu66nrr8GX7f64SaHtUoPSq7va85WpoN+GYwr2gxtWx8aIm5gR0HVeodf4yhHgR6gnGDSf3nv0FBP6gJtjnSToUAydMNTXelkKP7J0hw10baOYyw8UZvpXwN+VeaCpSTDDRbVudud1HDoEzo+trwStYroxJ4arV1p6sjir8DN6kMryf*Z+3H9GmwcfzAau2MCXxyYK5kSVbPOl4X+dmibJvOt+Xyf2t3X4DOJFbBv*tFkGI*Xlxd9uMDd1tuYu0oPTNrPKSIuqSTiTsknfEia6ncoy*4SZH2s0jvLWeYOc0mIzWGbsmDsBOnwphytwtBmiyBJZnEv94QNeO4Sx+sbEl4PzYsFBTfinuc+PNh+FyyPom7E0dNjogT1egBWzH0CKhThmlSQ4CIfY0tmAmDQHpFfIfLYLhDFztvP4K3Kak0udEqPjFsxX8+vXORs8d6chc11GCo3FrsnMAFlVfiorlGg4ZoUVf+M6hpGqAarP*+agBzdyDtvYzeWmYAQVzWx86ZMCxh8kPpxCX2*aHJy7HNfHg+oAiv6M4wIwXlUj2tsclj5V9wi+QpJDVYhTGv0c0BUoQCsSNWgn6aVi2Dc+4nlZM3SzmACsgcfOBiflgXHCzRLswItrNg*6m*dWBWW5bccETAB6SOL4ZdLgVkIC46ZCWPeGL7*hDdWCxCBOK3BCsgH57UOLXl98KRbbW024joS5UgEn+N8yOJ97w5+uZwi84Vz3xC9RQKiEgpfZV5iCtu1Ure+7CxFO+5yOnn6hyKjUVnparzmkXFhM+pG2CybNuq2287n+0OsLxsqlfjZzvZn4uAPWwbBQtBPz+dm2UMla8NXCPeHrakv2+tJu65j+nnq7SXxaewWoBb76NdmAo1EbROF86jvlJI+y5Tp8rnOvBgpYXzX0OJ14aUmNcQHY+ahkq+yXJNDVj8tbTzE2Rqz6o2XvMIr5iIzLPKOCz8E+zBM+uOhwg8tjUSNvyFGD9*ncKTvP4l7xz3Ki75Pfinx4yH5FzNK5yJx7LlCo5TLiey2bluaRWE1XQBVld6e+c0xEW80LoUtuN**moAyhSQsqmxkIQ+qAgdgAqqiGfWq52Hxm2aypOvij8FTWBPx0wMnnKGawKwEK4ZfzFl+zvL8e5ZZFaUG6ytYATYy7W0yCroXy*JIIPmwFBDHT7lY4P43UEsBAhQDFAAACAgAnTEFWziNoMRPBAAAbQcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '256790303909',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'muhanuzi11',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
