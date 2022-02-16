const { input, pour } = require('./utils');
const path = require('path');

async function exec(shell, args, opt) {
    console.log(`${shell} ${args.join(' ')}`);
    await pour(shell, args, opt);
}

void (async function () {
    try {
        //   let path = await input();
        //   if (!path)
        //     throw new Error("清输入目录！");

        //   console.log('请求的目录是: %s', path);
        let p = path.join(__dirname, '../dist/site');
        console.log(p);
        // await exec('cd', [p])
        await exec('cp', ['index.html', '404.html'], {
            cwd: p
        });
        await exec('git', ['init'], {
            cwd: p
        });
        await exec('git', ['checkout', '--orphan', 'gh-pages'], {
            cwd: p
        });
        await exec('git', ['add', '.'], {
            cwd: p
        });
        await exec('git', ['commit', '-m', '"init project"'], {
            cwd: p
        });
        await exec('git', ['remote', 'add', 'origin', 'https://github.com/liulinboyi/ng-naive-ui.git'], {
            cwd: p
        });
        await exec('git', ['push', 'origin', 'gh-pages', '-f'], {
            cwd: p
        });
    } catch (error) {
        console.log(error);
    }
})();
