module.exports = {
    normalizeEntityName: function() {},

    afterInstall: function() {
        return this.addBowerPackageToProject('jquery-orgchart', '0.0.2');
    }
};
