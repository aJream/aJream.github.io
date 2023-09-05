var OriginTitle = document.title;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '╭(°A°`)╮ 页面崩溃了!!!';
    } else {
        document.title = '(ฅ>ω<*ฅ) 欢迎回来 ~';
        setTimeout(function () {
            if (!document.hidden) {
                document.title = OriginTitle;
            }
        }, 2000);
    }
});