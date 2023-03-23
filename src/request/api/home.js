import service from "..";
export function getBanner(i) {
    return service({
        method: "GET",
        url: "banner?type=" + i,
    })
}

export function getMusicList(i) {
    return service({
        method: "GET",
        url: "/personalized?limit=" + i,
    })
}
export function getUsrInfo(i) {
    return service({
        method: "GET",
        url: "/user/detail?uid=" + i,
    })
}
export function tranceCount(n) {
    if (n >= 100000000) return (n / 100000000).toFixed(1) + "亿";
    else if (n >= 10000) return (n / 10000).toFixed(1) + "万";
    return n;
}
export function getSearch(i) {
    return service({
        method: "GET",
        url: `/search?keywords=${i}`,
    })
}
export function getSearchAdvice(i) {
    return service({
        method: "GET",
        url: `/search/suggest?keywords=${i}&type=mobile`,
    })
}
export function getDefaultSearch() {
    return service({
        method: "GET",
        url: "/search/default",
    })
}
export function getHotSearch() {
    return service({
        method: "GET",
        url: "/search/hot",
    })
}
//login 
export function toLoginByPwd(info) {
    return service({
        method: "GET",
        url: `/login/cellphone?phone=${info.phone}&password=${info.password}`,
    })
}
export function sendCode(i) {
    return service({
        method: "GET",
        url: `/captcha/sent?phone=${i}`,
    })
}
export function VerifyCode(info) {
    return service({
        method: "GET",
        url: `/captcha/verify?phone=${info.phone}&captcha=${info.code}`,
    })
}
export function qrCodeLoginKey(timestamp) {
    return request.get('/login/qr/key?timestamp=' + timestamp)
}
export function qrCodeLoginImg(key) {
    return request.get('/login/qr/create?qrimg=true&key=' + key)
}
export function qrCodeLoginCheck(key, timestamp) {
    return request.get('/login/qr/check?key=' + key + '&timestamp=' + timestamp)
}

export function getUserDetail(uid) {
    return service({
        method: "GET",
        url: `/user/detail?uid=${uid}`,
    })
}
export function getUserPlaylist(uid) {
    return service({
        method: "GET",
        url: `/user/playlist?uid=${uid}`,
    })
}