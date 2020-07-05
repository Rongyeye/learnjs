// 求平方根两点的平方根
// 负数转正数
function convert_positive(num) {
    if(Number < 0) {
        num = num * -1;
    }
    return num;
}
var points =[
    // {x:6,y:7},
    // {x:4,y:3}
    {x:4,y:7},
    {x:6,y:3}
];
points.dist = function (){
    var xspace = this[0].x-this[1].y;
    var yspace = this[0].x-this[1].y
    if(xspace<0) xspace = convert_positive(xspace);
    if(yspace<0) yspace = convert_positive(yspace)
    console.log(xspace)
    console.log(yspace)
    console.log('sqrt:'+ ' '+Math.sqrt(xspace*yspace))
    return Math.sqrt(xspace*yspace)
}
    
    
points.dist()
console.log('points.dist():'+points.dist())
 

// Math 的方法
// 方法就是函数加对象.对象的函数叫做方法
// Math.powx的n次幂
console.log(Math.pow(3,4));
// 四舍五入
console.log(Math.round(.4));
// 最大值
console.log(Math.max(1,3,4,8,9));

// 如果是比较数组的最大值或者最小值
var arr3 = [-3,54,66,93,2]
// // 1.
// // 数组转字符串再转数字,
// function tonumber(arr){
//     var arr4 = arr.toString(',')
//     // console.log('parseInt:'+arr3.toString(','))
  
//     // parseInt 只能对第一个起作用。
//     // map是数组的属性，阿arr4是字符串
//     return arr4.map(function(x){
//         return parseInt(x)
//     })
// }
// console.log('tonumber'+tonumber(arr3))
// console.log('最大值：'+Math.max(tonumber(arr3)))
// 2.for循环数组
function maxarr(arr){
    var max = arr[0];
    for(var i = 0;i<arr.length;i++){
        // console.log(Math.max(max,arr[i]))
        // max = Math.max(max,arr[i])
        // console.log('max'+max)
        max = Math.max(max,arr[i])
    }
    console.log("max:"+max)
    return max;
}
maxarr(arr3)

// 使用数组的reduce
var max2 = arr3.reduce(function(x,y){
    return Math.max(x,y)
})
console.log(max2)
// es6扩展符
console.log('扩展符'+Math.max(...arr3))


// apply 的用法
// 1.合并数组
var arr4 = [1,2,3,4];
var arr5 = ['a','b']
console.log('apply合并数组：arr5.push.apply(arr5,arr4)：'+arr5.push.apply(arr5,arr4)+','+'arr5:'+arr5)
// 结果是：apply合并数组： 6arr5:a,b,1,2,3,4

// 比较数组最大值或者最小值
console.log('比较数组最大值或者最小值')
var applymax = Math.max.apply(null,arr4)
console.log('applymax: '+applymax)
var applymin = Math.min.apply(null,arr3)
console.log('applymin: '+applymin)

function maxmin (arr){
    var max3 = arr[0];
    var min3 = arr[0];
    for(let i = 0;i<arr.length;i++){
        max3 = Math.max(max3,arr[i])
        min3 = Math.min(min3,arr[i])
    }
    
    return {max3,min3}
    }
    console.log(maxmin(arr3))

    // Math.random()生成一个[0-1)的随机数
    console.log(Math.random())
    // 绝对值 
    console.log(Math.abs(-3))
    // 把数组的元素都转换成正数
    var arr6 = arr3.map(function(x){
        return Math.abs(x)
    })
    console.log("正数转换："+arr6)
    // 函数isNaN
    var x = NaN;
    console.log(isNaN(x))
    // 函数isFinite（），在参数不是NaN、Infinity或-Infinity的时候返回true。
    console.log(isFinite(x))

    // date函数
    // 构造一个时间对象
    var now = new Date()
    console.log(now)
    // 获取时钟的方法getHours
console.log(now.getHours())
// 获取年份
now.getFullYear()
// 转义符\
console.log('you\'re right')

var s = 'string,string';
// 字符串的方法

// 第n个字符
n = 1;
// s.chartAt()取得字符串的第n个字符。
console.log(s.charAt(n-1))
console.log(s.charAt(n))
console.log(s.charAt(n+1))
console.log(s.charAt(n+2))
console.log(s.charAt(s.length-1))
// 选取范围内的字符串
console.log(s.slice(1,4))
console.log(s.substring(1,4))

// 以某个符号来分割字符
console.log(s.split(','))

// 替换文字符
 s = s.replace('t',"T")
console.log(s)//sTring,string
// 只能替换一个字符
// 替换全字符
// var replaces
var test = 'test';


//字符串临时对象！！！ 
test.len = 4;
// 给test增加一个属性W为len
// 获取临时test对象的属性，结果udefined
// 第二行代码创建一个临时字符串对象，并给其len属性赋值为4，随即销毁这个对象。
// 修改只是发生在临时对象身上，而这个临时对象并未继续保留下来。
// 由于字符串、数字和布尔值的属性都是只读的，并且不能给它们定义新属性，
var t = test.len;
console.log(t);

// 临时对象（包装对象）
// 存取字符串、数字或布尔值的属性时创建的临时对象称做包装对象
// 通过String（），Number（）或Boolean（）构造函数来显式创建包装对象：
var s = 'test',n = 1,b = true;
var object = {object:'0object'};
var S = new String(s);
var N = new Number(n);
var B = new Boolean(b);
console.log("S:"+typeof(s));
s.len = 4;
var ttest = s.len;
console.log('ttest:'+typeof(ttest))//undefinded
console.log("N:"+typeof(n));
console.log("B:"+typeof(b));
console.log("B:"+typeof(object));

// 对象
var obj = {
    name:'asd'
}
obj.name = 'bbbb';


// 类型转换
String(124);
Boolean([]);
Number('3');


// 隐式转换
changex = 1;
resx = changex+'f'
console.log(typeof(changex))//Number
console.log(typeof(resx))//String
// + Numberx  === toString()或者String(Numberx)

// Boolean(x) === !!x

// toString

var changen = 32;
console.log("10:"+changen.toString())
console.log("2:"+changen.toString(2))
console.log("8:"+changen.toString(8))
console.log("16:"+changen.toString(16))

// 保留小数点后面的位数
// toFixed()
var saven = 12345678.2343;
var savedn = saven.toFixed(0);
console.log(savedn)//12345678

// 指数输出
// var precisionN = saven.toPrecision(1)
// var precisionN2 = saven.toExponential(1)
var precisionN = saven.toPrecision(2)
var precisionN2 = saven.toExponential(2)
console.log(typeof(precisionN))//string
console.log(precisionN)//1e+7

console.log(typeof(precisionN2))//steing
console.log(precisionN2)//1.2e+7

// saven.toExponential 和 saven.toPrecision的区别

// 全局函数：parseInt("需要转换的字符串"，转换的目标进制数) 
var changey = '123  dfoahjl 34'
var changey2 = '123.45';//123  .的阻挡，略过了45
var changey3 = '.123  dfoahjl 34';
var changey = '    123dfoahjl 34'//可以跳过空格
// console.log(changey.ParseInt(changey))
// 此写法错误
// 说明parseInt 不是方法。。。。。。是全局函数

console.log(parseInt(changey))//123，，，忽略了后面的内容

// 变量
var valueI = 123;
valueI = 'value'
console.log(valueI)//value
// js未声明变量类型

// 局部变量优先级高于全局变量
// 全局变量会被局部变量覆盖
// 只有在函数才有作用域


//在声明局部变量的时候，一定要用var,否则就是在修改全局变量
var scope = 'groble';
function scopearea(){
    scope = 'scope'
}




var globalvalue = 'adfdsf';
delete globalvalue;
console.log(globalvalue)//adfdsf can not delete


// 作用域链
// 第六章


// 直接量
1.23;
'direct';
/^a\d+/


// 数组

// 函数

// ~按位取反
var yy = 1;

console.log(~yy);//-2

// 三元运算符
// a?b:(c?d:(e?f:g));

var obj2 = {
    name:'aaa',
    age:18,
    grade:'three'
}
console.log(1+obj2)//1[object Object]
console.log(true+true)//2  true 转换为1；

// delete
delete obj2.name ;
console.log("name" in obj2)//false
console.log(obj2.name)//undefined
// delete return boolean :delete success return true;fail delete return false

// 自增
var i = 1;j = i++;
console.log('i:'+i+","+'j:'+j)//i = 2;j = 1;

// in
console.log('name' in obj2)//true

// 构造对象
var d = new Date();
console.log(d instanceof Date)

// eval()
// eval() 是全局对象的一个函数属性。
console.log(eval('2+1'))//3


// alert
// alert('hello')
// window.alert('hello')

// throw
// 异常处理

// function err(judge){
//     if(judge<0) throw new Error("x不能是负数");
//     console.log(judge)
//     }
// err(1)//1
// err(-1)//Error: x不能是负数
// 异常后下面的代码都不会执行了！！！！！！！！！！！
// 解决：不要用throw new Error()
// 用try/catch/finally异常处理机制
// 输入控制
function myfunction(){
    var inputmessage = 'a';
    try{
        // if (inputmessage == null) throw new Error("不能为空");
        if (inputmessage == null) throw"不能为空";
        if(inputmessage.length<6) throw"不能低于6个字母";
        // if(inputmessage.length<6) throw new Error("不能低于6个字母");
    }catch(err){
        console.log(err)
    }
}
myfunction()
// 没有显示？？？？？？？？？？
// 因为上面执行了以下代码
/*
// function err(judge){
//     if(judge<0) throw new Error("x不能是负数");
//     console.log(judge)
//     }
*/

function newFunction(value) {
    try {
        if (value == 0) throw '不能为0';
    }
    catch (err) {
        console.log(err);
    }
}
newFunction(0);//不能为0


// with临时扩展作用域链
// 严格模式禁用with
function newfunction2(){
    // "use strict"
    with(object) console.log('with 临时扩展')
}
newfunction2()//SyntaxError: Strict mode code may not include a with statement


// 创建对象
// 1、new
var obj1 = new Object()

// 2、object.create()
// 继承原型对象，属性x和y
var obj3 = Object.create({x:1,y:2})
// 不检继承任何原型
var obj4 = Object.create(null)
// 创建一个普通的对象
var obj5 = Object.create(Object.prototype)
// 可以通过任意原型创建新对象


// 3、通过原型继承创建新对象ingerit()
console.log(Object.prototype == Object["prototype"])//true


// 属性的查询和设置机制
var book = {
    author:'fred',
    title:'aaaa'
}
// 拿到属性值
console.log( book.author)
book.tag = 'novel'
console.log(book)
/*
{ author: 'fred', title: 'aaaa', tag: 'novel' }
*/
// 修改属性值
book.author = 'jog'
console.log(book.author)


// 继承,属性覆盖问题
var book2 = Object.create(book);
console.log(book2.author)//jog
console.log(book2)//{}  => 所以创建一个新对象，虽然继承了原型的属性，但是并不会显示出来
book2.author = 'rong'
delete book2.author;
console.log('author' in book2)//true  ????为什么没删除
// delete 只能删除自身属性！！！不能删除继承属性
book2.date = '2020-2-3'
console.log(book2.date)//2020-2-3
delete book2.date
console.log(book2.date='删除自身属性成功！')//undefined  

// delete
var deletex = 1
delete deletex;
console.log(deletex +'删除失败')//1  删除失败
// 不能删除全局变量
// 但是可以删除全局对象的声明的属性
 this.deletey = 1;
 delete this.deletey ;
 console.log(this.deletey+' 删除成功')//undefined   删除成功

// 检测属性 in
console.log('date' in book2)//true

// 枚举
console.log(Object.keys (book2))//[ 'date' ]
// 只是它返回对象的所有自有属性的名称

// 常量和局部变量
// let constx = 1, consty = 2;
// // let is notdefined ????
// let (constx = constx+1,consty = constx+2) {
//     console.log(constx+consty);
// };
// console.log(constx+consty)

// 解构赋值
// let [x,y] = [1,2]
// let [x,y] = [x+1,y+1]

// 数组
// 方法
// forEach()
var data = [1,2,3,4,5,6]
var sum = 0;
data.forEach(x => {
    console.log(x)
})
/**
1
2
3
4
5
6
 */
// 数组元素求和
var foreachsum = data.forEach ( x => {
    sum += x;
    // return sum;
})
console.log ( foreachsum )//undefined  forEach 不返回数组 和map的区别
console.log ( sum ) //21
// 数组元素加一
var dataforeach = []
data.forEach ( x => {
    x += 1;
    dataforeach.push(x)
})
console.log(dataforeach)
console.log(dataforeach)//[ 2, 3, 4, 5, 6, 7 ]
// forEach()没有break

// map()
// 略

// filter()
// filter()传参函数是逻辑判断函数
// 返回true or false
var small3 = data.filter(x => {
    return x > 3;
})
console.log(small3)//[ 4, 5, 6 ]  
// 原理产生一个数组的子集，
// 该子集满足条件，
// 返回的是true的元素才会加入新数组
var filterarr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
//   判断数组的元素对象是否是数字类型


// 查询数组元素
// var indexofquery = ['english','math','chinese']
// const 



// reduce
// 数组最大值
// 把两个值化简为一个值，再返回该值
var max = data.reduce((x,y) => {
    return x > y ? x : y
})
console.log(max)//6
// 数组连乘积
var product = data.reduce((x,y) => {
    return x*y
})
console.log( product )

// 判断是否是数组类型
console.log(Array.isArray(data))//true

// 函数
// 函数定义
// 略

// 类



/**
 * JavaScript — 一种内置于浏览器的高级脚本语言，您可以用来实现Web页面/应用中的功能。
 * 注意JavaScript也可用于其他象Node这样的的编程环境。但现在您不必考虑这些。
客户端API — 内置于浏览器的结构程序，位于JavaScript语言顶部，使您可以更容易的实现功能。
第三方API — 置于第三方普通的结构程序（例如Twitter，Facebook），
使您可以在自己的Web页面中使用那些平台的某些功能（例如在您的Web页面显示最新的Tweets）。
JavaScript库 — 通常是包含具有特定功能的一个或多个JavaScript文件，
把这些文件关联到您的Web页以快速或授权编写常见的功能。例如包含jQuery和Mootools
JavaScript框架 — 从库开始的下一步，
JavaScript框架视图把HTML、CSS、JavaScript和其他安装的技术打包在一起，然后用来从头编写一个完整的Web应用。
 */


//  window对象
function dispalyTime(){
  var elt = document.getElementById('clock')
  var now = new Date()
  elt.innerHTML = now.toLocaleDateString();
  setTimeout(dispalyTime,1000)
  // 鼠标左键单击
  elt.onclick = function(){
    alert(now)
  }
  // 鼠标在元素上
  // elt.onmouseover = function(){
  //   alert('focus')
  // }
  // 文本被选定
  // elt.onselect = function(){
  //   alert('select')
  // }//不起作用
}
window.onload = dispalyTime
