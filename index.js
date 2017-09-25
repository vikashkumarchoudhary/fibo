var a=require("fibonacci/prog")
var c2=new Array()
c2=a()
var len=c2.length
var c3=new Array()
var count=0
for(i=0;i<len;i++)
{
 var k=c2[i]
 var p=0
 for(j=2;j<k;j++)
 {
  if(k%j==0)
  {
    p=1
    break
   }
  }
  if(p!=1)
  {
   c3[count]=k
   count++
  }
 }
for(i=0;i<count;i++)
console.log(c3[i])



























