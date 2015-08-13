//var header = $('/thead');

$(document).click(function(e) {
  if (e.shiftKey) {
    var target = $(e.target);

    if(target.text().indexOf("<table") != -1){
      var blobData = target.text();
      var file = new Blob([blobData], {encoding:"UTF-8", type: 'text/html;charset=UTF-8'});
      var fileURL = URL.createObjectURL(file);

      var mxmWindow = window.open(fileURL);

      //var mxmWindow = window.open();
      //mxmWindow.document.write(target.text());

     // mxmWindow.document.open();
     // mxmWindow.document.write(target.text());
     // mxmWindow.document.close();
     // $(mxmWindow.document).find('body').hide().show(100);
      //$(w.document).html(target.text());
    }
  } 
});
