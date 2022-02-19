// https://www.prettier.cn/docs/index.html
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,//不生效，差评
  semi: false,//不生效，差评
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}
//https://blog.csdn.net/z_xuewen/article/details/84781863