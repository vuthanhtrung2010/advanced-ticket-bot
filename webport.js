const e=require('express');const s=e();s.all('/', (req, res)=>{res.setHeader('Content-Type', 'text/html'); res.send(`<html><head> <link href="https://fonts.googleapis.com/css?family=Roboto Condensed" rel="stylesheet"> <style>body{font-family: "Roboto Condensed"; font-size: 21px; color: white; background-color: #23272A; margin-left: 5%; margin-top: 2%;}a{color: #5865F2}a:hover{color: #818bff}h1{font-size: 48px;}</style></head><body> <h1>✅ Hosting Port Activated 🌐</h1> <p>Bot type: <b>Ticket Bot</b></a> <br/><br/><i>Made by:</i> <a href="https://discord.gg/dCUskFCBGW">Trung</a></b><br/><i>Coded By: </i><b>Trung#0649<b/><br/><br/> <a href="https://discord.gg/dCUskFCBGW"> <img src="https://discord.com/api/guilds/906034372577206352/widget.png?style=banner2"> </a><br/><br/><i>Make sure to add the repl.co URL to some sort of <a href="https://uptimerobot.com/">UPTIMER LINK SYSTEM</a></i></p></body></html>`); res.end();});function k(){s.listen(3000, ()=>{console.log("24/7 Keepalive Server is online! Make sure to add the Replit.co URL to an Uptimer System")});}module.exports=k;