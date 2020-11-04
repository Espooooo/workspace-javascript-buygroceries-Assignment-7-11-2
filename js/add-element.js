/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('li.hot').removeClass('hot');
$('li').addClass('cool');

// traverse the elements

$('li').click(changeStyle);
// add a new element
function addElement(){
  //
}

// add by clicking the plus sign
$('add').click(addElement);

document.getElementById("add").addEventListener("click", addElement);

function addElement() {
  $("#todo").append("<li><input type='text'><li>");

  // add a new element
  $('input').blur(function(){
    console.log("reach");
    $(this).parent().addClass("cool");

    var userinput = $(this).val();
    $(this).parent().text(userinput);

  });
}


//  click the li element will change the changeStyle
function changeStyle() {
  if($(this).hasClass('complete')){
    $(this).removeClass('complete');
    $(this).addClass('cool');
  }else{
    $(this).addClass('complete')
  }

}

// delete by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  // remove the marked element
 
 
}
