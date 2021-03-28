module.exports = msg => {
if(msg.content.startsWith('nuke')){
if(msg.member.hasPermission('ADMINISTRATOR')) {
msg.reply('https://i.pinimg.com/originals/6c/48/5e/6c485efad8b910e5289fc7968ea1d22f.gif  nuking in 5 second')
setTimeout(() => msg.channel.delete(), 5000)
}
else msg.reply('You are not authorized')
}
}