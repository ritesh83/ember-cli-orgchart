import Ember from 'ember';

export default Ember.Component.extend({
    data: null,

    didInsertElement: function() {
        var chartData = this.get('data');
        this.$().orgChart({data: chartData});
    },

    willDestroyElement: function() {
        this.$().orgChart('destroy');
    }
});
