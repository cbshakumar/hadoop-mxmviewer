//var header = $('/thead');

$(document).click(function(e) {
  if (e.shiftKey) {
    var target = $(e.target);

    var targetData = $(target).text();
    if(looksLikeHtml(targetData)) {
      var mxmWindow = window.open();
      mxmWindow.document.write(targetData);
    }
  } 
});

function looksLikeHtml(input){
  return input.indexOf("<") != -1 && input.indexOf(">") != -1;
}
