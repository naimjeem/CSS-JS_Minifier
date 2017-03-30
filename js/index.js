$(function() {
  /*
   * Just some styling helpers
   */
  var inputWidth = $('.col-sm-5').width();
  $('textarea').height(inputWidth*(3/4));
  $('.cssmin-btn').css('margin-top',inputWidth*(1/3)+'px');
  $('.cssbeaut-btn').css('margin-top',inputWidth*(1/3)+'px');
  
  /*
   * 
   */
  $('.minify').click(function() {
    var input = $('.cssmin-in').val();
    var output = input
      .replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g, '')
      .replace(/\s*\{\s*/g, '{')
      .replace(/\s*\}\s*/g, '}')
      .replace(/\s*\:\s*/g, ':')
      .replace(/\s*\;\s*/g, ';')
      .replace(/\s*\,\s*/g, ',')
      .replace(/\s*\~\s*/g, '~')
      .replace(/\s*\>\s*/g, '>')
      .replace(/\s*\+\s*/g, '+')
      .replace(/\s*\!\s*/g, ' !');
    $('.cssmin-out').val(output);
  });
  $('.clear-code').click(function() {
    $('.cssmin-in').val('');
    $('.cssmin-out').val('');
  });
  $('.beautify').click(function() {
    var beaut_input = $('.cssbeaut-in').val();
    var beaut_output = cssbeautify(beaut_input, {
      indent: '    ',
      openbrace: 'end-of-line',
      autosemicolon: true
    });
    $('.cssbeaut-out').val(beaut_output);
  });
  $('.beaut-clear-code').click(function() {
    $('.cssbeaut-in').val('');
    $('.cssbeaut-out').val('');
  });
});