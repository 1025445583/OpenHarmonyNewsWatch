// import router from '@ohos.router';
import http from '@ohos.net.http';
import router from '@system.router'
export default {
    data: {
        content: {
            text_raw:"试测试测试测试测试测试测试测试测试测试测试测试测试测试",
            user:"用户",
            data:[],
        },
        news_id:"1",
        fetch_data:function (){
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
                        n: this.news_id,
                    },
                },
                (err, data) => {
                    if (!err) {
                        console.info('header:' + JSON.stringify(data.header));
                        let res = JSON.parse(data.result)
                        this.content = res
                        httpRequest.destroy();
                    } else {
                        console.info('error:' + JSON.stringify(err));
                        httpRequest.destroy();
                    }
                });
        }
    },

    onInit() {
        const params = router.getParams();
        this.news_id = params["news_url"];
        this.fetch_data()
    },
    reloadWeb(){}
}
