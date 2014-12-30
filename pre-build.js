var superagent = require('superagent');

superagent.get('https://api.github.com/orgs/wandoulabs/repos?type=public')
    .end(function (err, res) {

        console.log('/**');
        console.log(' * This file automatically generated from `pre-build.js`.');
        console.log(' * Please do not manually edit.');
        console.log(' */');
        console.log();
        console.log();

        var repos = {},
            i = 0,
            data = res.body,
            length = data.length;

        for (; i < length; i++) {
            //now i use html_url
            //TODO
            repos[data[i].name] = data[i]['html_url'];
        }

        console.log('module.exports = %s;', JSON.stringify(repos, null, 2));
    });

