import Ember from 'ember';

export default Ember.Component.extend({
    data: null,

    didInsertElement: function() {
        var chartData = this.get('data');
        var clickCallback = this.get('clickedNodeAction');

        if (Ember.isPresent(chartData)) {
            this.element.addEventListener({
                data: chartData,
                onClickNode: clickCallback.bind(this)
            });
        }
    },

    willDestroyElement: function() {
        this.element.addEventListener('destroy');
    },

    clickedNodeAction(node) {
        this.sendAction('onClickNode', node);
    }
});
