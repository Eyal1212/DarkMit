const {Client ,Attachment , RichEmbed} = require("discord.js"); //use the discord.js for create a user
const bot = new Client(); // create the user in this case bot
const conf = require("./config.json"); //where i placed a const variables
var inText =0;
var after;
roasts = [
    "https://media.giphy.com/media/RdKjAkFTNZkWUGyRXF/giphy.gif",
    "https://media.giphy.com/media/Ebu8aRL2qxMzK/giphy.gif",
    "https://media.giphy.com/media/44Eq3Ab5LPYn6/giphy.gif",
    "https://media.giphy.com/media/bNdFHfp0VIiME/giphy.gif" 
]; //will have all the gifs of roast

kills = [
    "https://media1.tenor.com/images/576e044979423492cffb6d9430f120a8/tenor.gif?itemid=5743672",
    "https://media.giphy.com/media/rDOW7YUXV4IOA/giphy.gif",
    "https://giphy.com/gifs/fight-sun-sense8-xT1XGBamT4gKtRfCfe",
    "https://giphy.com/gifs/face-australia-helmet-XvQXEi09zfmcE",
    "https://giphy.com/gifs/finger-guns-cute-v8k9PaAQphzwI",
    "https://giphy.com/gifs/murder-srELT0Or07YxG"
]; // will have all the gifs of kills
transforms = [
    "https://media.giphy.com/media/10zD5QWQK2zZw4/giphy.gif",
    "https://media.giphy.com/media/7utU8eTzIJAju/giphy.gif",
    "https://media.giphy.com/media/VAqlxtQy2462I/giphy.gif",
    "https://giphy.com/gifs/funimation-mega64-dbz-dragon-ball-z-funimation-dragonball-fusion-P4TqKx6NHyLnO",
    "https://giphy.com/gifs/disneymoana-disney-animation-moana-l2Sq8wyY1Zfndp6Lu",
    "https://media.giphy.com/media/EclMN6WQzw4jC/giphy.gif"
]
dances = [
    "https://media.giphy.com/media/eCGTfFtjcp928/giphy.gif",
    "https://media.giphy.com/media/6fScAIQR0P0xW/giphy.gif",
    "https://giphy.com/gifs/originals-reaction-3o6oziEt5VUgsuunxS",
    "https://giphy.com/gifs/thedudeperfectshow-cmt-the-dude-perfect-show-l3V0lsGtTMSB5YNgc",
    "https://giphy.com/gifs/dance-happy-excited-Ve20ojrMWiTo4",
    "https://giphy.com/gifs/WXjuxv5mGZXqg",
    "https://media.giphy.com/media/ujHXZvh8S0XNm/giphy.gif"
];
prefix = conf.prefix; //get the prefix
roast = 1; //use in roast command
bot.on('ready', () => {
    bot.user.setActivity("Prefix: dm!help");
});
bot.on('message', msg =>{
    if(msg.author.bot || !msg.content.startsWith(conf.prefix)) return;// if message sended without prefix or sended by bot return
    var command = msg.content.split(" ")[0].slice(conf.prefix.length).toLowerCase(); //split the content and save
    var splited = msg.content.split(" ");
    if(splited[0].toLowerCase() == prefix + "what" && splited[1].toLowerCase() == "is" && splited[2].toLowerCase() == "my" && splited[3].toLowerCase() == "avatar")
    {
        msg.channel.send(msg.author.avatarURL);
    }
    if(splited[0] == prefix + "play")
    {
        if(msg.member.voiceChannel)
        {
            msg.member.voiceChannel.join();

        }
    }
    if(splited[0].toLowerCase() == prefix + "roast")
    {
        if(splited[1])
        {
            gif = new RichEmbed().setTitle("Roasted").setImage(roasts[Math.floor(Math.random() * roasts.length)]).setDescription("Roasted " + splited[1]);
            msg.reply (gif);
        }else
        {
            msg.reply("ARE YOU JOKEING ME???")
        }
        
    }
    if(splited[0].toLowerCase() == prefix + "kill")
    {
       
        msg.reply("killed " + splited[1] + "\n" +kills[Math.floor(Math.random() * kills.length)]);
    }
    
    if(splited[0].toLowerCase() == prefix + "transform")
    {
        
        msg.reply("Is evolving!!!\n" + transforms[Math.floor(Math.random() * transforms.length)])
    }
    if(splited[0].toLowerCase() == prefix + "dance")
    {
        
        msg.reply(gif);
    }
    if(splited[0] == prefix + "help")
    {
        msg.channel.send("CREATED BY EBS AND ESH \ndm!roast @someone - roast someone \ndm!kill @someone - kill someone \ndm!dance - dancing!!!\ndm!what is my avatar - send your profile image\ndm!transform - transformers!!! \ndm!help - do the shit you'v just done")
        
    }
})

