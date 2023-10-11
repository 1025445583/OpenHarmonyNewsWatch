
// import router from '@ohos.router'
import router from '@system.router'
export default {
    data: {
    },
    handleWhiteBlack() {
        router.push({
            uri:"pages/WhiteBlack/WhiteBlack",    //路由在config.json文件中
        })
    },
    handleComic() {
        router.push({
            uri:"pages/randomComic/randomComic",    //路由在config.json文件中
        })
    },
    handleBeauty() {
        router.push({
            uri:"pages/randomBeauty/randomBeauty",    //路由在config.json文件中
        })
    },
}