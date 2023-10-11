import router from '@system.router';
export default {
    data: {
        province: "浙江",
        city:"宁波",
    },
    onInit() {

    },
    handleProvince({value:inputValue}){
        this.province = inputValue
    },
    handleCity({value:inputValue}){
        this.city = inputValue
    },
    handleSearch() {
        router.push({
            uri:"pages/localNewsList/localNewsList",
            params:{
                search_text:this.province+'省_'+this.city+'市',
            }
        })
    }
}
