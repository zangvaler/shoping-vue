

const BASEURL = "http://0.0.0.0:7300/mock/5d9e7e4a655c0b089af8c82a/smileVue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShopingMallInfo: BASEURL + 'SmileVue',    //商城首页所有信息
    getGoodsInfo: BASEURL + 'getGoodsInfo',
    registerUser: LOCALURL + 'user/register',  //用户注册接口
    login: LOCALURL + 'user/login',  //用户登录接口
    getDetailGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo',  //获取商品详情
    getCateGoryList: LOCALURL + 'goods/getCateGoryList',  //得到大类信息
    getCateGorySubList: LOCALURL + 'goods/getCategorySubList',  //得到小类信息
    getGoodsListByCategorySubID: LOCALURL + 'goods/getGoodsListByCategorySubID',  //得到小类商品信息
}

module.exports = URL