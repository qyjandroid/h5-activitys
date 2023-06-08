/* eslint-disable  */
const commander = require('commander');
const scriptsModule = require('./scripts.cjs');

console.log("scriptsModule:", scriptsModule)

commander.option('-n, --name <type>', 'add the specified activity name ');
commander.option('-t, --template <type>', 'Select the template name you want to use');

commander.parse(process.argv);

const options = commander.opts();
console.log("process.argv::", options);
console.log(`活动初始化参数:name: ${options.name} template: ${options.template}`);

scriptsModule.createActivity(options)
