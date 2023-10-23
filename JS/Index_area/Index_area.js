var map = new BMapGL.Map("map");

var point = new BMapGL.Point(120.221053,30.297834);
map.centerAndZoom(point, 13);

map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

var point_1 = new BMapGL.Point(120.343427,30.313769);
var marker1 = new BMapGL.Marker(point_1);
marker1.setTitle("钱塘区");
map.addOverlay(marker1);

var content_2 = "这里是杭州电子科技大学";
var opts_2 = {
    position: new BMapGL.Point(120.343427,30.313769), // 指定文本标注所在的地理位置
    offset: new BMapGL.Size(30, -30) // 设置文本偏移量
};
var label_2 = new BMapGL.Label(content_2,opts_2)
label_2.setStyle({
    color: 'blue',
    borderRadius: '5px',
    borderColor: '#ccc',
    padding: '10px',
    fontSize: '16px',
    height: '30px',
    lineHeight: '30px',
    fontFamily: '微软雅黑'
});
map.addOverlay(label_2);


var marker2 = new BMapGL.Marker(new BMapGL.Point(120.151918,30.258621));
marker2.setTitle("西湖区");
map.addOverlay(marker2);
var content_3 = "这里是断桥残雪";
var opts_3 = {
    position: new BMapGL.Point(120.151918,30.258621), // 指定文本标注所在的地理位置
    offset: new BMapGL.Size(30, -30) // 设置文本偏移量
};
var label_3 = new BMapGL.Label(content_3,opts_3)
label_3.setStyle({
    color: 'blue',
    borderRadius: '5px',
    borderColor: '#ccc',
    padding: '10px',
    fontSize: '16px',
    height: '30px',
    lineHeight: '30px',
    fontFamily: '微软雅黑'
});
map.addOverlay(label_3);



var marker3 = new BMapGL.Marker(new BMapGL.Point(120.023959, 30.261764));
marker3.setTitle("余杭区");
map.addOverlay(marker3);
var content_4 = "这里是五常湿地公园";
var opts_4 = {
    position: new BMapGL.Point(120.023959, 30.261764), // 指定文本标注所在的地理位置
    offset: new BMapGL.Size(30, -30) // 设置文本偏移量
};
var label_4 = new BMapGL.Label(content_4,opts_4)
label_4.setStyle({
    color: 'blue',
    borderRadius: '5px',
    borderColor: '#ccc',
    padding: '10px',
    fontSize: '16px',
    height: '30px',
    lineHeight: '30px',
    fontFamily: '微软雅黑'
});
map.addOverlay(label_4);




var marker4 = new BMapGL.Marker(new BMapGL.Point(120.233123, 30.229381));
marker4.setTitle("滨江区");
map.addOverlay(marker4);
var content_5 = "这里是奥体中心";
var opts_5 = {
    position: new BMapGL.Point(120.233123, 30.229381), // 指定文本标注所在的地理位置
    offset: new BMapGL.Size(30, -30) // 设置文本偏移量
};
var label_5 = new BMapGL.Label(content_5,opts_5)
label_5.setStyle({
    color: 'blue',
    borderRadius: '5px',
    borderColor: '#ccc',
    padding: '10px',
    fontSize: '16px',
    height: '30px',
    lineHeight: '30px',
    fontFamily: '微软雅黑'
});
map.addOverlay(label_5);


var content_1 = "这里是杭州东站";
var opts_1 = {
    position: new BMapGL.Point(120.221053,30.297834), // 指定文本标注所在的地理位置
    offset: new BMapGL.Size(30, -30) // 设置文本偏移量
};
var label_1 = new BMapGL.Label(content_1,opts_1)
label_1.setStyle({
    color: 'blue',
    borderRadius: '5px',
    borderColor: '#ccc',
    padding: '10px',
    fontSize: '16px',
    height: '30px',
    lineHeight: '30px',
    fontFamily: '微软雅黑'
});
map.addOverlay(label_1);