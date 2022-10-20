const { Post } = require('../models');

const postData = [
    {
        title: "Google Play celebrates its 10-year anniversary with a new logo!",
        post_content: "Google Play Store was introduced as “Android Market” back in 2012 which was later rebranded as 2012. Google is celebrating 10-year anniversary of the app today.  To mark this occasion, Google has revamped the logo of its app store in addition to introducing offers to the users.",
        user_id: 3
    },
    {
        title: "Who has a billion views on YouTube?",
        post_content: "An early metric of a video's popularity was the so-called Billion-View Club, denoting videos which had succeeded in reaching over 1 billion views since their initial upload.In December 2012, Gangnam Style became the first video to reach one billion views. By June 2015, only Baby had also managed to pass this threshold, but, by October 2015, a total of ten videos had done so, and the number grew further to over 200 in February 2022.",
        user_id: 1
    },
    {
        title: "Otternal Life now available!",
        post_content: "Otternal Life is a habit tracker app. It helps you build new habits by reminding you to do whatever your habit is every day. It comes with a progress tracker, a journal function to write down your feelings about everything, and it works offline. There is a streak system employed to kind of gamify your new habits or stopping of bad habits.",
        user_id: 2

    },
    {
        title: "Tech Blog has been released!",
        post_content: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site will be built from scratch and deployed to Heroku. The app will follow MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
        user_id: 5
    },
    {
        title: "Just Tech News goes public!",
        post_content: "It's hard to imagine a phone getting much better than this. The Z Fold 4 does it all: from taking great pictures, to multitasking like a laptop. Sure, it's got a high price tag and the hardware can be a bit bulky, but it packs a tablet and a phone into one amazing device. That, complete with better performance, battery life, and cameras than the previous generation, and you'll find the Fold 4 is unmatched in its prowess.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;