$(document).ready(function(){
/*
$.ajax({
     type: 'get',
     url: "http://120.234.3.186:8581/api/getMenuBySelective.do",
		 data:{"branchUuid=BA170F434FE149988EFDDD17F64B2C18&pageIndex=1&pageSize=10&_=1445670487561"}
    dataType: 'script', 
	jsonp: "callbackparam",//´«µÝ¸øÇëÇó´¦Àí³ÌÐò»òÒ³ÃæµÄ£¬ÓÃÒÔ»ñµÃjsonp»Øµ÷º¯ÊýÃûµÄ²ÎÊýÃû(Ä¬ÈÏÎª:callback)  
	jsonpCallback:"jQuery18203281816807575524_1445670487469",
	 success: function(json){
		 alert(json);  
	 }
});*/
// $.ajax({
//      type: 'get',
//      url: "http://120.234.3.186:8581/api/getMenuBySelective.do?callback=jQuery18203281816807575524_1445670487469&branchUuid=BA170F434FE149988EFDDD17F64B2C18&pageIndex=1&pageSize=10&_=1445670487561",
// 	 dataType: 'jsonp', 
// 		 jsonpCallback:"jQuery18203281816807575524_1445670487469",
// 	 success: function(json){
// 		 rederHtmlPage(json)


// 	 }
// });
	rederHtmlPage(dataJson);
});

function rederHtmlPage(json){
var sectionHtml = $(".menuSection").parent().html(); 
	for (sub in json.data)
	{
		var data = json.data[sub];
		$(".container").append(sectionHtml);
		$(".menu_name").last().text(data.name);
		$("img").last().prop("src","http://seller.didimeishi.cn/"+data.picture);
		$(".menu_price_number").last().text(data.price);
	}

	/*
	<div class="row menuSection">
	<div class="col-xs-6">
	<div class="imgContainer">
	<img src="http://seller.didimeishi.cn/menu_pic/A00157.jpg" <="" div="">	</div>
</div>
	<div class="col-xs-6 ">
	<div class="menu">
	<b class="menu_name">éÏé­²Ë³¤¶¹½Ç</b>
	<br>
	<a class="menu_price">¼Û¸ñ£º£¤<a class="menu_price_number">10Ôª</a>/·Ý</a>
	<br>
	<a class="menu_type">¿ÚÎ¶£º<select>
	<option>Çåµ­Î¶</option>
	<option>ÂéÀ±Î¶</option>
	<option>ÏãÀ±Î¶</option>
	</select></a>


	
	</div>
	<div class="selectNumber">
<button class="button button-circle button-tiny selectCount_Left"><i class="fa fa-minus"></i></button>
<input type="text" value="1">
<button class="button button-circle button-tiny selectCount_Right"><i class="fa fa-plus"></i></button>
</div>
</div>
		</div>
	*/
/*
branch_uuid: "BA170F434FE149988EFDDD17F64B2C18"
buy_count: 6
company: "·Ý"
food_type_uuid: "6ECC3D73BA4641DEA7694C927A38E029"
like_count: 0
material: "½ð¾Æ¡¢²¤ÂÜÖ­¡¢ÂÌ±¡ºÉ"
name: "»·ÓÎÊÀ½ç"
picture: "\menu_pic\A00157.jpg"
price: 17
taste: "²»¼ÓÀ±½·,Î¢À±,ÖÐÀ±,×îÀ±"
uuid: "74C3E6500A05432885036A2E01FDF6A8"
*/


}


var dataJson = {
    "count": 17,
    "data": [
        {
            "uuid": "74C3E6500A05432885036A2E01FDF6A8",
            "name": "环游世界",
            "food_type_uuid": "6ECC3D73BA4641DEA7694C927A38E029",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "金酒、菠萝汁、绿薄荷",
            "like_count": 0,
            "buy_count": 6,
            "price": 17,
            "picture": "\\menu_pic\\A00157.jpg"
        },
        {
            "uuid": "82514DFBA8D04230B443AE587D3A03B2",
            "name": "超级T骨扒",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "牛排",
            "like_count": 0,
            "buy_count": 10,
            "price": 15,
            "picture": "\\menu_pic\\A00176.jpg"
        },
        {
            "uuid": "02F95D5F567F4E56AAF5E6AEB02F5168",
            "name": "扒挪威三文鱼配玉桂薯泥刁草忌廉汁",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "三文鱼、莲藕",
            "like_count": 0,
            "buy_count": 3,
            "price": 12,
            "picture": "\\menu_pic\\A00174.jpg"
        },
        {
            "uuid": "139458CD2F994329A38F70917B9D533F",
            "name": "卡布奇诺",
            "food_type_uuid": "6ECC3D73BA4641DEA7694C927A38E029",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "咖啡、奶昔",
            "like_count": 0,
            "buy_count": 2,
            "price": 109,
            "picture": "\\menu_pic\\A00154.jpg"
        },
        {
            "uuid": "E76C52A808F84563A8E4690EBD731ED2",
            "name": "果木小扒皇拼龙脷柳",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "牛肉",
            "like_count": 0,
            "buy_count": 1,
            "price": 96,
            "picture": "\\menu_pic\\A00180.jpg"
        },
        {
            "uuid": "40646DB88C244614BE7C40DB26451920",
            "name": "煎法国鹅肝配沙律叶意大利黑醋汁",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "鹅肝、土豆、生菜",
            "like_count": 0,
            "buy_count": 1,
            "price": 47,
            "picture": "\\menu_pic\\A00182.jpg"
        },
        {
            "uuid": "0D6BA40BFF6D4139BDCDAFB3A8FFE05C",
            "name": "花式咖啡",
            "food_type_uuid": "6ECC3D73BA4641DEA7694C927A38E029",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "咖啡、奶油",
            "like_count": 0,
            "buy_count": 0,
            "price": 35,
            "picture": "\\menu_pic\\A00156.jpg"
        },
        {
            "uuid": "ABEABE0AA3CE4DA3B188DA7CEF47C636",
            "name": "法式烤鸡",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "烤鸡",
            "like_count": 0,
            "buy_count": 0,
            "price": 26,
            "picture": "\\menu_pic\\A00178.jpg"
        },
        {
            "uuid": "E4D86049517C448F897A290EB069A92F",
            "name": "加洲牛肉芝士汉堡包",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "牛肉、芝士、面包",
            "like_count": 0,
            "buy_count": 0,
            "price": 14,
            "picture": "\\menu_pic\\A00181.jpg"
        },
        {
            "uuid": "3EF031613A4845F7937DD2F6522CFD80",
            "name": "焗鳗鱼饭",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "鳗鱼、米饭、西兰花",
            "like_count": 0,
            "buy_count": 0,
            "price": 82,
            "picture": "\\menu_pic\\A00183.jpg"
        },
        {
            "uuid": "37C3CB7726A2401283FBDD4347C0DCC9",
            "name": "安格斯大皇虾",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "虾、牛肉",
            "like_count": 0,
            "buy_count": 0,
            "price": 57,
            "picture": "\\menu_pic\\A00192.jpg"
        },
        {
            "uuid": "DF18D49515544F1E9FA4F7932E650B82",
            "name": "安格斯极佳级肉眼扒",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "牛肉",
            "like_count": 0,
            "buy_count": 0,
            "price": 33,
            "picture": "\\menu_pic\\A00173.jpg"
        },
        {
            "uuid": "53926F57936A46C6B7F2FA32681288EA",
            "name": "法式白兰地核桃芭菲伴焦糖汁",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "核桃、焦糖、奇异果",
            "like_count": 0,
            "buy_count": 0,
            "price": 84,
            "picture": "\\menu_pic\\A00177.jpg"
        },
        {
            "uuid": "FEB5A4E1A7D8419CA3A2CBC7E7D2253B",
            "name": "血玛丽",
            "food_type_uuid": "6ECC3D73BA4641DEA7694C927A38E029",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "伏特加、番茄汁、辣酱油、精盐、黑胡椒",
            "like_count": 0,
            "buy_count": 0,
            "price": 12,
            "picture": "\\menu_pic\\A00149.jpg"
        },
        {
            "uuid": "C650F9A52C71408888D60657A6A9C81A",
            "name": "法式玉桂西多士",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "面粉、鸡蛋",
            "like_count": 0,
            "buy_count": 0,
            "price": 99,
            "picture": "\\menu_pic\\A00179.jpg"
        },
        {
            "uuid": "E822A845C78B4D58978E79AD3902D966",
            "name": "冰脆田园蔬菜沙律",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "洋葱、青椒、生菜、苦苣、西红柿、玉米",
            "like_count": 0,
            "buy_count": 0,
            "price": 48,
            "picture": "\\menu_pic\\A00175.jpg"
        },
        {
            "uuid": "441604130B4742EDBEC0ADE48C3A11C1",
            "name": "芒果薄脆伴香草雪糕",
            "food_type_uuid": "598DDD808A8F470D8C0A5B8FABF650A1",
            "branch_uuid": "BA170F434FE149988EFDDD17F64B2C18",
            "company": "份",
            "taste": "不加辣椒,微辣,中辣,最辣",
            "material": "芒果、香草雪糕",
            "like_count": 0,
            "buy_count": 0,
            "price": 32,
            "picture": "\\menu_pic\\A00184.jpg"
        }
    ],
    "code": 1,
    "msg": "获取菜单列表成功！",
    "totalPage": 17,
    "pageIndex": 1
}