const { input, pour } = require('./utils');
const path = require('path');
const fs = require('fs');

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
        let indexFilePath = path.join(p, './index.html');
        console.log(p);
        let time = new Date().toLocaleString();
        let file = fs.readFileSync(indexFilePath);
        let bodyEndindex = /<\/body>/.exec(file).index;
        let left = file.slice(0, bodyEndindex);
        let right = file.slice(bodyEndindex);
        let content = `${left}<script>console.log("构建时间：${time}")</script>${right}`;
        fs.writeFileSync(indexFilePath, content);
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
