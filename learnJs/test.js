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









