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
for(j=0;j<i;j++)
console.log(a1[j])

