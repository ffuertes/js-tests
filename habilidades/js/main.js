function main(){
  $('.skillset').hide();
  $('.skillset').fadeIn(1500);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    //$(this).next().toggle();
    $(this).next().slideToggle(300);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
  });
}

$(document).ready(main);