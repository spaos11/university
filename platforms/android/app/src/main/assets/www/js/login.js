function pwd() {

  var pass = prompt("Please enter password!");
  if (pass == "admin") {
    alert("LOGIN SUCCESS!");
    $('.edit').hide();
  $('.blocker').addClass('editable');
  $('.absurytf, .absurytf1, .psutf, .psutf1, .adelphitf, .adelphitf1, .cddtf, .cddtf1, .csjdatf, .csjdatf1, .dwcutf, .dwcutf1, .goldenwesttf, .goldenwesttf1, .kingfishertf, .kingfishertf1, .lnutf, .lnutf1, .nlactf, .nlactf1, .passtf, .passtf1, .pcsttf, .pcsttf1, .pimsattf, .pimsattf1, .putf, .putf1, .scctf, .scctf1, .stcftf, .stcftf1, .stitf, .stitf1, .ucutf, .ucutf1, .ultf, .ultf1, .upangtf, .upangtf1, .vmuftf, .vmuftf1, .wcctf, .wcctf1').attr('contenteditable', 'true');
  $('.save').show();
  } 
  else {
    alert("WRONG PASSWORD!");
  $('.save').hide();
  $('.blocker').removeClass('editable');
  $('.absurytf, .absurytf1, .psutf, .psutf1, .adelphitf, .adelphitf1, .cddtf, .cddtf1, .csjdatf, .csjdatf1, .dwcutf, .dwcutf1, .goldenwesttf, .goldenwesttf1, .kingfishertf, .kingfishertf1, .lnutf, .lnutf1, .nlactf, .nlactf1, .passtf, .passtf1, .pcsttf, .pcsttf1, .pimsattf, .pimsattf1, .putf, .putf1, .scctf, .scctf1, .stcftf, .stcftf1, .stitf, .stitf1, .ucutf, .ucutf1, .ultf, .ultf1, .upangtf, .upangtf1, .vmuftf, .vmuftf1, .wcctf, wcctf1').removeAttr('contenteditable');
  }

  
  $('.save').click(function(){
    alert("SAVED!");
  $(this).hide();
  $('.blocker').removeClass('editable');
  $('.absurytf, .absurytf1, .psutf, .psutf1, .adelphitf, .adelphitf1, .cddtf, .cddtf1, .csjdatf, .csjdatf1, .dwcutf, .dwcutf1, .goldenwesttf, .goldenwesttf1, .kingfishertf, .kingfishertf1, .lnutf, .lnutf1, .nlactf, .nlactf1, .passtf, .passtf1, .pcsttf, .pcsttf1, .pimsattf, .pimsattf1, .putf, .putf1, .scctf, .scctf1, .stcftf, .stctf1, .stitf, .stitf1, .ucutf, .ucutf1, .ultf, .ultf1, .upangtf, .upangtf1, .vmuftf, .vmuftf1, .wcctf, .wcctf1').removeAttr('contenteditable');
  $('.edit').show();
});
 
}