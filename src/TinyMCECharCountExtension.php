<?php

namespace DrMartinGonzo;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

/**
 * Include some variables that can be used via javascript
 */
class TinyMCECharCountExtension extends Extension {

    public function init()
    {
        Requirements::add_i18n_javascript('drmartingonzo/ss-tinymce-charcount:client/lang');
    }
}
