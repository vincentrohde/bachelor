// code by Stuart Romanek
// https://github.com/stuartromanek/apostrophe-comment-system

apos.define('comments-widgets', {
    extend: 'apostrophe-widgets',
    construct: function (self, options) {
        self.play = function ($widget, data, options) {
            $widget.find('[data-comment-submit]').on('click', function () {
                var data = {
                    comment: $widget.find('[data-comment-input]').val(),
                    pieceId: $widget.closest('.b-comments').attr('data-piece-id')
                }
                $.ajax({
                    url: '/modules/comments/comment',
                    method: 'POST',
                    data: data
                }).done(function (msg) {
                    apos.change($widget)
                });
            })
        };
    }
});