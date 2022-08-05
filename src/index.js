module.exports = function check(str, bracketsConfig) {
  // your solution
  let len = str.length;

    if (len % 2 == 1) {
        return false;
    }

    let tempStr = str;

    for(let i = 0; i < len / 2 ; i++) {

        for (let j = 0; j < bracketsConfig.length; j++) {

            let un = bracketsConfig[j][0] + bracketsConfig[j][1];
            if (tempStr.includes(un)) {
                let pos = tempStr.indexOf(un);
                let left = tempStr.slice(0, pos);
                let right = tempStr.slice(pos + 2, len);
                tempStr = left + right;
            }
        }
    }

    return tempStr.length == 0;
}
