$('.input').on('keyup', (e) => {
    //target the caption field
    e.preventDefault();
    //console.log(e.target.value);
    //console.log($('a[data-caption]'))
    
    //pass each search to the search func
    $('a[data-caption]').each((index, element) => {
        if($(element).attr('data-caption').includes(e.target.value.toLowerCase())){
            $($('.img-avatar')[index]).show();
        }else{
            $($('.img-avatar')[index]).hide();
        }
    })
    //based on the caption, return the related image
})