$(document).ready(function(){
    $('.bouton').click(function(){
        $bubble = $(this).find('.bubble');
        $bubble.css('opacity', 0)
        $bubble.css('transform', '')
    });
});