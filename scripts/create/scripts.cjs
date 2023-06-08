const path = require('path');
const fs = require('fs');
const shelljs = require('shelljs');


/**
 * 创建活动
 * @param {object} options
 * @param {string} options.name 活动名
 * @param {string} options.template 模板名
 */
module.exports.createActivity = async function createActivity(options) {
    let { template } = options;
    const { name } = options;

    
    const PAGES_PATH = path.join(__dirname, '../../src/activitys', name);
    const templates = fs.readdirSync(path.join(__dirname, '../../src/template'));

    if (!templates.includes(template)) {
        template = 'default';
    }
    //获取模板
    const TEMPLATE_PATH = path.join(__dirname, '../../src/template', template);

    const newActivityName = options.name;
    console.log(templates, template);

    if (fs.existsSync(PAGES_PATH)) {
        console.log(newActivityName, ' 活动已经存在');
        return false;
    }

    try {
        shelljs.cp('-R', TEMPLATE_PATH, PAGES_PATH);
        console.log(`name为 ${newActivityName} 活动创建成功`);
        return true;
    } catch (err) {
        console.log('创建活动失败:', err);
        return false;
    }
};

