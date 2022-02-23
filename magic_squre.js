magic_square = [
     [8, 3, 4],
     [1, 5, 9],
     [6, 7, 2]
    ]
i=0
sumlist=[]
sumlist1=[]
while (i<magic_square.length){
    j=0
    sum=0
    while (j<magic_square.length){
        sum=sum+magic_square[i][j]
        j=j+1
        
    }
    sumlist.push(sum)
    console.log("row",i+1,sum)
    

    m=0
    sum1=0
    while (m<magic_square.length){
        sum1=sum1+magic_square[m][i]
        m=m+1
    }
    sumlist1.push(sum1)
    console.log("coulmn",i+1,sum1)
    i=i+1
}
console.log(sumlist)
console.log(sumlist1)

n=0
sumlist2=[]
sum2=0
while (n<magic_square.length){
    sum2=sum2+magic_square[n][n]
    n=n+1
    
}
sumlist2.push(sum2)
console.log("diagnolal 1 ",sum2)
console.log(sumlist2)

k=0
sumlist3=[]
sum3=0
while (k<magic_square.length){
    p=(magic_square.length-1)-k

    while (p<magic_square.length-k){
        sum3=sum3+magic_square[k][p]
        p=p+1
    }
    k=k+1
}
sumlist3.push(sum3)
console.log(sumlist3)
console.log("diagnolal 2",sum3)

function allSame(val){
    return val==15
}
a=sumlist.every(allSame)
b=sumlist1.every(allSame)
c=sumlist2.every(allSame)
d=sumlist3.every(allSame)

s=a && b && c && d

if(s==true){
    console.log(" it is magic squre")
}else{
    console.log("it is not magic squre")
}
