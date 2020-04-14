document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
})
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
})
window.addEventListener('load', function() {
    var username = document.querySelector('#username');
    var password = this.document.querySelector('#password');
    var eye = this.document.querySelector('#eye');
    var flag = 0;
    username.onfocus = function() {
        if (this.value == '邮箱/用户名/手机号') {
            this.value = '';
        }
        this.style.color = '#333';
    }
    username.onblur = function() {
        if (this.value == '') {
            this.value = '邮箱/用户名/手机号';
        }
        this.style.color = '#b3b3b3';
    }
    password.onfocus = function() {
        if (this.value == '请输入密码') {
            this.value = '';
            if (flag == 0) {
                this.type = 'password';
            } else {
                this.type = 'text';
            }
        }
        this.style.color = '#333';
    }
    password.onblur = function() {
        if (this.value == '') {
            this.value = '请输入密码';
            this.type = 'text';
        }
        this.style.color = '#b3b3b3';
    }
    eye.onclick = function() {
        if (flag == 0) {
            password.type = 'text';
            this.src = 'img/open.png';
            flag = 1;
        } else {
            if (password.value == '请输入密码') {
                password.type = 'text';
            } else {
                password.type = 'password';
            }
            this.src = 'img/close.png';
            flag = 0;
        }
    }
})