canvas = Blockly.mainWorkspace.svgBlockCanvas_.cloneNode(true);

if (canvas.children[0] !== undefined) {
    canvas.removeAttribute("transform");

    var cssContent = Blockly.Css.CONTENT.join('');
    cssContent += 'text.blocklyCheckbox {fill: #ff3030 !important;text-shadow: 0px 0px 6px #f00;font-size: 8pt !important;}';

    var css = '<defs><style type="text/css" xmlns="http://www.w3.org/1999/xhtml"><![CDATA[' + cssContent + ']]></style></defs>';

    var bbox = document.getElementsByClassName("blocklyBlockCanvas")[0].getBBox();
    var content = new XMLSerializer().serializeToString(canvas);
    content = content.replace(/..\/blockly\/media\/kn02.png/g,'https://code.kniwwelino.lu/blockly/media/kn02.png');

    var xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'
        + bbox.width + '" height="' + bbox.height + '" viewBox=" ' + bbox.x + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height + '">' +
        css + '">' + content + '</svg>';


    let element = document.createElement('a')
    blow = new Blob([xml], { type: 'image/svg+xml;base64' });
    element.href = URL.createObjectURL(blow);
    element.download = document.getElementById('sketch_name').value+'.svg';
    element.click();
}
