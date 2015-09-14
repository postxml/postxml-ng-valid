module.exports = function () {
    return function ($) {
        $('*').each(function () {
            for (var key in this.attribs) {
                var value = this.attribs[key];
                delete this.attribs[key];
                if ( key.indexOf('ng-') === 0 ) {
                    this.attribs['data-' + key] = value;
                } else {
                    this.attribs[key] = value;
                }
            }
        });
    };
};
