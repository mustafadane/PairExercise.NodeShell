//Output a prompt
let pwdFunc = require('./pwd.js')
let lsFunc = require('./ls.js')
process.stdout.write('type somthing >');


//This stdin 'data' even fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd'){
        pwdFunc();
    }
    else if (cmd === 'ls'){
        lsFunc();
    }

    else {
        process.stdout.write('You typed: ' + cmd);
    }

    global.setTimeout(function() {process.stdout.write('\ntype somthing else > ')}, 1000);
})
