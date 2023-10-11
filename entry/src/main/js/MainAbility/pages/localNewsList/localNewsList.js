import router from '@system.router';
import http from '@ohos.net.http';
export default {
    data: {
        search_text: "浙江省_宁波市",
        page:1,
        content:[{
            title:"宁波",
        }],
        fetch:function (){
            let httpRequest = http.createHttp();
            //发起网络请求
            httpRequest.request("https://v.api.aa1.cn/api/api-tplist/go.php/api/News/local_news",
                {
                    method: http.RequestMethod.GET, // 可选，默认为http.RequestMethod.GET
                    // 开发者根据自身业务需要添加header字段
                    // 当使用POST请求时此字段用于传递内容
                    header: {
                        'Content-Type': 'application/json'
                    },
                    extraData: {
                        name: this.search_text,
                        page: this.page
                    },
                },
                (err, data) => {
                    if (!err) {
                        console.info('header:' + JSON.stringify(data.header));
                        let res = JSON.parse(data.result)
                        this.content = res['data']
                        httpRequest.destroy();
                    } else {
                        console.info('error:' + JSON.stringify(err));
                        httpRequest.destroy();
                    }
                });
        },

    },
    onInit() {
        const params = router.getParams();
        this.search_text = params["search_text"];
        this.fetch()
    },
    pre (){
        if (this.page > 1){
            this.page = this.page - 1
            this.fetch()
        }

    },
    next (){
        this.page = this.page + 1
        this.fetch()
    },
    moreInfo(){
        router.push({
            uri:"pages/moreNews/moreNews",
            params:{
                title:this.content[0].title
            }
        })
    }
}
