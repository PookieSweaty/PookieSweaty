const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '6281248925250'
global.nomerowner = ["6281248925150"]

//watermark 
global.packname = 'Annisa Diatyz'
global.author = 'Pookie Sweaty'
global.foter1 = 'Pookie Sweaty - Annisa Diatyz'
global.foter2 = 'Pookie Sweaty - Annisa Diatyz'
global.foter3 = 'Pookie Sweaty'
global.foter4 = 'Annisa Diatyz'
global.idcennel = 'https://whatsapp.com/channel/0029Vaw8AxIKrWQw6UHhi71v'
global.thumb = 'https://files.catbox.moe/wmrb4i.jpg'
global.url = 'https://chat.whatsapp.com/E212kKbhpta9G4gQYNt4Sl'
//database 
global.urldb = 'mongodb+srv://nawdev01:putu0@botwa.q6bwloy.mongodb.net/?retryWrites=true&w=majority'; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'GataDios'

//mess
global.mess = {
    success: '𝐁𝖾𝗋ɦα𝗌𝗂ᥣ 𝐊α𝗄 💖',
    admin: '𝐊αꭑυ ᑲυ𝗄α𐓣 αᑯꭑ𝗂𐓣 😒',
    botAdmin: '𝐏ⱺⱺ𝗄𝗂𝖾 ᑲ𝖾ᥣυꭑ 𝗃αᑯ𝗂 αᑯꭑ𝗂𐓣 🥹',
    owner: '𝐊αꭑυ ᑲυ𝗄α𐓣 ⱺω𐓣𝖾𝗋 ρⱺⱺ𝗄𝗂𝖾 😡',
    group: '𝐇α𐓣𝗒α ᑲ𝗂𝗌α ᑯ𝗂 𝗀𝗋υρ 𝗄α𝗄 🙄',
    private: '𝐇α𐓣𝗒α ᑲ𝗂𝗌α ᑯ𝗂 𝖼ɦα𝗍 ρ𝗋𝗂ᑲαᑯ𝗂 𝗄α𝗄 😔',
    wait: '𝐓υ𐓣𝗀𝗀υ 𝐒𝖾ᑲ𝖾𐓣𝗍α𝗋 𝐊α𝗄 ⏱️',
    notregist: '𝐊αꭑυ 𝐁𝖾ᥣυꭑ 𝐓𝖾𝗋ᑯα𝖿𝗍α𝗋 𝐃𝗂 𝐃α𝗍αᑲα𝗌𝖾 𝐏ⱺⱺ𝗄𝗂𝖾, 𝐒𝗂ᥣαɦ𝗄α𐓣 𝐃α𝖿𝗍α𝗋 𝐓𝖾𝗋ᥣ𝖾ᑲ𝗂ɦ 𝐃αɦυᥣυ 🎀',
    premium: '𝐊ɦυ𝗌υ𝗌 ρ𝖾𐓣𝗀𝗀υ𐓣α ρ𝗋𝖾ꭑ𝗂υꭑ ✨',
    endLimit: '𝐋𝗂ꭑ𝗂𝗍 𝐇α𝗋𝗂α𐓣 𝐊αꭑυ 𝐓𝖾ᥣαɦ 𝐇αᑲ𝗂𝗌, 𝐋𝗂ꭑ𝗂𝗍 𝐀𝗄α𐓣 𝐃𝗂𝗋𝖾𝗌𝖾𝗍 𝐒𝖾𝗍𝗂αρ 𝐏υ𝗄υᥣ 00:00 𝐖𝚰𝐁.',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})