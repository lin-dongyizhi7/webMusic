import service from "..";

export function getMusicItemList(id, limit) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${id}`,
    })
}

export function getMusicDetail(id) {
    return service({
        method: "GET",
        url: `/song/detail?id=${id}`,
    })
}

export function getMusicUrl(id) {
    return service({
        method: "GET",
        url: `/song/url?id=${id}`,
    })
}

export function getMusicLyric(id) {
    return service({
        method: "GET",
        url: `/lyric?id=${id}`,
    })
}

export function getMvUrl(id) {
    return service({
        method: "GET",
        url: `/mv/url?id=${id}`,
    })
}

export function getComments(data) {
    return service({
        method: "GET",
        url: `/comment/${data.type}?id=${data.id}&limit=${data.limit}`,
    })
}