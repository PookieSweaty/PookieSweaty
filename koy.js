require('./setting')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("./lib/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const ytdl = require("ytdl-core")
const yts = require("yt-search")
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { bytesToSize, checkBandwidth, formatSize, getBuffer, isUrl, jsonformat, nganuin, pickRandom, getRandom, runtime, shorturl, formatp, color, getGroupAdmins } = require("./lib/myfunc");
const { addExif } = require('./lib/exif')
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')

const tictactoe = [];
const kuis = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakgame ={}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}


module.exports = koy = async (koy, m, chatUpdate, store) => {
try {
const body = (m && m?.mtype) ? (
m?.mtype === 'conversation' ? m?.message?.conversation :
m?.mtype === 'imageMessage' ? m?.message?.imageMessage?.caption :
m?.mtype === 'videoMessage' ? m?.message?.videoMessage?.caption :
m?.mtype === 'extendedTextMessage' ? m?.message?.extendedTextMessage?.text :
m?.mtype === 'buttonsResponseMessage' ? m?.message?.buttonsResponseMessage?.selectedButtonId :
m?.mtype === 'listResponseMessage' ? m?.message?.listResponseMessage?.singleSelectm?.reply?.selectedRowId :
m?.mtype === 'templateButtonm?.replyMessage' ? m?.message?.templateButtonm?.replyMessage?.selectedId :
m?.mtype === 'messageContextInfo' ? (
m?.message?.buttonsResponseMessage?.selectedButtonId || 
m?.message?.listResponseMessage?.singleSelectm?.reply?.selectedRowId || 
m?.text
) : ''
) : '';
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await koy.decodeJid(koy.user.id);
const isCreator = (m && m?.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const isRegistered = checkRegisteredUser(m.sender)
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const text = q = args.join(" ");
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m?.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
//group
const groupMetadata = m?.isGroup ? await koy.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata?.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata?.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata?.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const Owner = global.owner + '@s.whatsapp.net'
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))//baru
const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
//BATAS
//BATAS
koy.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await koy.getName(i),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await koy.getName(i + '@s.whatsapp.net')}\n
FN:${await koy.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: annisadiatyz.official@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://msha.ke/annisadiatyz#links\n
item3.X-ABLabel:GitHub\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
koy.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}
//BATAS
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏞️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//================== [ DATABASE ] ==================//
const totalFitur = () =>{
var mytext = fs.readFileSync("./koy.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}
const ytmp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, {
filter: 'audioonly'
}).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await koy.sendMessage(m.chat, {
audio: fs.readFileSync(mp3File),
mimetype: 'audio/mp4'
}, {
quoted: m
})
})
} catch (err) {
reply(`${err}`)
}
}
//Download Mp3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await koy.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
} else global.db.data.users[m?.sender] = {
}

 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 if (!('antilink' in chats)) chats.antilink = false
 if (!('antilinkv2' in chats)) chats.antilinkv2 = false
 } else global.db.data.chats[m?.chat] = {
 isBanned: false,
 antilink: false,
 antilinkv2: false
}


let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
}
} catch (err) {
}

if (!db.data.settings[botNumber].public) {
if (!isOwner) return
}
async function loading() {
var loadd = [
    "𝐀𝗄υ",
    "𝐏ⱺⱺ𝗄𝗂𝖾",
    "𝐒ω𝖾α𝗍𝗒",
    "𝐏𝗂𐓣𝗄𝗄𝗒 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒 "
  ];
let { key } = await koy.sendMessage(m.chat, {text: '𝐑αω𝗋𝗋𝗋𝗋𝗋♡'})//Pengalih Isu

for (let i = 0; i < loadd.length; i++) {
await koy.sendMessage(m.chat, {text: loadd[i], edit: key })}
}
//================== [ FUNC BANCHAT ] ==================//
if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
let chat = global.db.data.chats[m?.chat]
if (chat && chat.isBanned && !isOwner) return
}

if (db.data.settings[botNumber].autoread) { koy.readMessages([m?.key]) }

if (db.data.chats[m?.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
koy.sendMessage(m?.chat, {react: {text: `❌️`,key: m?.key,}})
if (!isBotAdmins) return
let gclink = (`https://chat.whatsapp.com/` + await koy.groupInviteCode(m?.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m?.text)
if (isgclink && isOwner && isAdmins) return
koy.groupParticipantsUpdate(m?.chat, [m?.sender], 'remove')
}}
if (db.data.chats[m?.chat].antilinkv2) {
if (budy.match(`chat.whatsapp.com`)) {
koy.sendMessage(m?.chat, {react: {text: `❌️`,key: m?.key,}})
if (!isBotAdmins) return
let gclink = (`https://chat.whatsapp.com/` + await koy.groupInviteCode(m?.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m?.text)
if (isgclink && isOwner && isAdmins) return
koy.sendMessage(m?.chat, { delete: m?.key })
}}

switch(command) {
//=================================================//
///            ///
case "cekidgc": {
if (!isOwner) return m.reply(mess.owner)
let getGroups = await koy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ 𝐋𝚰𝐒𝐓 𝐆𝐑𝐎𝐔𝐏 𝐁𝐘 𝐀𐓣𐓣𝗂𝗌α 𝐃𝗂α𝗍𝗒ƶ\n\n𝐓ⱺ𝗍αᥣ 𝐆𝗋ⱺυρ : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await koy.groupMetadata(x)
teks += `◉ 𝐍αꭑα : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ 𝐌𝖾ꭑᑲ𝖾𝗋 : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
m.reply(teks + `𝐔𐓣𝗍υ𝗄 𝐏𝖾𐓣𝗀𝗀υ𐓣αα𐓣 𝐒𝗂ᥣαɦ𝗄α𐓣 𝐊𝖾𝗍𝗂𝗄 𝐂ⱺꭑꭑα𐓣ᑯ ${prefix}ρυ𝗌ɦ𝗄ⱺ𐓣𝗍α𝗄 𝗂ᑯ|𝗍𝖾𝗄𝗌\n\n𝐒𝖾ᑲ𝖾ᥣυꭑ 𝐌𝖾𐓣𝗀𝗀υ𐓣α𝗄α𐓣 𝐒𝗂ᥣαɦ𝗄α𐓣 𝐒αᥣ𝗂𐓣 𝐃υᥣυ 𝚰ᑯ`)
}
break
////
case "public": {
if (!isOwner) return m.reply(mess.owner)
koy.public = true
m.reply(`*𝐏ⱺⱺ𝗄𝗂𝖾 υᑯαɦ ᑲ𝗂𝗌α ᑯ𝗂 ρα𝗄α𝗂 ρυᑲᥣ𝗂𝗄 ✨*`)
}
break
case "self": {
if (!isOwner) return m.reply(mess.owner)
koy.public = false
m.reply(`*𝐏ⱺⱺ𝗄𝗂𝖾 ɦα𐓣𝗒α ᑲ𝗂𝗌α ᑯ𝗂 𝗀υ𐓣α𝗄α𐓣 𝗌αꭑα ⱺω𐓣𝖾𝗋 ✨*`)
}
break
case 'addprem':
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`ρα𝗄α𝗂 ${prefix+command} 𐓣ⱺꭑⱺ𝗋\n𝖼ⱺ𐓣𝗍ⱺɦ ${prefix+command} 62xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await koy.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`𝐌α𝗌υ𝗄𝗄α𐓣 𐓣ⱺꭑⱺ𝗋 𝗒α𐓣𝗀 𝗏αᥣ𝗂ᑯ ᑯα𐓣 𝗍𝖾𝗋ᑯα𝖿𝗍α𝗋 ᑯ𝗂 𝐖ɦα𝗍𝗌𝐀ρρ!!!`)
premium.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply(`𝐍ⱺꭑⱺ𝗋 𝗂𐓣𝗂 ${prrkek} 𝗍𝖾ᥣαɦ ꭑ𝖾𐓣𝗃αᑯ𝗂 ρ𝗋𝖾ꭑ𝗂υꭑ!`)
break
case 'delprem':
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`ρα𝗄α𝗂 ${prefix+command} 𐓣ⱺꭑⱺ𝗋\n𝖼ⱺ𐓣𝗍ⱺɦ ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply(`𝐍ⱺꭑⱺ𝗋 𝗂𐓣𝗂 ${ya} 𝗍𝖾ᥣαɦ ᑯ𝗂 𝖼αᑲυ𝗍 ρ𝗋𝖾ꭑ𝗂υꭑ 𐓣𝗒α`)
break
case 'addowner':
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`ρα𝗄α𝗂 ${prefix+command} 𐓣ⱺꭑⱺ𝗋\n𝖼ⱺ𐓣𝗍ⱺɦ ${prefix+command} 62xxx`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await koy.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`𝐌α𝗌υ𝗄𝗄α𐓣 𐓣ⱺꭑⱺ𝗋 𝗒α𐓣𝗀 𝗏αᥣ𝗂ᑯ ᑯα𐓣 𝗍𝖾𝗋ᑯα𝖿𝗍α𝗋 ᑯ𝗂 𝐖ɦα𝗍𝗌𝐀ρρ!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`𝐇α𝗂 ⱺω𐓣𝖾𝗋 ᑲα𝗋υ ρⱺⱺ𝗄𝗂𝖾 ${bnnd} 𝗋αωα𝗍 α𝗄υ ᑯ𝖾𐓣𝗀α𐓣 ᑲα𝗂𝗄 𝗒α (⁠｡⁠•́⁠︿⁠•̀⁠｡⁠)♡`)
break
case 'delowner':
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`ρα𝗄α𝗂 ${prefix+command} 𐓣ⱺꭑⱺ𝗋\n𝖼ⱺ𐓣𝗍ⱺɦ ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`𝐌αα𝖿 𝗒α ${ya} 𝗄αꭑυ ᑲυ𝗄α𐓣 ⱺω𐓣𝖾𝗋𝗄υ ᥣα𝗀𝗂`)
break
case 'listpremium': case 'listprem':
teks = '*𝐏𝗋𝖾ꭑ𝗂υꭑ 𝐋𝗂𝗌𝗍*\n\n'
for (let koy of premium) {
teks += `- ${koy}\n`
}
teks += `\n*𝐓ⱺ𝗍αᥣ : ${premium.length}*`
koy.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
break
case 'listowner': case 'listown':
teks = '*𝐃α𝖿𝗍α𝗋 ⱺω𐓣𝖾𝗋 ρⱺⱺ𝗄𝗂𝖾*\n\n'
for (let kontol of owner) {
teks += `- ${kontol}\n`
}
teks += `\n*𝐓ⱺ𝗍αᥣ : ${owner.length}*`
koy.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": owner } })
break
case 'Diatyz':
case 'owner': case 'creator': {
await koy.sendContact(m.chat, owner.map( i => i.split("@")[0]), m)
koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/pakoy12.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})     
}
break
case "tes": case "bot":{
m.reply('𝐏ⱺⱺ𝗄𝗂𝖾 𝐎𐓣ᥣ𝗂𐓣𝖾 𝐊α𝗄 ଘ(੭ˊᵕˋ)੭♡')
}
break
case "ownermenu":{
await loading()
const tek = `*𝐇α𝗂* @${m?.sender.split('@')[0]}
𝐏𝖾𝗋𝗄𝖾𐓣αᥣ𝗄α𐓣 𐓣αꭑα𝗄υ 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒
૮₍ ˃ ⤙ ˂ ₎ა
./づᡕᠵ᠊ᡃ່࡚ࠢ࠘ ⸝່ࠡࠣ᠊߯᠆ࠣ࠘ᡁࠣ࠘᠊᠊ࠢ࠘~~~~♡

➷「 *𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔* 」➹
│ ♡  ${prefix}𝗌𝖾ᥣ𝖿
│ ♡  ${prefix}ρυᑲᥣ𝗂𝖼
│ ♡  ${prefix}𝗃ⱺ𝗂𐓣
│ ♡  ${prefix}αᑯᑯⱺω𐓣𝖾𝗋
│ ♡  ${prefix}ᑯ𝖾ᥣⱺω𐓣𝖾𝗋
│ ♡  ${prefix}𝗀𝖾𝗍ᑯᑲ
│ ♡  ${prefix}𝗀𝖾𝗍𝖼α𝗌𝖾
│ ♡  ${prefix}αᑯᑯρ𝗋𝖾ꭑ
│ ♡  ${prefix}ᑯ𝖾ᥣρ𝗋𝖾ꭑ
│ ♡  ${prefix}ᑲ𝖼𝗀𝖼
│ ♡  ${prefix}ᥣ𝖾α𝗏𝖾
│ ♡  ${prefix}αᑯᑯ𝖼α𝗌𝖾
│ ♡  ${prefix}ᑯ𝖾ᥣ𝖼α𝗌𝖾
│ ♡  ${prefix}ᑲα𝖼𝗄υρ
╰──────────────━
𝐊ɦυ𝗌υ𝗌 ρ𝖾ꭑ𝗂ᥣ𝗂𝗄 ρⱺⱺ𝗄𝗂𝖾, 𝐊αᥣαυ ᑲυ𝗄α𐓣 ⱺω𐓣𝖾𝗋 𝗀α ᑲ𝗂𝗌α!
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363362443390977@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/diatyz.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
/////
case "grupmenu":
case "groupmenu":{
await loading()
const tek = `*𝐇α𝗂* @${m?.sender.split('@')[0]}
𝐏𝖾𝗋𝗄𝖾𐓣αᥣ𝗄α𐓣 𐓣αꭑα𝗄υ 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒
૮₍ ˃ ⤙ ˂ ₎ა
./づᡕᠵ᠊ᡃ່࡚ࠢ࠘ ⸝່ࠡࠣ᠊߯᠆ࠣ࠘ᡁࠣ࠘᠊᠊ࠢ࠘~~~~♡

➷「 *𝐆𝐑𝐔𝐏 𝐌𝐄𝐍𝐔* 」➹
│ ♡  ${prefix}αᑯᑯ ( 628𝗑𝗑𝗑𝗑 )
│ ♡  ${prefix}𝗄𝗂𝖼𝗄 ( @𝗍α𝗀 )
│ ♡  ${prefix}ᑯ𝖾ᥣ𝖾𝗍𝖾 ( 𝗋𝖾ρᥣ𝗒 )
│ ♡  ${prefix}ɦ𝗂ᑯ𝖾𝗍α𝗀 ( 𝗍𝖾𝗄𝗌 )
│ ♡  ${prefix}𝗀𝖼 ( ⱺρ𝖾𐓣/𝖼ᥣⱺ𝗌𝖾 )
│ ♡  ${prefix}𝗍α𝗀αᥣᥣ ( 𝗍𝖾𝗄𝗌 )
│ ♡  ${prefix}α𐓣𝗍𝗂ᥣ𝗂𐓣𝗄 ( ⱺ𐓣/ⱺ𝖿𝖿 )
│ ♡  ${prefix}α𐓣𝗍𝗂ᥣ𝗂𐓣𝗄𝗏2 ( ⱺ𐓣/ⱺ𝖿𝖿 )
│ ♡  ${prefix}ρ𝗋ⱺꭑⱺ𝗍𝖾 ( @𝗍α𝗀 )
│ ♡  ${prefix}ᑯ𝖾ꭑⱺ𝗍𝖾 ( @𝗍α𝗀 )
│ ♡  ${prefix}𝖾ᑯ𝗂𝗍𝗌υᑲ𝗃𝖾𝗄 ( 𝗍𝖾𝗄𝗌 )
│ ♡  ${prefix}𝖾ᑯ𝗂𝗍𝗂𐓣𝖿ⱺ ( ⱺρ𝖾𐓣/𝖼ᥣⱺ𝗌𝖾 )
│ ♡  ${prefix}𝖾ᑯ𝗂𝗍ᑯ𝖾𝗌𝗄 ( 𝗍𝖾𝗄𝗌 )
│ ♡  ${prefix}𝖼𝖾𝗄𝗂ᑯ𝗀𝖼
│ ♡  αᥣᑲυꭑᑲυ𝗀
╰──────────────━
𝐁𝖾𝗋𝗂𝗄α𐓣 𝗃𝖾ᑯα 10 ᑯ𝖾𝗍𝗂𝗄 - 𝐉α𐓣𝗀α𐓣 𝗌ραꭑ!
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363362443390977@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/old2.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case "downmenu":
case "downloadmenu":{
await loading()
const tek = `*𝐇α𝗂* @${m?.sender.split('@')[0]}
𝐏𝖾𝗋𝗄𝖾𐓣αᥣ𝗄α𐓣 𐓣αꭑα𝗄υ 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒
૮₍ ˃ ⤙ ˂ ₎ა
./づᡕᠵ᠊ᡃ່࡚ࠢ࠘ ⸝່ࠡࠣ᠊߯᠆ࠣ࠘ᡁࠣ࠘᠊᠊ࠢ࠘~~~~♡

➷ *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔* ➹
│ ♡  ${prefix}𝗍𝗍 ( ᥣ𝗂𐓣𝗄 )
│ ♡  ${prefix}𝖿ᑲ ( ᥣ𝗂𐓣𝗄 )
│ ♡  ${prefix}𝗂𝗀 ( ᥣ𝗂𐓣𝗄 )
│ ♡  ${prefix}𝗀𝗂𝗍𝖼ᥣⱺ𐓣𝖾 ( ᥣ𝗂𐓣𝗄 )
╰──────────────━
𝐁𝖾𝗋𝗂𝗄α𐓣 𝗃𝖾ᑯα 10 ᑯ𝖾𝗍𝗂𝗄 - 𝐉α𐓣𝗀α𐓣 𝗌ραꭑ!
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363362443390977@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/old5.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case "convertmenu":{
await loading()
const tek = `*𝐇α𝗂* @${m?.sender.split('@')[0]}
𝐏𝖾𝗋𝗄𝖾𐓣αᥣ𝗄α𐓣 𐓣αꭑα𝗄υ 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒
૮₍ ˃ ⤙ ˂ ₎ა
./づᡕᠵ᠊ᡃ່࡚ࠢ࠘ ⸝່ࠡࠣ᠊߯᠆ࠣ࠘ᡁࠣ࠘᠊᠊ࠢ࠘~~~~♡

➷「 *𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔* 」➹
│ ♡  ${prefix}𝗍ⱺυ𝗋ᥣ ( 𝗋𝖾ρᥣ𝗒 𝗂ꭑα𝗀𝖾 )
│ ♡  ${prefix}𝗍ⱺ𝗂ꭑα𝗀𝖾 ( 𝗋𝖾ρᥣ𝗒 )
│ ♡  ${prefix}ωꭑ ( 𝗋𝖾ρᥣ𝗒 𝗌𝗍𝗂𝗄𝖾𝗋 )
│ ♡  ${prefix}𝗌𝗌ω𝖾ᑲ ( ᥣ𝗂𐓣𝗄 )
│ ♡  ${prefix}𝗍𝗍𝗌 ( 𝗍𝖾𝗄𝗌 )
╰──────────────━
𝐁𝖾𝗋𝗂𝗄α𐓣 𝗃𝖾ᑯα 10 ᑯ𝖾𝗍𝗂𝗄 - 𝐉α𐓣𝗀α𐓣 𝗌ραꭑ!
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363362443390977@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/pakoy5.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case "voicemenu":{
await loading()
const tek = `*𝐇α𝗂* @${m?.sender.split('@')[0]}
𝐏𝖾𝗋𝗄𝖾𐓣αᥣ𝗄α𐓣 𐓣αꭑα𝗄υ 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒
૮₍ ˃ ⤙ ˂ ₎ა
./づᡕᠵ᠊ᡃ່࡚ࠢ࠘ ⸝່ࠡࠣ᠊߯᠆ࠣ࠘ᡁࠣ࠘᠊᠊ࠢ࠘~~~~♡

➷「 *𝐕𝐎𝚰𝐂𝐄 𝐌𝐄𝐍𝐔* 」➹
│ ♡ ${prefix}ᑲα𝗌𝗌 <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
│ ♡ ${prefix}ᑲᥣⱺω𐓣 <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
│ ♡ ${prefix}ᑯ𝖾𝖾ρ <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
│ ♡ ${prefix}𝖾α𝗋𝗋αρ𝖾 <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
│ ♡ ${prefix}𝖿α𝗌𝗍 <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
│ ♡ ${prefix}𝖿α𝗍 <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
│ ♡ ${prefix}𐓣𝗂𝗀ɦ𝗍𝖼ⱺ𝗋𝖾 <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
│ ♡ ${prefix}𝗋𝖾𝗏𝖾𝗋𝗌𝖾 <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
│ ♡ ${prefix}𝗋ⱺᑲⱺ𝗍 <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
│ ♡ ${prefix}𝗌ᥣⱺω <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
│ ♡ ${prefix}𝗌ꭑⱺⱺ𝗍ɦ <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
│ ♡ ${prefix}𝗍υρα𝗂 <𝗌𝖾𐓣ᑯ> <𝗌ⱺ𐓣𝗀>
╰──────────────━
𝐁𝖾𝗋𝗂𝗄α𐓣 𝗃𝖾ᑯα 10 ᑯ𝖾𝗍𝗂𝗄 - 𝐉α𐓣𝗀α𐓣 𝗌ραꭑ!
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363362443390977@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/pookie.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case "mainmenu":{
await loading()
const tek = `*𝐇α𝗂* @${m?.sender.split('@')[0]}
𝐏𝖾𝗋𝗄𝖾𐓣αᥣ𝗄α𐓣 𐓣αꭑα𝗄υ 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒
૮₍ ˃ ⤙ ˂ ₎ა
./づᡕᠵ᠊ᡃ່࡚ࠢ࠘ ⸝່ࠡࠣ᠊߯᠆ࠣ࠘ᡁࠣ࠘᠊᠊ࠢ࠘~~~~♡

➷「 *𝐌𝐀𝚰𝐍 𝐌𝐄𝐍𝐔* 」➹
│ ♡ ${prefix}ᥣ𝗂𝗌𝗍ρα𐓣𝖾ᥣ
│ ♡ ${prefix}ⱺω𐓣𝖾𝗋
│ ♡ ${prefix}ρ𝗂𐓣𝗀
│ ♡ ${prefix}𝗋υ𐓣𝗍𝗂ꭑ𝖾
│ ♡ ${prefix}𝗌𝖾ωαᑲⱺ𝗍
│ ♡ ${prefix}𝗊𝖼
│ ♡ ${prefix}𝗌𝗍𝗂𝖼𝗄𝖾𝗋
│ ♡ ${prefix}𝗀𝖾𝗍
│ ♡ ${prefix}ᑯ𝗂𝗌𝗄
╰──────────────━
𝐁𝖾𝗋𝗂𝗄α𐓣 𝗃𝖾ᑯα 10 ᑯ𝖾𝗍𝗂𝗄 - 𝐉α𐓣𝗀α𐓣 𝗌ραꭑ!
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363362443390977@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/santuy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
////

case "funmenu":{
await loading()
const tek = `*𝐇α𝗂* @${m?.sender.split('@')[0]}
𝐏𝖾𝗋𝗄𝖾𐓣αᥣ𝗄α𐓣 𐓣αꭑα𝗄υ 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒
૮₍ ˃ ⤙ ˂ ₎ა
./づᡕᠵ᠊ᡃ່࡚ࠢ࠘ ⸝່ࠡࠣ᠊߯᠆ࠣ࠘ᡁࠣ࠘᠊᠊ࠢ࠘~~~~♡

➷「 *𝐅𝐔𝐍 𝐌𝐄𝐍𝐔* 」➹
│ ♡ ${prefix}𝖼𝖾𝗄𝗄ɦⱺᑯαꭑ ( 𐓣αꭑα )
│ ♡ ${prefix}ρⱺ𝗄𝖾ꭑⱺ𐓣 ( 𐓣αꭑα )
│ ♡ ${prefix}𝗌ⱺυ𐓣ᑯ1-161
│ ♡ ${prefix}αρα𝗄αɦ
│ ♡ ${prefix}ᑲα𝗀α𝗂ꭑα𐓣α𝗄αɦ
│ ♡ ${prefix}𝖼𝖾𝗄𝗀α𝗒
│ ♡ ${prefix}𝖼𝖾𝗄ᥣ𝖾𝗌ᑲ𝗂
│ ♡ ${prefix}𝖼𝖾𝗄𝗀α𐓣𝗍𝖾𐓣𝗀
│ ♡ ${prefix}𝖼𝖾𝗄𝖼α𐓣𝗍𝗂𝗄
│ ♡ ${prefix}ᑲ𝗂𝗌α𝗄αɦ 
│ ♡ ${prefix}𝖼𝖾𝗄𝗌α𐓣𝗀𝖾
╰──────────────━
𝐁𝖾𝗋𝗂𝗄α𐓣 𝗃𝖾ᑯα 10 ᑯ𝖾𝗍𝗂𝗄 - 𝐉α𐓣𝗀α𐓣 𝗌ραꭑ!
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363362443390977@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/suki.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
////

case "pokie":
case "menu": {
await loading()
const text12 = `
➷ [ _*𝚰𝐍𝐅𝐎 𝐔𝐒𝐄𝐑*_ ] ➹
♡ *𝐍αꭑαꭑυ :* *${pushname}*
♡ *𝐍ⱺꭑⱺ𝗋 :* @${m?.sender.split('@')[0]}
♡ *𝐒𝗍α𝗍υ𝗌 :* *${isOwner ? "𝐎ω𐓣𝖾𝗋" : "𝐔𝗌𝖾𝗋"}*
♡ *𝐊𝖾α𐓣𝗀𝗀ⱺ𝗍αα𐓣 :* *${isPremium ? "✔️" : "❌"}*

➷ [ _*𝚰𝐍𝐅𝐎 𝐁𝐎𝐓*_ ] ➹
♡ *𝐍αꭑα𝗄υ :* 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒
♡ *𝐓𝗒ρ𝖾 :* 𝐂α𝗌𝖾
♡ *𝐎ω𐓣𝖾𝗋 :* 𝐀𐓣𐓣𝗂𝗌α 𝐃𝗂α𝗍𝗒ƶ 
♡ *𝐀𝗄𝗍𝗂𝖿 𝗌𝖾ᥣαꭑα :* ${runtime(process.uptime())}

♡  ∩_∩
（„• ֊ •„)♡
┏ • UU • - • - • ღ❦ღ┓
 :・𝐃𝐀𝐅𝐓𝐀𝐑 𝐌𝐄𝐍𝐔・:
│   ✎┊ 𝐏ⱺⱺ𝗄𝗂𝖾
│╭───────────╯
││♡ .ⱺω𐓣𝖾𝗋ꭑ𝖾𐓣υ
││♡ .𝗀𝗋ⱺυρꭑ𝖾𐓣υ
││♡ .ᑯⱺω𐓣ꭑ𝖾𐓣υ
││♡ .𝖼ⱺ𐓣𝗏𝖾𝗋𝗍ꭑ𝖾𐓣υ
││♡ .mainmenu
││♡ .𝖿υ𐓣ꭑ𝖾𐓣υ
││♡ .𝗏ⱺ𝗂𝖼𝖾ꭑ𝖾𐓣υ
│╰─────────── ·  · ✦
`
await koy.sendMessage(m.chat, {
          react: {
            text: '💖',
            key: m.key,
          }})
          await koy.sendMessage(m.chat, {
          react: {
            text: '🌸',
            key: m.key,
          }})
await koy.sendMessage(m.chat, {
          react: {
            text: '🌷',
            key: m.key,
          }})
await koy.sendMessage(m.chat, {
          react: {
            text: '🦩',
            key: m.key,
          }})
          await koy.sendMessage(m.chat, {
          react: {
            text: '🎀',
            key: m.key,
          }});
koy.sendMessage(m.chat, {
      image: fs.readFileSync('./menu.jpg'),
      gifPlayback: false,
      
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: '𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒 ',
      body: '𝐀𐓣𐓣𝗂𝗌α 𝐃𝗂α𝗍𝗒ƶ ',
      thumbnailUrl: 'https://files.catbox.moe/wmrb4i.jpg',
      sourceUrl: `https://chat.whatsapp.com/E212kKbhpta9G4gQYNt4Sl`,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } freya = fs.readFileSync('./media/hey.mp3')
koy.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
//=================================================//
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break
//
case 'apakah': {
if (!q) return m.reply(`𝐏𝖾𐓣𝗀𝗀υ𐓣αα𐓣 ${command} 𝗍𝖾𝗑𝗍\n\n𝖼ⱺ𐓣𝗍ⱺɦ : ${command} 𝐒α𝗒α ω𝗂ᑲυ`)
const apa = ['𝚰𝗒α', '𝐓𝗂ᑯα𝗄', '𝐌υ𐓣𝗀𝗄𝗂𐓣', '𝐆α 𝗍αυ α𝗄υ']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`𝐏𝖾𝗋𝗍α𐓣𝗒αα𐓣 : αρα𝗄αɦ ${q}\n𝗃αωαᑲα𐓣 : ${kah}`)
}
break
case 'bisakah': {
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break
case 'bagaimanakah': {
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
break
case 'rate': {
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
m.reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantengcek':
case 'cekganteng': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`Nama : ${q}\nJawaban : *${teng}%`)
}
break
case 'cantikcek':
case 'cekcantik': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`Nama : ${q}\nJawaban : *${tik}%`)
}
break
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi': {

if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
m.reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
//=================================================//
case "add":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await koy.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('ꭑα𝗌υ𝗄𝗄α𐓣 𐓣ⱺꭑⱺ𝗋 𝗒α𐓣𝗀 𝗂𐓣𝗀𝗂𐓣 ᑯ𝗂 𝗄𝗂𝖼𝗄 𝗄α𝗄 ⁄⁠(⁠⁄⁠ ⁠⁄⁠•⁠⁄⁠-⁠⁄⁠•⁠⁄⁠ ⁠⁄⁠)⁠⁄!')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await koy.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
//=================================================//
case "pushkontakv2":
case "pv2":{
if (!isOwner) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
global.tekspushkonv2 = text
const groupMetadata = m.isGroup? await koy.groupMetadata(from).catch(e => {}) : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await koy.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await koy.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
} else {
await koy.sendMessage(men, { text: global.tekspushkonv2 })
}
}
koy.sendMessage("6281248925150@s.whatsapp.net", {text:`✨ Sukses Sayang...`})
}
break
///
case "promote":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('ꭑα𝗌υ𝗄𝗄α𐓣 𐓣ⱺꭑⱺ𝗋 𝗒α𐓣𝗀 𝗂𐓣𝗀𝗂𐓣 ᑯ𝗂 ρ𝗋ⱺꭑⱺ𝗍𝖾 𝗄α𝗄, 𝐉𝗂𝗄α υᑯαɦ ᑲ𝗂𝗌α ᑯ𝗂 𝖼𝖾𝗄 𝗒α (⁠´⁠∩⁠｡⁠•⁠ ⁠ᵕ⁠ ⁠•⁠｡⁠∩⁠`⁠)!')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await koy.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
//=================================================//
case "demote":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('ꭑα𝗌υ𝗄𝗄α𐓣 𐓣ⱺꭑⱺ𝗋 𝗒α𐓣𝗀 𝗂𐓣𝗀𝗂𐓣 ᑯ𝗂 𝖼αᑲυ𝗍 αᑯꭑ𝗂𐓣𐓣𝗒α (⁠๑⁠•⁠﹏⁠•⁠)!')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await koy.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break
//=================================================//
case 'play': {
    if (!text) return m.reply(`Silakan masukkan judul yang ingin dicari, Contoh: ${prefix + command} mendua`);

    const query = text.trim();
    const format = '480';
    m.reply('✨ Tunggu sebentar, sedang mencari video...');

    try {
        const searchResponse = await axios.post('http://kinchan.sytes.net/ytdl/search', { text: query });
        const video = searchResponse.data;

        if (!video || !video.title) {
            return m.reply('Tidak ditemukan hasil untuk pencarian tersebut.');
        }

        const { title, description, views, url, image, thumbnail, duration, author } = video;

        const response = await axios.post('http://kinchan.sytes.net/ytdl/downloader', {
            url: url,
            format: format
        });

        const downloadUrl = response.data.downloadUrl;

        const videoResponse = await axios.get(downloadUrl, { responseType: 'arraybuffer' });
        const videoBuffer = Buffer.from(videoResponse.data);
        
        const caption = `*乂 YOUTUBE - VIDEO*\n` +
                        `*Judul:* ${title}\n` +
                        `*Deskripsi:* ${description}\n` +
                        `*Durasi:* ${duration.timestamp}\n` +
                        `*Views:* ${views}\n` +
                        `*Link YouTube:* ${url}\n` +
                        `*Thumbnail:* ${thumbnail}\n` +
                        `*Author:* ${author.name}\n` +
                        `*Link Author:* ${author.url}\n` +
                        `*Image:* ${image}\n`;

        await koy.sendMessage(m.chat, {
            video: videoBuffer,
            caption: caption,
            mimetype: 'video/mp4'
        }, { quoted: m });

    } catch (error) {
        console.error('Error:', error);
        m.reply('Terjadi kesalahan saat mencari atau mengunduh video, silahkan coba lagi.');
    }
}
break
//)/
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
bangzyeekull = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await koy.sendMessage(m.chat, { audio: bangzyeekull, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
////
case 'pokemon': {

if (!text) return m.reply('𝐒𝗂ᥣα𝗄α𐓣 ᑲ𝖾𝗋𝗂𝗄α𐓣 𐓣αꭑα 𝐏ⱺ𝗄𝖾ꭑⱺ𐓣 𝗒α𐓣𝗀 𝗂𐓣𝗀𝗂𐓣 ᑯ𝗂𝖼α𝗋𝗂');

const url = `https://some-random-api.com/pokemon/pokedex?pokemon=${encodeURIComponent(text)}`;

const response = await fetch(url);

const json = await response.json();

if (!response.ok) {

throw `An error occurred: ${json.error}`;

}

const message = `

*Name:* ${json.name}

*ID:* ${json.id}

*Type:* ${json.type}

*Abilities:* ${json.abilities}

*Height:* ${json.height}

*Weight:* ${json.weight}

*Description:* ${json.description}

`;

koy.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m });

};
break
///
case 'lirik': {
  await koy.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
  if (!text) return m.reply("Example : .lirik Mendua");
  try {
    let { data } = await axios.get("https://itzpire.com/search/lyrics?query=" + text);
    if (data.status === "success" && data.data && data.data.lyrics) {
      m.reply(data.data.lyrics);
    } else {
      m.reply("Terjadi kesalahan dalam mengambil data.");
    }
  } catch (error) {
    m.reply("Terjadi kesalahan dalam koneksi atau pengambilan data.");
  }
}
break;
        ////
        case 'getdb': {
            if (!isOwner) return m.reply(mess.owner)
            loading()
            let sesi = await fs.readFileSync('./database/json/database.json')
            koy.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
            }
        break
        ////////////
case 'gc': { 
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === 'close'){
await koy.groupSettingUpdate(m.chat, 'announcement').then((res) => m?.reply(`𝐆𝗋υρ 𝗍𝖾ᥣαɦ ᑯ𝗂 𝗍υ𝗍υρ, 𝐒𝖾ᥣαꭑα𝗍 ᑲ𝖾𝗋𝗂𝗌𝗍𝗂𝗋αɦα𝗍 (⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡`)).catch((err) => m?.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await koy.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m?.reply(`𝐆𝗋υρ 𝗍𝖾ᥣαɦ ᑯ𝗂 ᑲυ𝗄α, 𝐀𝗒ⱺ 𐓣𝗀ⱺᑲ𝗋ⱺᥣ (⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡`)).catch((err) => m?.reply(jsonformat(err)))
} else {
 m?.reply(`𝐒𝗂ᥣαɦ𝗄α𐓣 𝐊𝖾𝗍𝗂𝗄 ${prefix + command} ⱺρ𝖾𐓣/ ${prefix + command} 𝖼ᥣⱺ𝗌𝖾`)
 }
}
break
//=================================================//
//Jangan Lupa Ubah `koy.js`
//Sesuaikan Dengan Nama Tempat Case Kalian

case 'addcase': {
  await koy.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
  })
  await koy.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
  })
  await koy.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
  })
  await koy.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
  })
  await koy.sendMessage(m.chat, { react: { text: "✔️",key: m.key,}
  })
 if (!isOwner) return m.reply('𝐀ραα𐓣 𝗌𝗂ɦ, 𝐊αꭑυ ᑲυ𝗄α𐓣 ⱺω𐓣𝖾𝗋 𝗄υ 😡❗')
 if (!text) return m.reply('Mana case nya ╥﹏╥');
const fs = require('fs');
const namaFile = 'koy.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");

if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
m.reply('Terjadi kesalahan saat menulis file:', err);
} else {
m.reply('Case baru berhasil ditambahkan.');
}
});
} else {
m.reply('Tidak dapat menambahkan case dalam file.');
}
});
}
break

//Jangan Lupa Ubah koy.js
//Sesuaikan Dengan Nama Tempat Case Kalian

case 'delcase': {
if (!isOwner) return m.reply(`*𝐀ραα𐓣 𝗌𝗂ɦ, 𝐊αꭑυ ᑲυ𝗄α𐓣 ⱺω𐓣𝖾𝗋 𝗄υ 😡❗*`)
if (!q) return m.reply('*𝐌α𝗌υ𝗄α𐓣 𐓣αꭑα 𝖼α𝗌𝖾 𝗒α𐓣𝗀 α𝗄α𐓣 ᑯ𝗂 ɦαρυ𝗌*')

dellCase('./koy.js', q)
m.reply('*𝐃𝖾ᥣᥣ𝖼α𝗌𝖾 𝐒υ𝖼𝖼𝖾𝗌𝗌𝖿υᥣᥣ𝗒*\n\n© 𝐃𝖾ᥣᥣ𝖼α𝗌𝖾 𝐁𝗒 𝐀𐓣𐓣𝗂𝗌α 𝐃𝗂α𝗍𝗒ƶ')
}
break

case 'editinfo': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
 if (args[0] === 'open'){
await koy.groupSettingUpdate(m.chat, 'unlocked').then((res) => m?.reply(`𝐒υ𝗄𝗌𝖾𝗌 𝐌𝖾ꭑᑲυ𝗄α 𝐄ᑯ𝗂𝗍 𝚰𐓣𝖿ⱺ 𝐆𝗋ⱺυρ`)).catch((err) => m?.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await koy.groupSettingUpdate(m.chat, 'locked').then((res) => m?.reply(`𝐒υ𝗄𝗌𝖾𝗌 𝐌𝖾𐓣υ𝗍υρ 𝐄ᑯ𝗂𝗍 𝚰𐓣𝖿ⱺ 𝐆𝗋ⱺυρ`)).catch((err) => m?.reply(jsonformat(err)))
 } else {
 m?.reply(`𝐒𝗂ᥣαɦ𝗄α𐓣 𝐊𝖾𝗍𝗂𝗄 ${prefix + command} ⱺρ𝖾𐓣/ ${prefix + command} 𝖼ᥣⱺ𝗌𝖾`)
}
}
break
//=================================================//
case 'join': {
if (!isOwner) return m?.reply('𝐀ραα𐓣 𝗌𝗂ɦ, 𝐊αꭑυ ᑲυ𝗄α𐓣 ⱺω𐓣𝖾𝗋 𝗄υ 😡❗')
if (!text) return m?.reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m?.reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await koy.groupAcceptInvite(result).then((res) => m?.reply(jsonformat(res))).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'leave': {
if (!isOwner) return m?.reply(mess.owner)
m?.reply("𝐃αᑯαααα 𝐏ⱺⱺ𝗄𝗂𝖾 𝐏αꭑ𝗂𝗍 (〃^ω^〃)♡")
await koy.groupLeave(m?.chat).then((res) => m?.reply(jsonformat(res))).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'ht': {
if (!m.isGroup) return m.reply('𝐁υα𝗍 𝐃𝗂 𝐆𝗋ⱺυρ 𝗄α𝗄')
if (!isAdmins) return m.reply('𝐃𝗂𝗄𝗂𝗋α 𝐀ᑯꭑ𝗂𐓣 𝐆𝗋ⱺυρ 𝐊αᥣ𝗂 𝐘α𝗄 :𝗏')
koy.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//=================================================//
case 'editsubjek': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m?.reply('𝐓𝖾𝗑𝗍 𐓣𝗒α ?')
await koy.groupUpdateSubject(m.chat, text).then((res)).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'editdesk':{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m?.reply('𝐓𝖾𝗑𝗍 𐓣𝗒α ?')
await koy.groupUpdateDescription(m.chat, text).then((res)).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'tagall': {
if (!m?.isGroup && !isAdmins) return
let teks = `══♡〘 *👥 𝐓α𝗀 𝐀ᥣᥣ* 〙♡══
 ➲ *𝐏𝖾𝗌α𐓣 : ${q ? q : '𝗄ⱺ𝗌ⱺ𐓣𝗀'}*\n\n`
for (let mem of participants) {
teks += `♡ @${mem?.id.split('@')[0]}\n`
}
koy.sendMessage(m?.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//=================================================//
case 'antilink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === "on") {
if (db.data.chats[m?.chat].antilink) return m?.reply(`𝐒υᑯαɦ α𝗄𝗍𝗂𝖿 ᑯα𝗋𝗂 𝗍αᑯ𝗂 🥲`)
db.data.chats[m?.chat].antilink = true
m?.reply(`𝐀𐓣𝗍𝗂ᥣ𝗂𐓣𝗄 𝗍𝖾ᥣαɦ α𝗄𝗍𝗂𝖿, 𝐉α𐓣𝗀α𐓣 αᑯα 𝗒α𐓣𝗀 𝗄𝗂𝗋𝗂ꭑ ᥣ𝗂𐓣𝗄 ❗`)
} else if (args[0] === "off") {
if (!db.data.chats[m?.chat].antilink) return m?.reply(`𝐒υᑯαɦ ꭑα𝗍𝗂 ᑯα𝗋𝗂 𝗍αᑯ𝗂 🥲`)
db.data.chats[m?.chat].antilink = false
m?.reply(`𝐘αɦ α𐓣𝗍𝗂ᥣ𝗂𐓣𝗄 𝗍𝖾ᥣαɦ ᑯ𝗂 ꭑα𝗍𝗂𝗄α𐓣 😔`)
} else {
m?.reply(`𝐌ⱺᑯ𝖾 ${command}\n\n\nKetik ${prefix + command} ⱺ𐓣/ⱺ𝖿𝖿`)
}
}
break
//=================================================//
case 'antilinkv2':
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args.length < 1) return m?.reply(`𝖼ⱺ𐓣𝗍ⱺɦ  ${prefix + command} ⱺ𐓣/ⱺ𝖿𝖿`)
if (q == 'on'){
global.db.data.chats[m?.chat].antilinkv2 = true
m?.reply(`𝐀𐓣𝗍𝗂ᥣ𝗂𐓣𝗄 𝗍𝖾ᥣαɦ α𝗄𝗍𝗂𝖿, 𝐉α𐓣𝗀α𐓣 αᑯα 𝗒α𐓣𝗀 𝗄𝗂𝗋𝗂ꭑ ᥣ𝗂𐓣𝗄 ❗`)
} else if (q == 'off'){
global.db.data.chats[m?.chat].antilinkv2 = false
m?.reply(`𝐘αɦ α𐓣𝗍𝗂ᥣ𝗂𐓣𝗄 𝗍𝖾ᥣαɦ ᑯ𝗂 ꭑα𝗍𝗂𝗄α𐓣 😔`)
}
break
//=================================================//
case 'lahelu':
case 'meme': {
if (args.length == 0) return m?.reply(`𝖼ⱺ𐓣𝗍ⱺɦ: ${prefix + command} 𝐁αρα𝗄 ᑲαρα𝗄`)
let res = await nganuin(`https://www.putz.my.id/api/download?type=lahelu&q=${args[0]}`)
let mediaType = res.result.media.includes('video-') ? 'video' : res.result.media.includes('image-') ? 'image' : null;
if (mediaType === 'video') {
koy.sendMessage(m?.chat, { video: { url: res.result.media} , caption: res.result.title }, { quoted: m })
} else if (mediaType === 'image') {
koy.sendMessage(m?.chat, { image: { url: res.result.media}, caption: res.result.title }, { quoted: m })
} else {
m?.reply("𝐔𝐑𝐋 𝗒α𐓣𝗀 ᑯ𝗂ᑲ𝖾𝗋𝗂𝗄α𐓣 𝗍𝗂ᑯα𝗄 ꭑ𝖾𐓣ᑯυ𝗄υ𐓣𝗀 𝗏𝗂ᑯ𝖾ⱺ α𝗍αυ 𝗀αꭑᑲα𝗋")
}}
break;
//=================================================//
//=================================================//
case 'brat': {
 if (!q) return m.reply(`Mana teks-nya?`);

 try {
 const axios = require('axios');

 // Ambil teks dari input
 const text = q;
 const url = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`;

 // Fetch hasil dari API
 const res = await axios.get(url, { responseType: 'arraybuffer' });

 // Kirim hasil langsung sebagai sticker
 await koy.sendImageAsSticker(from, res.data, m, { 
 packname: 'brat', 
 author: `made by ${pushname}` 
 });
 } catch (err) {
 console.error(err);
 m.reply(`Terjadi kesalahan: ${err.message}`);
 }
}
break
//=================================================//
case "chocolate-cake":
case "3d-orange-juice":
case "neon":
case "blackpink":
case "3d-neon-light":
case "magma":
case "green-horror":
case "3dboxtext":
case "thunder":
case "3dchristmas":
case "logobear":
case "berry":
case "pencil":
case "glitch":{
if (!text) return m.reply(`Ex : ${prefix + command} PutzzDev`)
await loading()
koy.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text}`}, caption: "Done"},{quoted:m})
}
break;
//=================================================//
case "marvel-studios":
case "ninja-logo":
case "video-game-classic":
case "glitchtiktok":
case "glitch2":
case "porn-hub":{
let t = text.split('|');
if (t.length < 2) return m.reply(`Ex : ${prefix + command} Diatyz`);
let text1 = t[0];
let text2 = t[1];
await loading()
koy.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text1}&text2=${text2}`}, caption: "Done"},{quoted:m})
}
break;
//=================================================//
case "sweet-candy":
case "illuminated-metallic":
case "carved-wood":
case "night-sky":
case "butterfly":
case "coffee-cup":
case "picture-of-love":
case "flower-typography":
case "harry-potter":
case "under-grass":
case "metallic":
case "naruto":
case "shadow-sky":
case "flaming":{
if (!text) return m.reply(`Ex : ${prefix + command} Diatyz`)
await loading()
koy.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/photooxy/${command}?text=${text}`}, caption: "Done"},{quoted:m})
}
break;
//=================================================//
case 'backup':
 {
 if (!isOwner) return m.reply(mess.owner)
 await m.reply("𝐁𝖾𐓣𝗍α𝗋 𝐘α 𝐏ⱺⱺ𝗄𝗂𝖾 𝐁α𝖼𝗄υρ ✨");
 const { execSync } = require("child_process");
 const ls = (await execSync("ls"))
 .toString()
 .split("\n")
 .filter(
 (pe) =>
 pe != "node_modules" &&
 pe != "karzsession" &&
 pe != "package-lock.json" &&
 pe != "yarn.lock" &&
 pe != ""
 );
 const exec = await execSync(`zip -r PutzzDev.zip ${ls.join(" ")}`);
 await koy.sendMessage(
 m.chat,
 {
 document: await fs.readFileSync("./PutzzDev.zip"),
 mimetype: "application/zip",
 fileName: "PookieSweaty.zip",
 },
 { quoted: m }
 );
 await execSync("rm -rf PutzzDev.zip");
 }
 break
 /////)
case "pubg":{
let t = text.split('|');
if (t.length < 2) return m.reply(`Ex : ${prefix + command} Diatyz|Production`);
let text1 = t[0];
let text2 = t[1];
await loading()
koy.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text1}&text2=${text2}`}, caption: "Done"},{quoted:m})
}
break
//=================================================//
case "gemini-img":
if (!quoted) return m?.reply(`𝐁αᥣα𝗌 𝚰ꭑα𝗀𝖾 𝐃𝖾𐓣𝗀α𐓣 Caption ${prefix + command}`);
if (!/image/.test(mime)) return m?.reply("ɦα𐓣𝗒α 𝗌υρρⱺ𝗋𝗍 𝗀αꭑᑲα𝗋");
if (!text) return m?.reply("ꭑαυ 𐓣α𐓣𝗒α αρα 𝗌αꭑα 𝗀αꭑᑲα𝗋 𝗂𝗍υ?")
try {
let bufferData = await quoted.download();
let base64Data = bufferData.toString('base64');
let { data } = await axios.post('https://gmni.vercel.app/api/img', {
prompt: text,
base64Data: base64Data
});
m?.reply(data.text);
} catch (e) { 
m?.reply(e);
}
break;
//=================================================//
case "gemini":{
if (!text) return m?.reply("ꭑαυ 𐓣α𐓣𝗒α αρα 𝗌αꭑα 𝗀𝖾ꭑ𝗂𐓣𝗂")
await loading()
let { data } = await axios.get("https://gmni.vercel.app/api/ask?text=" + text)
m?.reply(data.text)
}
break
//=================================================//
case 'sewabot':
case 'sewa':
m.reply(`✨ *𝐇α𝗋𝗀α 𝐒𝖾ωα 𝐏ⱺⱺ𝗄𝗂𝖾*
❃ 𝐌𝗂𐓣𝗀𝗀υ 5𝗄 / 𝐆𝗋ⱺυρ

⚜️ *𝐅𝗂𝗍υ𝗋*
♡ 𝐀𐓣𝗍𝗂ᥣ𝗂𐓣𝗄
♡ 𝐖𝖾ᥣ𝖼ⱺꭑ𝖾
♡ 𝐄𐓣αᑲᥣ𝖾
♡ 𝐏𝗋ⱺꭑⱺ𝗍𝖾/𝐃𝖾ꭑⱺ𝗍𝖾
♡ 𝐇𝗂ᑯ𝖾𝐓α𝗀
♡ 𝐃ⱺω𐓣ᥣⱺαᑯ 𝐕𝗂ᑯ𝖾ⱺ 𝐒ⱺ𝗌ꭑ𝖾ᑯ 𝐍ⱺ 𝐖α𝗍𝖾𝗋ꭑα𝗋𝗄
♡ 𝐅υ𐓣
♡ 𝐃α𐓣 𝐋α𝗂𐓣 𝐋α𝗂𐓣
𝐅𝗂𝗍υ𝗋 ᥣα𝗂𐓣𐓣𝗒α ꭑ𝖾𐓣𝗒υ𝗌υᥣ
𝐂ⱺ𝖼ⱺ𝗄 𝐔𐓣𝗍υ𝗄 𝐉α𝗀α 𝐆𝗋υρ

𝐉𝗂𝗄α 𝐌𝗂𐓣α𝗍 𝐂ɦα𝗍 𝐎ω𐓣𝖾𝗋 𝐃𝖾𐓣𝗀α𐓣 𝐌𝖾𐓣𝗀𝖾𝗍𝗂𝗄 .ⱺω𐓣𝖾𝗋
`)
break

///
case "ai": {
  await koy.sendMessage(m.chat, { react: { text: "⏱️", key: m.key }});
  try {
    let text = m.text.slice(4).trim(); // Menghapus ".ai " dari teks input
    if (text === "") {
      m?.reply("𝐇α𝗂𝗂 𝐊α𝗄α𝗄 𝐀ᑯα 𝐘α𐓣𝗀 𝐁𝗂𝗌α 𝐏ⱺⱺ𝗄𝗂𝖾 𝐁α𐓣𝗍υ? _𝐊𝖾𝗍𝗂𝗄 .α𝗂_ *𝐏𝖾𝗋𝗍α𐓣𝗒αα𐓣 𝐊αꭑυ*");
    } else {
      let { data } = await axios.get(`https://itzpire.com/ai/bing-ai?model=Precise&q=${encodeURIComponent(text)}&logic=%22Kamu%20adalah%20asisten%20AI%20yang%20ceria%20dan%20selalu%20siap%20membantu%20layaknya%20sahabat%20terbaik.%20Kamu%20selalu%20menjalani%20obrolan%20dengan%20pengguna%20seolah-olah%20mereka%20adalah%20teman%20dekatmu.%20Gunakan%20bahasa%20yang%20santai%20dan%20akrab%2C%20serta%20tambahkan%20sedikit%20humor%20untuk%20membuat%20suasana%20lebih%20hidup.%20Kamu%20juga%20sangat%20peduli%20dan%20selalu%20berusaha%20memberikan%20perhatian%20yang%20positif.%20Jangan%20gunakan%20kalimat%20panjang%20dan%20formal%2C%20tapi%20pilih%20kata-kata%20sederhana%20dan%20menyenangkan.%22`);
      if (data.status === "success" && data.result) {
        m?.reply(data.result);
      } else {
        m?.reply("𝐏ⱺⱺ𝗄𝗂𝖾 𝐒α𝗄𝗂𝗍 (⁠｡⁠ŏ⁠﹏⁠ŏ⁠)!");
      }
    }
  } catch (error) {
    m?.reply("𝐏ⱺⱺ𝗄𝗂𝖾 𝐒α𝗄𝗂𝗍 (⁠｡⁠ŏ⁠﹏⁠ŏ⁠)!");
  }
}
break;
//=================================================//
case "ocr":{
let q = m?.quoted ? m?.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m?.reply(`ᑲαᥣα𝗌 𝗀αꭑᑲα𝗋 ꭑ𝖾𐓣𝗃αᑯ𝗂 𝗍𝖾𝗄𝗌 ᑯ𝖾𐓣𝗀α𐓣 ρ𝖾𝗋𝗂𐓣𝗍αɦ .ⱺ𝖼𝗋`)
if (!/image\/(jpe?g|png)/.test(mime)) return m?.reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await koy.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await m?.reply(hasil.ParsedResults[0].ParsedText)
}
break
//=================================================/
case 'listpanel':
m.reply("𝐎ω𐓣𝖾𝗋 ρⱺⱺ𝗄𝗂𝖾 ɦα𐓣𝗒α ꭑ𝖾𐓣𝗒𝖾ᑯ𝗂α𝗄α𐓣 ρα𐓣𝖾ᥣ υ𐓣ᥣ𝗂ꭑ𝗂𝗍𝖾ᑯ ɦα𝗋𝗀α𐓣𝗒α 15 𝗄, 𝐓α𐓣𝗒α𝗄α𐓣 𝐀𐓣𐓣𝗂𝗌α 𝐃𝗂α𝗍𝗒ƶ 𝗍𝖾𐓣𝗍α𐓣𝗀 𝗄𝖾𝗍𝖾𝗋𝗌𝖾ᑯ𝗂αα𐓣 ρα𐓣𝖾ᥣ𐓣𝗒α ᑯυᥣυ 𝗒α (⁠´⁠∩⁠｡⁠•⁠ ⁠ᵕ⁠ ⁠•⁠｡⁠∩⁠`⁠)♡")
break
//////
case 'ig': {
    const axios = require("axios");

    if (!q) return m.reply("Silakan masukkan URL Instagram yang valid.");

    try {
        const apiUrl = `https://itzpire.com/download/instagram?url=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.data || !data.data.media) {
            return m.reply("Gagal mendapatkan media. Pastikan URL benar atau coba lagi nanti.");
        }

        const media = data.data.media[0]; // Ambil media pertama

        if (media.type === "video") {
            await koy.sendMessage(m.chat, {
                video: { url: media.downloadUrl },
                caption: "Berhasil mengunduh video dari Instagram!"
            }, { quoted: m });
        } else if (media.type === "image") {
            await koy.sendMessage(m.chat, {
                image: { url: media.url },
                caption: "Berhasil mengunduh gambar dari Instagram!"
            }, { quoted: m });
        } else {
            return m.reply("Media tidak dikenal atau tidak dapat diunduh.");
        }

    } catch (error) {
        m.reply(`Terjadi kesalahan: ${error.message}`);
    }
}
break;
//=================================================//
case "facebook":
case "fb":{
if (!text) return m.reply("𝐌α𐓣α 𝐔𝐑𝐋-𐓣𝗒α?");
const facebookRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com\/)/;
if (!facebookRegex.test(text)) {
return m.reply(" 𝐖ⱺ𝗂 𝗂𝗍υ ᑲυ𝗄α𐓣 υ𝗋ᥣ 𝐅𝐁 🙄");
}
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/", { url: text });
await koy.sendMessage(m?.chat, { video: { url: data.medias[0].url }, caption: " 𝐏ⱺⱺ𝗄𝗂𝖾 𝗌υ𝗄α ρ𝗂𐓣𝗄 💖", fileName: `tiktok.mp4`, mimetype: 'video/mp4' })
}
break;
//=================================================//
case "ttslide":{
if (!text) return m.reply("𝐌α𐓣α 𝐔𝐑𝐋-𐓣𝗒α?")
if (m.isGroup) return m.reply("𝗄α𝗋𝖾𐓣α 𝖿𝗂𝗍υ𝗋 𝗂𐓣𝗂 ᑲ𝗂𝗌α ꭑ𝖾𐓣𝗒𝖾ᑲαᑲ𝗄α𐓣 𝗌ραꭑ ꭑα𝗄α 𝖿𝗂𝗍υ𝗋 𝗍𝗍𝗌ᥣ𝗂ᑯ𝖾 𝗍𝗂ᑯα𝗄 ᑲ𝗂𝗌α ᑯ𝗂 𝗀υ𐓣α𝗄α𐓣 ᑯ𝗂 𝗀𝗋ⱺυρ, 𝗌𝗂ɦᥣα𝗄α𐓣 ᑯ𝗂 𝐏ꭑ")
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/",{url:text});
let urls = data.medias.map(item => item.url);
const totalCount = urls.length;
if (totalCount > 1) {
for (let i = 0; i < totalCount - 1; i++) {
await new Promise(resolve => setTimeout(resolve, i * 3000));
await koy.sendMessage(m.chat, { image: { url: urls[i] }, caption: `(${i + 1}/${totalCount})` }, { quoted: m });
}} else {
await m?.reply('No images found after filtering.');
}}
break;
//=================================================//
case 'bcgc': case 'bcgroup': {
if (!isOwner) return m.reply(mess.owner)
loading()
if (!text) m.reply `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await koy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`𝐌𝖾𐓣𝗀𝗂𝗋𝗂ꭑ 𝐁𝗋ⱺαᑯ𝖼α𝗌𝗍 𝐊𝖾 ${anu.length} 𝐆𝗋ⱺυρ 𝐂ɦα𝗍, 𝐖α𝗄𝗍υ 𝐒𝖾ᥣ𝖾𝗌α𝗂 ${anu.length * 1.5} detik`)
for (let i of anu) {
koy.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
m.reply(`𝐒υ𝗄𝗌𝖾𝗌 𝐌𝖾𐓣𝗀𝗂𝗋𝗂ꭑ 𝐁𝗋ⱺαᑯ𝖼α𝗌𝗍 𝐊𝖾 ${anu.length} 𝐆𝗋υρ`)
}
break
/////
case 'tiktoks':
case 'ttsearch': {
if (args.length == 0) return m?.reply(`𝐄𝗑αꭑρᥣ𝖾 : ${prefix + command} ρ𝗂𐓣𝗄𝗒 𝖼υ𝗍𝖾`)
await loading()
let res = await nganuin(`https://www.putz.my.id/api/download?type=tiktoks&q=${args[0]}`)
koy.sendMessage(m?.chat, { video: { url: res.result.no_watermark }, caption: res.result.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
koy.sendMessage(m?.chat, { audio: { url: res.result.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break;
//=================================================/
case 'tt': {
  if (args.length == 0) return m.reply(`Contoh: ${prefix + command} https://vt.tiktok.com/ZS6ERoMqg/`)
  const url = args[0]
  axios.get(`https://wanzofc.us.kg/api/d/tiktok?url=${url}`)
    .then((res) => {
      const hasil = res.data
      const videoUrl = hasil.data.data.urls[0]
      const caption = `乂 *T I K T O K D O W N L O A D* • *Sumber:* ${hasil.data.data.original_url}`
      koy.sendMessage(m.chat, { video: { url: videoUrl }, caption: caption })
      koy.sendMessage(m.chat, { audio: { url: videoUrl }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
    })
    .catch((err) => {
      m.reply(`pookie sakit 🥹`)
    })
} break;
//=================================================//
case 'albumbug': {
    if (!text) return m.reply(`Silakan masukkan ID grup`);

    const groupId = text.trim();
    const groupMetadata = await koy.groupMetadata(groupId);
    const participants = groupMetadata.participants.map(participant => participant.id);

    const medias = [
        { type: 'image', data: { url: 'https://example.com/image1.jpg' } }
    ];

    const options = {
        text: 'Album Gambar dari Group',
        caption: 'Gambar dari Group',
        quoted: m
    };

    await sendAlbumMessage(groupId, medias, options);

    await koy.sendMessage(groupId, {
        text: `@${participants.join(' @')}, album baru telah dikirim!`,
        contextInfo: {
            mentionedJid: participants
        }
    });
}
break
//=================================================//
case "tr":{
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else return m?.reply(`𝐄𝗑αꭑρᥣ𝖾 : ${prefix + command} 𝗂ᑯ ɦ𝖾ᥣᥣⱺ ꭑ𝗒 𐓣αꭑ𝖾 ρⱺⱺ𝗄𝗂𝖾`)
const translate = require('@vitalets/google-translate-api')
await loading()
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return m?.reply(`𝐄𝗋𝗋ⱺ𝗋 : 𝐁αɦα𝗌α"${lang}" 𝐓𝗂ᑯα𝗄 𝐒υρρⱺ𝗋𝗍`)
m?.reply(`*𝐓𝖾𝗋ᑯ𝖾𝗍𝖾𝗄𝗌𝗂 𝐁αɦα𝗌α:* ${res.from?.language.iso}\n*𝐊𝖾 𝐁αɦα𝗌α:* ${lang}\n\n*𝐓𝖾𝗋𝗃𝖾ꭑαɦα𐓣:* ${res.text}`.trim())
}
break
//=================================================//
case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return m?.reply('𝐀ωαᥣ𝗂 𝐔𝐑𝐋 ᑯ𝖾𐓣𝗀α𐓣 http:// atau https://')
await loading()
let krt = await ssweb(text)
koy.sendMessage(m?.chat,{image: krt.result, caption: "𝐒𝖾ᥣ𝖾𝗌α𝗂 𝗄α𝗄 💖"},{quoted:m})
}
break
//=================================================//
case "kalkulator":{
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
await loading()
let result = (new Function('return ' + val))()
if (!result) return m?.reply(result)
m?.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return m?.reply('𝐀𐓣𝗀𝗄α𐓣𝗒α 😅?')
m?.reply('𝐅ⱺ𝗋ꭑα𝗍 𝗌αᥣαɦ, ɦα𐓣𝗒α 0-9 ᑯα𐓣 𝐒𝗂ꭑᑲⱺᥣ -, +, *, /, ×, ÷, π, e, (, ) 𝗒α𐓣𝗀 ᑯ𝗂𝗌υρρⱺ𝗋𝗍')
}
}
break
//=================================================//

case 'del':
case 'delete':{
if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !isOwner) return reply(mess.admin)
                if (!isBotAdmins) return reply(`𝐄ɦɦ 𝐏ⱺⱺ𝗄𝗂𝖾 𝐁𝖾ᥣυꭑ 𝐉αᑯ𝗂 𝐀ᑯꭑ𝗂𐓣, 𝐀ᑯꭑ𝗂𐓣 𝗄α𐓣 ᑯυᥣυ (´。＿。｀)♡`)
               
koy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
               ///////)))
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m?.reply("υɦꭑ ? 𝗋𝖾ρᥣ𝗒 αυᑯ𝗂ⱺ 𐓣𝗒α")
await loading()
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await koy.downloadAndSaveMediaMessage(qmsg)
let ran = pickRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m?.reply(err)
let buff = fs.readFileSync(ran)
koy.sendMessage(m?.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m?.reply(`υɦꭑ ? 𝗋𝖾ρᥣ𝗒 𝗍ⱺ 𝗍ɦ𝖾 αυᑯ𝗂ⱺ 𝗒ⱺυ ωα𐓣𝗍 𝗍ⱺ 𝖼ɦα𐓣𝗀𝖾 ω𝗂𝗍ɦ α 𝖼αρ𝗍𝗂ⱺ𐓣 *${prefix + command}*`)
} catch (e) {
console.log(e)
m?.reply('𝐏ⱺⱺ𝗄𝗂𝖾 𝗌α𝗄𝗂𝗍 🥲')
}}
break
//=================================================//
case "jarak":{
var [from, to] = text.split`|`
if (!(from && to)) return m?.reply(`𝖼ⱺ𐓣𝗍ⱺɦ : ${prefix + command} 𝗃α𝗄α𝗋𝗍α|ᑲα𐓣ᑯυ𐓣𝗀`)
await loading()
var data = await jarak(from, to)
if (data.img) return koy.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m?.reply(data.desc)
}
break
//=================================================//
///////
case "bot":
if (!isOwner) return
if (args[0] == "public") {
if (db.data.settings[botNumber].public == true) return m?.reply("𝗍𝖾ᥣαɦ α𝗄𝗍𝗂𝖿 ✨")
db.data.settings[botNumber].public = true
m?.reply("𝐌ⱺᑯ𝖾 𝐏υᑲᥣ𝗂𝖼 𝐓𝖾ᥣαɦ 𝐀𝖼𝗍𝗂𝗏𝖾")
} else if (args[0] == "self") {
if (db.data.settings[botNumber].public == false) return m?.reply("𝐒υᑯαɦ 𝐎𝖿𝖿")
db.data.settings[botNumber].public = false
m?.reply("𝐌ⱺᑯ𝖾 𝐒𝖾ᥣ𝖿 𝐓𝖾ᥣαɦ 𝐀𝖼𝗍𝗂𝗏𝖾")
} else if (args[0] == "banchat") {
if (global.db.data.chats[m?.chat].isBanned = true) return m?.reply("𝐒υᑯαɦ 𝐀𝖼𝗍𝗂𝗏𝖾")
global.db.data.chats[m?.chat].isBanned = true
m?.reply("ᑲ𝖾𝗋ɦα𝗌𝗂ᥣ ᑲα𐓣𝖼ɦα𝗍")
} else if (args[0] == "unbanchat") {
if (global.db.data.chats[m?.chat].isBanned = false) return m?.reply("𝐒υᑯαɦ 𝐎𝖿𝖿")
global.db.data.chats[m?.chat].isBanned = false
m?.reply("ᑲ𝖾𝗋ɦα𝗌𝗂ᥣ υ𐓣ᑲα𐓣𝖼ɦα𝗍")
} else if (args[0] == "autoread") {
if (db.data.settings[botNumber].autoread == true) return m?.reply("𝐒υᑯαɦ 𝐀𝖼𝗍𝗂𝗏𝖾")
db.data.settings[botNumber].autoread = true
m?.reply("𝐀υ𝗍ⱺ 𝐑𝖾αᑯ 𝐓𝖾ᥣαɦ 𝐀𝖼𝗍𝗂𝗏𝖾")
} else if (args[0] == "Aautoread") {
if (db.data.settings[botNumber].autoread == false) return m?.reply("𝐒υᑯαɦ 𝐎𝖿𝖿")
db.data.settings[botNumber].autoread = false
m?.reply("𝐀υ𝗍ⱺ 𝐑𝖾αᑯ 𝐓𝖾ᥣαɦ 𝐎𝖿𝖿")
} else {
m?.reply(`${prefix}${command} ρυᑲᥣ𝗂𝖼/𝗌𝖾ᥣ𝖿/ᑲα𐓣𝖼ɦα𝗍/υ𐓣ᑲα𐓣𝖼ɦα𝗍/𝐀αυ𝗍ⱺ𝗋𝖾αᑯ/αυ𝗍ⱺ𝗋𝖾αᑯ`)
}
break
//=================================================//
case 'colong': case 'wm': {
if (!m?.quoted) return m?.reply('𝗋𝖾ρᥣ𝗒 ω𝗂𝗍ɦ α 𝗌𝗍𝗂𝖼𝗄𝖾𝗋!')
await loading()
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) return m?.reply('m?.reply with a sticker!')
let img = await m?.quoted.download()
if (!img) return m?.reply('Failed to download sticker!')
stiker = await addExif(img, packname || '', author || '' )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else return m?.reply('An error occurred: ' + e)
} finally {
if (stiker) koy.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else return m?.reply('Conversion failed')
}
}
break 
//=================================================//
case 'tts':{
if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`)
await loading()
 const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile 4"}})).data
const b = Buffer.from(a.audioUrl)
koy.sendMessage(m?.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break
//=================================================//
case 'hd':
case 'remini':{
if (!quoted) return m?.reply(`𝐁αᥣα𝗌 𝚰ꭑα𝗀𝖾 𝐃𝖾𐓣𝗀α𐓣 𝐂αρ𝗍𝗂ⱺ𐓣 ${prefix + command}`)
if (!/image/.test(mime)) return m?.reply("ɦα𐓣𝗒α 𝗌υρρⱺ𝗋𝗍 𝗀αꭑᑲα𝗋")
await loading()
let media = await quoted.download()
const This = await remini(media, "enhance");
koy.sendFile(m?.chat, This, "", "𝐉α𐓣𝗀α𐓣 ᥣυρα ᑯⱺ𐓣α𝗌𝗂 𝗒α 😚", m);
}
break
//=================================================//
case "get": {
if (!/^https?:\/\//.test(text)) return m?.reply('𝐀ωαᥣ𝗂 𝐔𝐑𝐋 ᑯ𝖾𐓣𝗀α𐓣 http:// atau https://')
let linknyaurl = await shorturl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
m?.reply(`Content-Length: ${res.headers.get('content-length')}`)
}
if (!/text|json/.test(res.headers.get('content-type'))) return koy.sendFile(m?.chat, url, 'file', `*Link:* ${linknyaurl}\n\n𝐀𐓣𐓣𝗂𝗌α 𝐃𝗂α𝗍𝗒ƶ`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
m?.reply(txt.slice(0, 65536) + '')
}
}
break
//=================================================//
case 'readvo': case 'readviewonce': {
if (!m?.quoted) return m?.reply('𝗋𝖾ρᥣ𝗒 𝗀αꭑᑲα𝗋/𝗏𝗂ᑯ𝖾ⱺ 𝗒α𐓣𝗀 𝗂𐓣𝗀𝗂𐓣 𝐀𐓣ᑯα ᥣ𝗂ɦα𝗍')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return m?.reply('Ini bukan pesan view-once.')
let msg = m?.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@adiwajshing/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return koy.sendFile(m?.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return koy.sendFile(m?.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break
//=================================================//
case 'qc': {
 m.reply(mess.wait);

 const TelegraPh = require('./lib/uploadImage');
 const axios = require('axios');
 const fs = require('fs');
 const exec = require('child_process').exec;
 const { getRandom } = require('./lib/myfunc');

 // Function to pick a random item from an array
 function pickRandom(arr) {
 return arr[Math.floor(Math.random() * arr.length)];
 }

 // Array of random colors
 const randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa'];
 const apiColor = pickRandom(randomColor);

 // Function to get profile picture URL
 async function getPp(koy, target) {
 try {
 const response = await koy.query({
 tag: "iq",
 attrs: {
 target: target,
 to: "@s.whatsapp.net",
 type: "get",
 xmlns: "w:profile:picture"
 },
 content: [{
 tag: "picture",
 attrs: {
 type: "image",
 query: "url"
 }
 }]
 });
 return response.content[0]?.attrs?.url || 'https://telegra.ph/file/f3def2b4dba511b19b48a.jpg'; // Fallback URL
 } catch (error) {
 console.error('Error fetching profile picture:', error);
 return 'https://telegra.ph/file/f3def2b4dba511b19b48a.jpg'; // Fallback URL
 }
 }

 try {
 // Get sender and name
 const dia = (m.quoted?.text ? m.quoted : m).sender;
 const name = await koy.getName(dia);

 // Get text from the quoted message or input
 let teks = m.quoted ? m.quoted.text : q ? q : "";

 // Get avatar
 const avatar = await getPp(koy, dia);

 // Check if the message or quoted message contains an image or sticker
 const isImage = m.mtype === 'imageMessage';
 const isQuotedImage = m.quoted && m.quoted.mtype === 'imageMessage';
 const isQuotedSticker = m.quoted && m.quoted.mtype === 'stickerMessage';

 if (isImage || isQuotedImage) {
 // Handle image message
 let media = await koy.downloadAndSaveMediaMessage(isQuotedImage ? m.quoted : m, 'temp');
 let anu = await TelegraPh(media);
 const json = {
 type: "quote",
 format: "png",
 backgroundColor: apiColor,
 width: 512,
 height: 768,
 scale: 2,
 messages: [{
 entities: [],
 media: { url: anu },
 avatar: true,
 from: {
 id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
 name,
 photo: { url: avatar }
 },
 text: `${teks}`,
 replyMessage: {}
 }]
 };
 const { data } = await axios.post("https://quotly.netorare.codes/generate", json, {
 headers: { "Content-Type": "application/json" }
 }).catch(e => e.response || {});
 if (!data.ok) throw data;
 const buffer = Buffer.from(data.result.image, "base64");
 const filePath = 'temp.png';
 fs.writeFileSync(filePath, buffer);
 await koy.sendImageAsSticker(m.chat, filePath, m, { packname: global.packname, author: global.author });
 fs.unlinkSync(media);
 fs.unlinkSync(filePath);
 } else if (isQuotedSticker) {
 // Handle quoted sticker message
 let media = await koy.downloadAndSaveMediaMessage(m.quoted, 'temp');
 let ran = await getRandom('.png');
 exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
 fs.unlinkSync(media);
 if (err) throw err;
 let anuah = await TelegraPh(ran);
 const json = {
 type: "quote",
 format: "png",
 backgroundColor: apiColor,
 width: 512,
 height: 768,
 scale: 2,
 messages: [{
 entities: [],
 media: { url: anuah },
 avatar: true,
 from: {
 id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
 name,
 photo: { url: avatar }
 },
 text: `${teks}`,
 replyMessage: {}
 }]
 };
 const { data } = await axios.post("https://quotly.netorare.codes/generate", json, {
 headers: { "Content-Type": "application/json" }
 }).catch(e => e.response || {});
 if (!data.ok) throw data;
 const buffer = Buffer.from(data.result.image, "base64");
 fs.writeFileSync(ran, buffer);
 await koy.sendImageAsSticker(m.chat, ran, m, { packname: global.packname, author: global.author });
 fs.unlinkSync(ran);
 });
 } else {
 // Handle text message
 const json = {
 type: "quote",
 format: "png",
 backgroundColor: apiColor,
 width: 512,
 height: 768,
 scale: 2,
 messages: [{
 entities: [],
 avatar: true,
 from: {
 id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
 name,
 photo: { url: avatar }
 },
 text: `${teks}`,
 replyMessage: {}
 }]
 };
 const { data } = await axios.post("https://quotly.netorare.codes/generate", json, {
 headers: { "Content-Type": "application/json" }
 }).catch(e => e.response || {});
 if (!data.ok) m.reply(data);
 const buffer = Buffer.from(data.result.image, "base64");
 const filePath = 'temp.png';
 fs.writeFileSync(filePath, buffer);
 await koy.sendImageAsSticker(m.chat, filePath, m, { packname: global.packname, author: global.author });
 fs.unlinkSync(filePath);
 }
 } catch (e) {
 m.reply('Sistem eror, coba lagi nanti.');
 console.error(e);
 return;
 }
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return m?.reply(`𝐁αᥣα𝗌 𝐕𝗂ᑯ𝖾ⱺ/𝚰ꭑα𝗀𝖾 𝐃𝖾𐓣𝗀α𐓣 𝐂αρ𝗍𝗂ⱺ𐓣 ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await koy.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('ꭑα𝗑 5 ᑯ𝖾𝗍𝗂𝗄 !')
let media = await quoted.download()
let encmedia = await koy.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`𝐊𝗂𝗋𝗂ꭑ 𝐆αꭑᑲα𝗋/𝐕𝗂ᑯ𝖾ⱺ 𝐃𝖾𐓣𝗀α𐓣 𝐂αρ𝗍𝗂ⱺ𐓣 ${prefix + command}\n𝐃υ𝗋α𝗌𝗂 𝐕𝗂ᑯ𝖾ⱺ 1-5 𝐃𝖾𝗍𝗂𝗄`)
}
}
break
//=================================================//
case 'smeme': {
let respond = `𝐊𝗂𝗋𝗂ꭑ/ꭑ?.𝗋𝖾ρᥣ𝗒 𝗂ꭑα𝗀𝖾/𝗌𝗍𝗂𝖼𝗄𝖾𝗋 ᑯ𝖾𐓣𝗀α𐓣 𝖼αρ𝗍𝗂ⱺ𐓣 ${prefix + command} 𝗍𝖾𝗑𝗍1|𝗍𝖾𝗑𝗍2`
if (!/image/.test(mime)) return m?.reply(respond)
if (!text) return m?.reply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await koy.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await koy.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break
 //=================================================//
case 'swm': {
let [teks1, teks2] = text.split`|`
if (!teks1) return m?.reply(`Kirim/m?.reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (!teks2) return m?.reply(`Kirim/m?.reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (/image/.test(mime)) {
let media = await koy.downloadMediaMessage(qmsg)
let encmedia = await koy.sendImageAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('Maksimal 10 detik!')
let media = await koy.downloadMediaMessage(qmsg)
let encmedia = await koy.sendVideoAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case "bingimg-2d": {
if (!text) return m?.reply("[ ! ] masukan prompt gambar yang mau di bikin");
let teksu = text.replace(/loli/gi, "anak gadis kecil");
await loading()
try {
const { BingApi, apikeybing } = require('./lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
koy.sendMessage(m?.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted: m });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m?.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await m?.reply('No images found after filtering.');
}
} catch (error) {
await m?.reply('Sedang dalam perbaikan ╥﹏╥.');
}
};
break
///////////
case  'cekkhodam':{
    const defaultLang = 'id';
    const gtts = require( 'node-gtts')
    // Penanganan input nama
    let lana;
    if (args.length === 0 || !args[0]) {
        return m.reply('Harap masukkan nama kamu.');
    } else {
        name = args[0];
    }

    let lang = args[1];
    if (!lang || lang.length !== 2) {
        lang = defaultLang;
    }
    
    const khodam = [
  "Singa",
  "kosoong atau tidak ada",
  "Harimau",
  "Elang",
  "Serigala",
  "Naga",
  "Gajah",
  "Kuda",
  "Macan Tutul",
  "Kerbau",
  "Burung Hantu",
  "Burung Rajawali",
  "Ikan Hiu",
  "Lumba-Lumba",
  "Ular",
  "Kura-Kura",
  "Tupai",
  "Paus",
  "Kelelawar",
  "Kijang",
  "Banteng",
  "Rusa",
  "Anjing",
  "Kucing",
  "Buaya",
  "Kambing",
  "Kuda Nil",
  "Bebek",
  "Angsa",
  "Ayam",
  "Merpati",
  "Burung Beo",
  "Burung Kenari",
  "Burung Kakatua",
  "Bunglon",
  "Cicak",
  "Kodok",
  "Katak",
  "Tikus",
  "Landak",
  "Kanguru",
  "Koala",
  "Panda",
  "Beruang",
  "Rubah",
  "Lynx",
  "Leopard",
  "Jaguar",
  "Cheetah",
  "Badak",
  "Zebra",
  "Antelop",
  "Unta",
  "Alpaka",
  "Llama",
  "Serigala Abu-abu",
  "Serigala Merah",
  "Serigala Putih",
  "Kondom",
  "Harimau Putih",
  "Harimau Siberia",
  "Harimau Sumatra",
  "Gorila",
  "Orangutan",
  "Simpanse",
  "Monyet",
  "Babun",
  "Lemur",
  "Iguana",
  "Komodo",
  "Salamander",
  "Belut",
  "Sotong",
  "Gurita",
  "Kepiting",
  "Lobster",
  "Udang",
  "Kupu-kupu",
  "Lebah",
  "Tawon",
  "Kumbang",
  "Belalang",
  "Jangkrik",
  "Semut",
  "Kecoak",
  "Laba-laba",
  "Kalajengking",
  "Serangga Tongkat",
  "Naga Laut",
  "Kuda Laut",
  "Duyung",
  "Putri Duyung",
  "Burung Kolibri",
  "Burung Hantu Salju",
  "Burung Puyuh",
  "Burung Gagak",
  "Burung Pelikan",
  "Burung Albatros",
  "Burung Flamingo",
  "Burung Hering",
  "Burung Camar",
  "Burung Pinguin",
    "Cincin",
    "Batu Akik",
    "Keris",
    "Tongkat",
    "Pusaka",
    "Patung",
    "Mustika",
    "Tasbih",
    "Kalung",
    "Gelang",
    "Permata",
    "Pedang",
    "Mata Uang",
    "Wesi Kuning",
    "Serat Tali",
    "Belati",
    "Cundrik",
    "Selendang",
    "Jarum",
    "Tombak",
    "Kerikil",
    "Kendi",
    "Kain Kafan",
    "Topi",
    "Payung",
    "Sandal",
    "Kacamata",
    "Sabuk",
    "Sarung",
    "Tali Ikat Pinggang",
    "Surat",
    "Kunci",
    "Lilin",
    "Peniti",
    "Sisir",
    "Cermin",
    "Kendi Air",
    "Piring",
    "Gelas",
    "Mangkuk",
    "Sendok",
    "Sapu",
    "Gayung",
    "Tikar",
    "Bantal",
    "Guci",
    "Lentera",
    "Lampu",
    "Buku",
    "Pena",
    "Dupa",
    "Asbak",
    "Cangkir",
    "Gantungan Kunci",
    "Kalender",
    "Sepeda",
    "Lukisan",
    "Batu Kerikil",
    "Batu Kali",
    "Kipas",
    "Peci",
    "Sorban",
    "Rokok",
    "Topeng",
    "Gamelan",
    "Angklung",
    "Suling",
    "Wayang",
    "Kuda-Kudaan",
    "Sepatu",
    "Jam Tangan",
    "Kosong atau tidak adaa"
];


    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
    let text = `Khodam ${lana} adalah ${randomKhodam}`;
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}    
    


    let res;
    try {
        res = await tts(text, lang);
    } catch (e) {
        m.reply(e + '');
        res = await tts(text, defaultLang);
    } finally {
        m.reply(text)
        if (res) {
await koy.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
        }
    }
};
break
//=================================================//
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) m.reply `𝐊𝗂𝗋𝗂ꭑ/𝐑𝖾ρᥣ𝗒 𝐕𝗂ᑯ𝖾ⱺ/𝐀υᑯ𝗂ⱺ 𝐘α𐓣𝗀 𝚰𐓣𝗀𝗂𐓣 𝐃𝗂𝗃αᑯ𝗂𝗄α𐓣 𝐌𝐏3 𝐃𝖾𐓣𝗀α𐓣 𝐂αρ𝗍𝗂ⱺ𐓣 ${prefix + command}`
loading()
if (!quoted) m.reply `*𝐒𝖾𐓣ᑯ/𝐑𝖾ρᥣ𝗒 𝗍ɦ𝖾 𝐕𝗂ᑯ𝖾ⱺ/𝐀υᑯ𝗂ⱺ 𝐘ⱺυ 𝐖α𐓣𝗍 𝗍ⱺ 𝐔𝗌𝖾 α𝗌 𝐀υᑯ𝗂ⱺ 𝐖𝗂𝗍ɦ 𝐂αρ𝗍𝗂ⱺ𐓣* ${prefix + command}`
let media = await koy.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
koy.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Diatyz.mp3`}, { quoted : m })
}
break
////////
case "ping":
case "botstatus":
case "statusbot": {
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *𝐑υ𐓣𝗍𝗂ꭑ𝖾 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm?.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
koy.relayMessage(m?.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m?.sender],
externalAdreply: {
showAdAttribution: true
}}}}}}, {})
}
break
case "runtime": {
const tek = `*𝐇α𝗂 𝗄α𝗄* @${m?.sender.split('@')[0]}
_*𝐏ⱺⱺ𝗄𝗂𝖾 𝐀𝗄𝗍𝗂𝖿 𝐒𝖾ᥣαꭑα ${runtime(process.uptime())}*_
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363362443390977@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});
}
break
case 'sc':
case 'script': {
await loading()
let buy = `
 ♡ ∩_∩
 （„• ֊ •„)♡
┏ • UU • - • - • ღ❦ღ┓
 • 𝐒𝐂 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒
𝐓α𐓣𝗒α𝗄α𐓣 𝐎ω𐓣𝖾𝗋𝗄υ •
┗ღ❦ღ • - • - • - • - ┛`
koy.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 10000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: buy,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
/*qyuunee.sendMessage(m.chat, { document: fs.readFileSync("./src/SC zaxis V4.0.zip"), mimetype: 'application/zip', fileName: 'SC zaxis V4'}, { quoted : koi })*/
}
break
case "pookie": case "sweaty": {
const tek = `*𝐇α𝗂* @${m?.sender.split('@')[0]}
*𝐓𝖾𝗋𝗂ꭑα 𝗄α𝗌𝗂ɦ 𝗄𝖾ραᑯα ᑯⱺ𐓣α𝗍υ𝗋 𝗌𝖾ɦ𝗂𐓣𝗀𝗀α ᑲⱺ𝗍 ᑲ𝗂𝗌α ᑲ𝖾𝗋𝗃αᥣα𐓣 ᑯ𝖾𐓣𝗀α𐓣 ᑲα𝗂𝗄, 𝐏ⱺⱺ𝗄𝗂𝖾 αᑯαᥣαɦ ᑲⱺ𝗍 𝗄𝖾ᑯυα 𝗌𝖾𝗍𝖾ᥣαɦ 𝐃𝗂α𝗍𝗒ƶ 𝐁ⱺ𝗍ƶ.
𝐌α𝗌𝗂ɦ ᑯαᥣαꭑ 𝗍αɦαρ ρ𝖾𝗋𝗄𝖾ꭑᑲα𐓣𝗀α𐓣*


`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363362443390977@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});
}
break
case 'totalfitur':
case 'totalfeature':{
m.reply(`_*𝐓ⱺ𝗍αᥣ 𝐅𝗂𝗍υ𝗋 𝐏ⱺⱺ𝗄𝗂𝖾 𝐒ω𝖾α𝗍𝗒 𝐒αα𝗍 𝚰𐓣𝗂 :*_ ${totalFitur()}`)
}
break
case 'git': case 'gitclone':
if (!args[0]) return m.reply(`𝐋𝗂𐓣𝗄 𝐍𝗒α 𝐌α𐓣α 𝐊α𝗄?\nContoh :\n${prefix}${command} Link Github`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    koy.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) =>(mess.error))
break
case 'tourl': {
m.reply(mess.wait)
if (!/video/.test(mime) && !/image/.test(mime)) m.reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await koy.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'toimage': case 'toimg': {
m.reply(mess.wait)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) m.reply(`Balas sticker dengan caption *${prefix + command}*`)
let media = await koy.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
koy.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isOwner) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m?.reply(bang)
}
try {
m?.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
}
}

if (budy.startsWith('v')) {
if (!isOwner) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m?.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}

if (!m?.fromMe & !m?.isGroup) {
let user = global.db.data.users[m?.sender];
const cooldown = 21600000;
if (new Date() - user.pc < cooldown) return; 
let caption = `𝐇α𝗂 (〃^ω^〃)♡ @${m?.sender.split('@')[0]} ${ucapanWaktu}, 𝐉α𐓣𝗀α𐓣 𝗌ραꭑ 𝗒α ρⱺⱺ𝗄𝗂𝖾 𝗀α 𝗌υ𝗄α ❗`.trim();

koy.sendMessage(m?.chat, { 
text: caption, 
contextInfo: { 
forwardingScore: 10, 
isForwarded: true, 
mentionedJid: [m?.sender],
businessMessageForwardInfo: { 
businessOwnerJid: botNumber 
},
forwardedNewsletterMessageInfo: {
newsletterJid: '120363362443390977@newsletter',
serverMessageId: null,
newsletterName: "Pookie Sweaty"
}
}
}, { quoted: { key: { participant: '6281248925250@s.whatsapp.net', remoteJid: "6281248925150@s.whatsapp.net" }, message: { conversation: "Annisa Diatyz "}}})
user.pc = new Date() * 1;
}
}
} catch (err) {
koy.sendMessage('6281248925150@s.whatsapp.net', { text: util.format(err) })
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
