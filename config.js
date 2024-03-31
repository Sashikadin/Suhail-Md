const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "940784345136,940784345136";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,940784345136";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "940784345136,940784345136";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_28_03_31_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieU9Qc3d1Uy90djFtQ3JKUkIrZStLWWU5aUg5WVowamVuRU4rVkZRaFJHVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm5BZGZXRUJsdm1SeGpXNHd4SmRKcFovRTF5TGt5Rmg4a3NaeDFXc1hGMjQ9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR05WN3crbzU2MGRnN3lSZlVCS1FvdnB6N252UFlaZGhiVEVoRSt3bnJXVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk9ZMzZZaENlWXRpTXdIRWorZDlzZU5tdkw0NTUzbWJOdTd4RGhEeTRPM009XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWURXbVB1K3RpY3F4bDNmTHh3dDdIalFjVk52RDlNTXBxSXdqTU1pcnlYQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInBnTldBZmZscld4azI0dkJaNU5VdFlOL25RWmhKMEV1UkFTYjhPOGZMQnM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJVSjBicWw2aEVWQWgxSStJSm5tclFtY1J2elIwb1dnbGZuSDQzYnVqTEZrPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMXdDOUVBMEVQK05ERGZWTUthYStsS2pxYW9EalhLTjE3OFNuZ2VWWXhtQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJqZ3RwM0pSMkNON2dYODZBa28wWHAyMW0xald0b3lKYlVaTWU0Z0d1WHZkUEc1ZjFCZmNFVnZ6QjVnaUtLWmNDZGNWV2FvQkZLbVpNR29qTjJPaDhCdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTMxLFwiYWR2U2VjcmV0S2V5XCI6XCJpdEl6ZVdvYU5GSnpBMWQ1eVNic3ZpdDNEMEVPMDBMdDFaWXYxd2NZeTI4PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTQ3ODQzNDUxMzZAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMEM4MjIwOTA3QTIzN0VGNTA2N0Y1OTg0NURGQTgzN0RcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMTg1MjA5Nn0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDc4NDM0NTEzNkBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI1RjEyRkM3RUU5NkE5NDkyNDc3NUQzMTMxMzZDMjhDN1wifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzExODUyMDk2fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiSVc4aTk4M3dUVy1Ea01vVWNVSTNlQVwiLFwicGhvbmVJZFwiOlwiZmVhZTdmNzctOTlmOS00OWVkLWE3YmEtNDcwZDMzNWI3OWY4XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCU0x0VXo2bmlOM09oTjZVSldzVzZkWTNYcm89XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImVvbHdzTksxY2R3ZVMzUG80TUd0TXJQZ3QwWT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDT2loNDMwUXQ1U2pzQVlZQVNBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIjlqYWhWMlhwcDhDNTdYSGV5WU9KZDlCUlBDaGkzSTBoYW5GcVJqckJuMU09XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJlUm1US09mcm9hZ2FDR2FmVGYxaWJpTDJibkVKM3FSN1l0ZHAwQ1RjeGo4T3ptM2Vpa282N2ZXMFMzdjlrRUJ2TElFRVNQTi8zcTVNZzBhVXJabVpCUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInhueFg3Z1lKSVI4VXFybXc1OWxEQ0Jha3lrTFVaeFpzUmNhVjZyUXdHc25QT2UzUzZMSmVsNWpYY1YvY0pTZjZTdG5ielRGbythbksrQXhJTW9MWEF3PT1cIn0sXCJtZVwiOntcImlkXCI6XCI5NDc4NDM0NTEzNjozQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjI1Mjc3NjM1NzU4MDk1MjozQGxpZFwiLFwibmFtZVwiOlwi8J+YglwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjk0Nzg0MzQ1MTM2OjNAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCZlkyb1ZkbDZhZkF1ZTF4M3NtRGlYZlFVVHdvWXR5TklXcHhha1k2d1o5VFwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTE4NTIwOTIsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBSXBYXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXBYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZnEwRzJnK0QvZjdMVXZLbFJHMVIreWcwNVFqZnEyN3dxMTRXR01sdm55OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjM3NzAzNDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTg1MjA5MzQ1NFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝗦𝗘𝗛𝗔𝗦 - 𝗠𝗗❤️",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝗦𝗘𝗛𝗔𝗦❤️",
  ownername:process.env.OWNER_NAME|| "𝗦𝗘𝗛𝗔𝗦 - 𝗠𝗗❤️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "𝗦𝗘𝗛𝗔𝗦",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
