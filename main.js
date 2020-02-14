


    		var num = "";
var size = prompt("entrer le nombre d'étage de la pyramide puis cliquer sur OK pour avoir un pyramide en # ");

    		
for(var i=1; i<=size; i++)
{
for(var k=1; k<=( size-i ); k++)
{
document.write(" ");
}
for(var j=1; j<=i; j++)
{
document.write("  #  ");
}
document.write("<br/>");
}

