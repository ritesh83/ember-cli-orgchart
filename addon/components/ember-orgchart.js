import Ember from 'ember';

export default Ember.Component.extend({
    data: null,

    didInsertElement: function() {
        var chartData = this.get('data');
        var clickCallback = this.get('clickedNodeAction');

        if (Ember.isPresent(chartData)) {
            this.$().orgChart({
                data: chartData,
                onClickNode: clickCallback.bind(this)
            });
        }
    },

    willDestroyElement: function() {
        this.$().orgChart('destroy');
    },

    clickedNodeAction(node) {
        this.sendAction('onClickNode', node);
    }
});
