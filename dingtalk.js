const co = require('co');
const moment = require('moment');
const DingTalk = require('node-dingtalk');
const dingtalk = new DingTalk({
    corpid: 'Dingae1addb33879de6535c2f4657eb6378f',
    corpsecret: 'Ek52FbRK1wsC3iwDoexqLJdAyGrl-pk22-7KTu12eLoZUcy3myeA4GgfyftKOmvN'
});

co(function* () {
    const result = yield dingtalk.message.send({
        touser: 'manager9421',
        agentid: '178717982',
        msgtype: 'text',
        text: {
            content: `${moment().format('HH:mm:ss')}: Pi miss you 😗😙😚😘😍.`,
        },
    });

    return result;
}).then(function (value) {
    console.log(value);
}, function (err) {
    console.error(err.stack);
});