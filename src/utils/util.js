const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const jmt_match = (str, flag) => {
  var reg = new Array();
  reg[0] = /^1\d{10}$/i;
  reg[1] = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z0-9]+)$/;

  if (reg[flag].test(str)) {
    return true;
  }
  return false;
}

const Trim =(str) => {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}  
module.exports = {
  formatTime: formatTime,
  jmt_match: jmt_match,
  Trim: Trim
}
