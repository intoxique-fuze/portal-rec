/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      
      'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
      'ng2-pagination': 'npm:ng2-pagination',
     'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.js',
     'ng2-smart-table' : 'npm:ng2-smart-table'
      
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-jwt': {
        defaultExtension: 'js'
      },
     'ng2-pagination': { //add configuration to load
        main: './index.js',
        defaultExtension: 'js'
      }, 
      'ng2-smart-table': { //add configuration to load
        main: './ng2-smart-table.js',
        defaultExtension: 'js'
      }, 
      
      
    }
  });
})(this);
