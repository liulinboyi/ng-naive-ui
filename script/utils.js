// 学习于https://www.jianshu.com/p/b761111eef72 http://nodejs.cn/api/readline.html
const readline = require('readline');
const { spawn, exec } = require('child_process');
const process = require('process');

// exec('git status', {cwd: '/home/ubuntu/distro'}, /* ... */);

async function input() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    let answer = await new Promise((resolve) => {
        rl.question('请输入请求的目录: ', function (answer) {
            // console.log('你输入的是 %s', answer);
            resolve(answer);
            // 不加close，则不会结束
        });
    });
    rl.close();
    return answer;
}

const pour = (
    cmd,
    args,
    opts = {
        encoding: 'utf8'
    },
    stdout = process.stdout,
    stderr = process.stderr
) => {
    return new Promise((resolve, reject) => {
        const p = spawn(cmd, args, opts);
        p.stdout.setEncoding('utf-8');
        p.stdout.on('data', (data) => {
            stdout.write(data, 'utf8');
        });
        p.stderr.on('data', (data) => {
            stderr.write(data);
        });
        p.on('close', (code) => {
            resolve(code);
        });
    });
};

module.exports = {
    input,
    pour
};
