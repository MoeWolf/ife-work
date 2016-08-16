window.onload = function () {
    var list = $('.picList');
    var button = document.getElementById('lightButton').getElementsByTagName('li');
    var index = 0;

    function showButton() {         // 显示小圆点
        for (var i = 0, len = button.length; i < len; i++) {
            if (button[i].className === 'light') {
                button[i].className = '';
                break;
            }
        }
        button[index].className = 'light';
    }

    var animated = false;            // 是否正在进行切换

    function animate(offset) {       // 图片切换
        animated = true;
        var newLeft = parseInt(list.style.left) + offset;
        var time = 300;              // 切换总时间
        var interval = 10;            // 切换间隔
        var speed = offset / (time / interval);    // 每次切换位移量

        function go () {
            if (   (speed < 0 && parseInt(list.style.left) > newLeft)
                || (speed > 0 && parseInt(list.style.left) < newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, interval);
            }
            else {
                list.style.left = newLeft + 'px';
                if (newLeft >= 0) {
                    list.style.left = -3600 + 'px';
                }
                else if (newLeft <= -4200) {
                    list.style.left = -600 + 'px';
                }
                animated = false;
            }
        }
        go();
    }

    

    for (var i = 0, len = button.length; i < len; i++) {     // 点击小圆点
        button[i].onclick=function() {
            if (!animated) {
                var toIndex = parseInt(this.getAttribute('index'));
                if (toIndex === index) {
                    return;
                }
                animate((toIndex - index) * (-600));
                index = toIndex;
                showButton();
            }
        }
    }
};
