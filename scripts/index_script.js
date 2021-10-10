window.onload = function() {
    document.getElementById("home").style.display = "Block";
    document.getElementById("about").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("proj").style.display = "none";
    document.getElementById("con").style.display = "none";
    change_col(0);
    var t=1000;
    tm=setInterval('dis_time()',t);
}
function change_col(num)
{
    const arr=["hm","ab","ed","pr","cn"];
    const hex=["#cce6ff","#b3daff","#99ceff","#80c1ff","#66b5ff"];
    var cnt=0,i=num;
    while(cnt<5)
    {
        //document.getElementById(arr[i]).style.background=hex[cnt];
        //i=(i+1)%5;
        document.getElementById(arr[cnt]).style.background= "none";
        cnt++;
    }
    document.getElementById(arr[num]).style.background = "rgb(0, 2, 15)";
}
function dis_time()
{
    var date="",hour="",mns="",sec="";
    var mon=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var cur=new Date();
    var dt=cur.getDate();
    if(dt<10)
        date="0"+dt;
    else
        date=dt;
    var hr=cur.getHours();
    if(hr<10)
        hour="0"+hr;
    else
        hour=hr;
    var mn=cur.getMinutes();
    if(mn<10)
        mns="0"+mn;
    else
        mns=mn;
    var se=cur.getSeconds();
    if(se<10)
        sec="0"+se;
    else
        sec=se;
    var cur_date=date+"-"+mon[cur.getMonth()]+"-"+cur.getFullYear();
    document.getElementById("date").innerHTML=cur_date;
    var cur_time=hour+":"+mns+":"+sec;
    document.getElementById("tm").innerHTML=cur_time;
}
function show(num)
{
    const sect=["home","about","edu","proj","con"];
    var cnt=0;
    while(cnt<5)
    {
        if(cnt==num)
            document.getElementById(sect[cnt]).style.display = "Block";
        else
            document.getElementById(sect[cnt]).style.display = "none";
        cnt++;
    }
    change_col(num);
}