$('.input').on('keyup', (e) => {
    //target the caption field
    e.preventDefault();
    
    
    //pass each search to the search func
    $('a[data-caption]').each((index, element) => {
        //based on the caption, return the related image
        if($(element).attr('data-caption').includes(e.target.value.toLowerCase())){
            $($('.img-avatar')[index]).show();
        }else{
            $($('.img-avatar')[index]).hide();
        }
    })
    
})