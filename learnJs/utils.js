// 求两点的平方根
var points =[
    {x:3,y:4},
    {x:4,y:3}
];
points.dist = function (){
    var xspace = points[0].x-points[1].x;  
    var yspace = points[0].y-points[1].y;
    return Math.sqrt(xspace,yspace)
    
}
points.dist()