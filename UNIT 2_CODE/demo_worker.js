var i=0;
function timedcount()
{
    i=i+1;
    postMessage(i);
    setTimeout("timedcount()",500);
}
timedcount();