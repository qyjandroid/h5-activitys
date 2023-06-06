import { readdir } from "fs/promises";
import { resolve } from "path";
// 命令行交互工具函数
import inquirer from "inquirer";

class Build {
  constructor() {
    this.pagesPath = resolve("src/pages");
  }
  async main() {
    // 读取pages 项目目录并存储
    await this.setData();
    // 命令行交互（选择打包的项目）
    await this.selectBuildName();
  }
  async setData() {
    const pagesDir = await readdir(this.pagesPath);
    const choices = pagesDir.map((item) => `${item} => 多页面项目`);
    this.questions = [
      {
        type: "rawlist",
        name: "page",
        message: "选择要打包的项目",
        choices,
      },
    ];
  }
  selectBuildName() {
    return inquirer.prompt(this.questions).then(async (answers) => {
      const { page } = answers;
      const pageName = page.split("=>")[0].trim();
      this.pageName = pageName;
    });
  }
}

export default new Build();