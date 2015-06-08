module.exports = {
    normalizeEntityName: function() {},

    afterInstall: function() {
        return this.addBowerPackageToProject('jquery-orgchart', 'https://github.com/bigeyex/jquery.orgChart.git#master');
    }
};
