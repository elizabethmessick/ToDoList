
//this adds list items to the unordered list 
$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
            });
    
      //this crosses out the new list items 
      $(document).on('click','li', function(){
        $(this).toggleClass('strike');    
      });

      //this deletes the previous to do list item from the form
      $('input').focus(function() {
        $(this).val('');
      });
      
      
    }
);