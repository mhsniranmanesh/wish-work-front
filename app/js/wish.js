
$(document).ready(function() {
    var persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    $('.persian').text(function(i, v) {
        var chars = v.split('');
        for (var i = 0; i < chars.length; i++) {
            if (/\d/.test(chars[i])) {
                chars[i] = persianNumbers[chars[i]];
            }
        }
        return chars.join('');
    });


});
