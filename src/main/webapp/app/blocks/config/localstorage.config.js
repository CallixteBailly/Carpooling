(function() {
    'use strict';

    angular
        .module('carpoolingApp')
        .config(localStorageConfig);

    localStorageConfig.$inject = ['$localStorageProvider'];

    function localStorageConfig($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('jhi-');
    }
})();
