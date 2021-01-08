const tpl = require('./utils');
console.log('tpl' ,tpl)
function tplLoader (source) { /* 此处的souce就是需要解析的字符串 <div><h1>{{name}}</h1><p>{{age}}</p><p>{{interest}}</p><p>{{job}}</p></div> */
  source = source.replace(/\s+/g, '');
  console.log(source)
  return  `export default (options) => {
    ${tpl.toString()};
    return tpl(options, '${source}');
  }`
  /* 此处的options就是tpl方法传入的参数
    const info = tpl({
      name: 'charlie',
      age: 24,
      interest: 'video game; music;',
      job: 'front-end devloper'
    });
  */
}

module.exports = tplLoader
