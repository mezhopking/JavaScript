// Keyup and down cycles through a list, adding a class of highlight to the selected list item. It loops too.
// Requires ul.autoComplete and some styling for the li.highlight. Simples.
// 
// Finds first list item with an anchor and adds a class to its parent
// 
// <ul class="autoComplete">
//   <li>Something</li>
//   <li><a href="#">Link</a></li>
//   <li><a href="#">Link</a></li>
//   <li><a href="#">Link</a></li>
//   <li><a href="#">Link</a></li>
//   <li><a href="#">Link</a></li>
//   <li><a href="#">Link</a></li>
//   <li><a href="#">Link</a></li>
// </ul>


var autoCompleteHighlight = function() {
    var $autoComplete = $('ul.autoComplete'),
    $acFirstLi = $autoComplete.find('li a').first();
    $acFirstLi.parent().addClass('highlight');

    $(document).on('keyup', $autoComplete, function(e) {
        var $highlight = $autoComplete.find('.highlight'), $li = $('li');
        if (e.keyCode === 40) {
            $highlight.removeClass('highlight').next().addClass('highlight');
            if ($highlight.next().length == 0) {
                $li.eq(0).addClass('highlight')
            }
        } else if (e.keyCode === 38) {
            $highlight.removeClass('highlight').prev().addClass('highlight');
            if ($highlight.prev().length == 0) {
                $li.eq(-1).addClass('highlight')
            }
        } else if (e.keyCode === 13) {
          $highlight.find('a')[0].click(); 
        }
    }) 
};
autoCompleteHighlight(); 