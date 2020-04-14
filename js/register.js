document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
})
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
})
window.addEventListener('load', function() {
    var reg = document.querySelector('.reg_form');
    var inputs = reg.querySelectorAll('input');
    var spans = reg.querySelectorAll('span');
    var ems = reg.querySelectorAll('em');
    for (i = 0; i < spans.length; i++) {
        spans[i].className = 'warn';
    }
    spans[0].innerHTML = '请输入手机号';
    spans[1].innerHTML = '请输入6~14位密码';
    spans[2].innerHTML = '请再次输入密码';
    inputs[0].onblur = function() {
        if (this.value.length == 11 && this.value[0] == 1) {
            spans[0].className = 'success';
            spans[0].innerHTML = '恭喜您输入正确！';
        } else if (this.value == '') {
            spans[0].className = 'warn';
            spans[0].innerHTML = '请输入手机号';
        } else if (this.value[0] != 1) {
            spans[0].className = 'error';
            spans[0].innerHTML = '请输入1开头大陆手机号'
        } else {
            spans[0].className = 'error';
            spans[0].innerHTML = '请输入11位大陆手机号'
        }
    }
    inputs[2].onblur = function() {
        if (this.value.length <= 14 && this.value.length >= 6) {
            spans[1].className = 'success';
            spans[1].innerHTML = '恭喜您输入正确！';
        } else if (this.value == '') {
            spans[1].className = 'warn';
            spans[1].innerHTML = '请输入6~14位密码';
        } else {
            spans[1].className = 'error';
            spans[1].innerHTML = '请输入6~14位密码'
        }
    }
    inputs[2].onkeyup = function() {
        console.log(1);

        if (this.value.length >= 6 && this.value.length <= 8) {
            ems[0].className = 'ruo';
            ems[0].style.color = '#fff';
            ems[1].className = '';
            ems[1].style.color = '#ccc';
            ems[2].className = '';
            ems[2].style.color = '#ccc';
        } else if (this.value.length >= 9 && this.value.length <= 11) {
            ems[0].className = 'ruo';
            ems[0].style.color = '#de1111';
            ems[1].className = 'zhong';
            ems[1].style.color = '#fff';
            ems[2].className = '';
            ems[2].style.color = '#ccc';
        } else if (this.value.length >= 12) {
            ems[0].className = 'ruo';
            ems[0].style.color = '#de1111';
            ems[1].className = 'zhong';
            ems[1].style.color = '#40b83f';
            ems[2].className = 'qiang';
            ems[2].style.color = '#fff';
        } else {
            for (i = 0; i < ems.length; i++) {
                ems[i].className = '';
                ems[i].style.color = '#ccc';
            }
        }
    }
    inputs[3].onblur = function() {
        if (this.value == inputs[2].value && spans[1].className == 'success') {
            spans[2].className = 'success';
            spans[2].innerHTML = '恭喜您输入正确！';
        } else if (this.value == '') {
            spans[2].className = 'warn';
            spans[2].innerHTML = '请再次输入密码';
        } else if (this.value != inputs[2].value && spans[1].className == 'success') {
            spans[2].className = 'error';
            spans[2].innerHTML = '两次密码输入不相同！'
        } else {
            spans[2].className = 'error';
            spans[2].innerHTML = '请先输入6~14位登录密码'
        }
    }
})