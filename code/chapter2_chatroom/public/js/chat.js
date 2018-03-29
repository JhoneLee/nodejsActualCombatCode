/*
* @Author: liyunjiao
* @Date:   2018-03-29 14:22:00
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-03-29 14:52:51
*/

define(function(require,exports,module){
    var $=require('jquery');
    var common = require('./common');
    
    function say(){
        var str = $('div').html();
        console.log(str);
    }
    module.exports = {
        say:say
    };
});