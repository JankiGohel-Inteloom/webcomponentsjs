/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';

/*
 * Polyfills loaded: HTML Imports, Custom Elements
 * Used in: Safari 10, Firefox once SD is shipped
 */

import '../bower_components/html-imports/src/html-imports.js'
import '../src/pre-polyfill.js'
import '../bower_components/custom-elements/custom-elements.min.js'
//TODO(notwaldorf): this is temporary and should be removed.
import '../bower_components/shadycss/src/ShadyCSS.js'
import '../src/post-polyfill.js'
import '../src/unresolved.js'
