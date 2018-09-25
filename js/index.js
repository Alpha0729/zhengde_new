window.onload = function () {
    /*下拉菜单*/
    var oDiv = document.getElementById('div');
    var oUl = document.getElementById('ul');
    var dir = null;
    oDiv.onclick = function () {
        if (dir === true) {
            oUl.style.display = 'block';
            dir = false;
        } else {
            oUl.style.display = 'none';
            dir = true;
        }
        return false;
    };
};

