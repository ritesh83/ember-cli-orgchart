import Ember from 'ember';

export default Ember.Component.extend({
    data: null,

    didInsertElement: function() {
        var chartData = this.get('data');
        var clickCallback = this.get('onClickNode');
        this.$().orgChart({
          data: chartData,
          onClickNode: clickCallback
        });
    },

    willDestroyElement: function() {
        this.$().orgChart('destroy');
    }
});
