// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象


let mapData1 = (n) => {
  var data1 = [];
  for (var j = 1; j<n; j++){
    data1.push({
      id: j,
      title: "@ctitle(2,3)",
      img: mr.image('126x144', mr.color(), mr.cword(1)),
      "array|1": [
        "home",
        "detail1",
        "detail2",
        "detail3",
        "detail4",
        "detail5",
        "detail6",
        "detail7"
      ]
    })
  }
  return data1
}


//随机id和图片
let mapData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      title: "@ctitle(4,6)",
      des: "@csentence(6, 10)",
      time: "@integer(1553425967486,1553475967486)",
      "xiangj|200-400":100,
      "yuanj|400-800":100,
      aut: mr.image('30x30', mr.color(), mr.cword(1)),
      img: mr.image('350x314', mr.color(), mr.cword(1)),
      banners:[
          {ids:1,bimg:mr.image('754x514', mr.color(), mr.cword(3))},
          {ids:2,bimg:mr.image('754x514', mr.color(), mr.cword(4))},
          {ids:3,bimg:mr.image('754x514', mr.color(), mr.cword(5))},
      ],
      imgs:[
          {ids:1,imgs:mr.image('754x392', mr.color(), mr.cword(3))},
          {ids:2,imgs:mr.image('754x392', mr.color(), mr.cword(4))},
          {ids:3,imgs:mr.image('754x392', mr.color(), mr.cword(5))},
          {ids:4,imgs:mr.image('754x392', mr.color(), mr.cword(6))},
      ]
    })
  }
  return data
};

//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    
    'home': mapData(32),//解决 auth_icon 不随机
    'detail1': mapData(21),
    'list': mapData1(100),
    'detail2': mapData(14),
    'detail3': mapData(15),
    'detail4': mapData(17),
    'detail5': mapData(16),
    'detail6': mapData(18),
    'detail7': mapData(19),
    'banner|2': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4,8)",//标题型中文4到8个字
        sub_title: "@ctitle(6,12)",
        banner: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
        time: "@integer(1565533039824,1565833039824)",
        detail:{
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
          auth:"@cname()",//百家姓
          content:"@cparagraph(10,40)"//正文
        }
      }
    ]
  })
};