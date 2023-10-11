import http from '@ohos.net.http';
// import router from '@ohos.router';
import router from '@system.router'
export default {
    data: {
        status:"正在加载",
        todolist: [],
        fetch_data:function () {
            let httpRequest = http.createHttp();
            //发起网络请求
            httpRequest.request("https://xiaobai.klizi.cn/API/other/weibo_all_1.php",
                {
                    method: http.RequestMethod.GET, // 可选，默认为http.RequestMethod.GET
                    // 开发者根据自身业务需要添加header字段
                    // 当使用POST请求时此字段用于传递内容
                    header: {
                        'Content-Type': 'application/json'
                    },
                    extraData: {
                        n: "",
                    },
                },
                (err, data) => {
                    if (!err) {
                        console.info('header:' + JSON.stringify(data.header));
                        // let res = JSON.parse(data.result)
                        let res = data.result.split('\n')
                        this.status = "加载完毕"
                        this.todolist = res
                        httpRequest.destroy();

                    } else {
                        console.info('error:' + JSON.stringify(err));
                        this.today = "加载失败"
                        httpRequest.destroy();
                    }
                });
        },
    },

    onShow(){
    },
    onInit(){
        this.fetch_data()
    },
    handleListItem(e) {
        router.push({
            uri:"pages/newsdetail/newsdetail",
            params: {
                // data: e.currentTarget.dataSet.title,
                news_url:e.currentTarget.dataSet.index + 1
            }
        })
    }
}