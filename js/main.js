
//this adds list items to the unordered list 
$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li>' + toAdd + '</li>')
                 $('input').val('');
                 //$('form').reset(); resets the entire form 
                 ;
            });
    
      //this crosses out the new list items 
      $(document).on('click','li', function(){
        $(this).toggleClass('strike');    
      });

      
      
      
    }
);