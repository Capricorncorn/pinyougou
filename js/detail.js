window.addEventListener('load', function() {
    // 获取元素
    var lis = document.querySelector('.detail_tab_list').querySelectorAll('li');
    var items = document.querySelectorAll('.item');
    var preview_img = document.querySelector('.preview_img');
    var pre_img = document.querySelector('#pre_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var bigImg = document.querySelector('.bigImg');
    var list_item = document.querySelector('.list_item');
    var lis_item = list_item.querySelectorAll('li');

    for (var i = 0; i < lis.length; i++) {
        // lis[i].index = i;
        lis[i].setAttribute('data-index', i);
        lis[i].onclick = function() {
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = '';
                items[j].style.display = 'none';
            }
            this.className = 'current';
            items[this.getAttribute('data-index')].style.display = 'block';
        }
    }
    // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
            mask.style.display = 'none';
            big.style.display = 'none';
        })
        // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var maskMax = this.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })
    for (var i = 0; i < lis_item.length; i++) {
        lis_item[i].setAttribute('data-index', i);
        lis_item[i].addEventListener('mouseover', function() {
            for (var j = 0; j < lis_item.length; j++) {
                lis_item[j].className = '';
            }
            this.className = 'current';
            pre_img.src = bigImg.src = 'upload/pre_img_' + this.getAttribute('data-index') + '.jpg';
        })
    }
})