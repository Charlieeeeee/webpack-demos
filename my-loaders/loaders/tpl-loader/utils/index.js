module.exports =  function tpl (options, source) {
  /**
  * 把source里的{{param}}替换成具体的字符串
  */
  source = source.replace(/\{\{(.*?)\}\}/g, (m, key) => {
    return options[key]
  });
  return source;
}