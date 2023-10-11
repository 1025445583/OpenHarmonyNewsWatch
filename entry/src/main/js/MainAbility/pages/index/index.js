
// import router from '@ohos.router'
import router from '@system.router'
export default {
    data: {
    },
    handleStory() {
        router.push({
            uri:"pages/topicstory/topicstory",    //路由在config.json文件中
        })
    },
    handleRandomWeibo() {
        router.push({
            uri:"pages/randomWeibo/randomWeibo",    //路由在config.json文件中
        })
    },
    handleRandomPic() {
        router.push({
            uri:"pages/randomPic/randomPic",    //路由在config.json文件中
        })
    },
    handleLocalNews() {
        router.push({
            uri:"pages/localNews/localNews",    //路由在config.json文件中
        })
    },
}