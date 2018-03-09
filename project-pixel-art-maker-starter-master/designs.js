var height, weight, color;//声明变量


//点击提交按钮时
$('#sizePicker').submit(function(event){
    event.preventDefault();//阻止浏览器刷新
    $('tr').remove(); //清除画布
    height = $('#inputHeight').val();//获取高度
    weight = $('#inputWeight').val();//获取宽度
    makeGrid(height,weight);//调用画布生成函数
});


//画布生成函数
function makeGrid(height,weight){
    for(var i=1; i<=height; i++){
        $('#pixelCanvas').append('<tr id=line'+ i +'></tr>');//新增行
        for(var j=1; j<=weight; j++){
            $('#line' + i).append('<td></td>'); //填满列
        }
    }

    //点击小方块时
    $('td').click(function (){
        color = $('#colorPicker').val();//获取颜色
        $(this).attr('style', 'background-color:'+ color);//添加颜色
    });
}
