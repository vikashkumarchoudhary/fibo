function func()
{
var a,b,c
a=0
b=1
var n=30
var i=0
var a1=new Array()
c=a+b
while(c<n)
{
 a1[i]=c
 a=b
 b=c
 c=a+b
 i++
}
return(a1)
}
var k=new Array()
k=func()
module.exports=func
