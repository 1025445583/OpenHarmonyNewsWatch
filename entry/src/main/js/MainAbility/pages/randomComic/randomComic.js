import http from '@ohos.net.http';
export default {
    data: {
        pic_url: "common/images/loading.gif",
        fetch:function (){
            let httpRequest = http.createHttp();
            //发起网络请求
            httpRequest.request("https://v2.api-m.com/api/randomAcgPic",
                {
                    method: http.RequestMethod.GET, // 可选，默认为http.RequestMethod.GET
                    // 开发者根据自身业务需要添加header字段
                    // 当使用POST请求时此字段用于传递内容
                    header: {
                        'Content-Type': 'application/json'
                    },
                    extraData:{
                        type:"wap",
                        return:"json",
                    }
                },
                (err, data) => {
                    if (!err) {
                        console.info('header:' + JSON.stringify(data.header));
                        let res = JSON.parse(data.result)
                        this.pic_url = res["data"]
                        httpRequest.destroy();
                    } else {
                        console.info('error:' + JSON.stringify(err));
                        httpRequest.destroy();
                    }
                });
        },
    },
    onInit() {
        this.fetch()
    }
}
