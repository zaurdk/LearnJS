function checkSpam(str) {
    let checkedPhrase = str.toLowerCase();

    if ( checkedPhrase.indexOf('viagra') >= 0 || checkedPhrase.indexOf('xxx') >= 0) {
        return true;
    } else {
        return false;
    }
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));