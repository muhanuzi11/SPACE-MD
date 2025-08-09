require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAEBTCVto01GNaAQAAIMHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9lY162QeNkZtyieiIQeSmqKh4oTfmoYACEQSkChAm*PcN7Onpedid7eWpSIrMk+eczO8gy2OMFqgF0ndQlHENCeqPpC0QkMC0CkNUgiEIIIFAAruFthHUslWYwU3hykq5u6o1O+Ja3YrLcHe7HqduJXdsoUUv4DEEReWlsf+bhIvXYiRGg1bj9pQRVRFlp*bpUiGbgcVhkjPd6znl2dY0T5sX8OgzwriMs0gtzuiKSpguUGvDuPwc*NsscFkFxTgs3LTx8cGzlFVI9hNumsSyViY2l*vJzFqc3M*BVzNNNhHDXGby2dpGjjEqhNxOj4SfG157j7MwSAbTSdju1Df4OI4yFJgBykhM2k*z3tg027k6466czi*kKp3pajuFAw1Tr7XubPfbNUoCZZWkwueAK90x8vXA74xJcJIPDX8inItbPdDNiwvDVXW7tBbxt1uG+hW4Xb57Jfk*vAsLKyx2PMMsvdVeY0laiUnEH7XWyUbKptZmQrBCFp10mvo5+LVHGmugxTu0TQ977eTDY7ldi+qu5fLl3uymJi3M955h09wHfEiq8rfuuPrUCO0ISvkLXYe46ywjm66m*Glh2NRJKA9UFDTLJsMU5V3X2cKk5olRwJlWzkRHU17XCzF3G7+bhIi9TPLU9NNL8*LsKEGtGQCJfgxBiaIYkxKSOM*6GMOwQwCDeof8EpEnvWDDbRiTqLS5dgYlNpbNnI*c1e14PotZ1wjnIKpiwQzEQ2i+gCEoytxHGKPAiDHJy3aJMIYRwkD669sQZOhO3oTry7H0EIRxick+q4o0h8G7qu8foe*nVUZ2beYr*QGVQKI+woiQOItwz2OVwdI*xzVSzpBgIIUwxehnh6hEAZBIWaGfU6vkQU*8ZLZUnA1tgyG4PgWJAyABZjzhuTFH0zQlSPRX*KXps8Ki+JIhAoYgg*1lIE*VrfOHLs901flzB4Ygff7NCyzF0BNxPBZpkZXor3348RN2XyVABMYp7t2*zu6ZEBmqZavscqPrshrJSiSDjzbf*fKmB4edo7h2oLqKRrdR1GmHsdAZKu96legg7+65TcVEy9Xqkrz8QxIgAc8*C60yyMcBBXNZniwHvLWVq4vPHfa35ibeJr41H6AZFutuupNHdFZSBj8l7HqwTHPdO00SxmFjxmXXtXUV2JggT5Ff+moBqmMf*VqsrdaTRufPAq3Yo2Zh5yIna*hqnF5xHZ+PIj7PM02nXLxiuwEzOBKGxPgy1dGGsYVUCz1yM2JqvGejjfN62buX8CJGmzcnPycp*bHB4qfHegH71zBGz4XwQ6n*EvQNd2876jH8JcWPDfMvUzpFlkrXTsKcZ649qbnl*YDC5f2+ZnS+3rNX4cgsLZLPZo47Bo*HtyEoUkjCvLwCCeCrB8EQlHnVm9jMwvx3O1KmzCfFjyFIISbyx2A48RVhAq8FkGh+zPHsmB6Lb7fsMi8MiM9AAmxk7+dJ7*JWLoodgeR9zoDcP*MDDR5*A1BLAQIUAxQAAAgIAEBTCVto01GNaAQAAIMHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAJAEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
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
