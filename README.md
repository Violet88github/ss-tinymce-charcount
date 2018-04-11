Silverstripe 4 TinyMCE characters count
===================================================
![Screenshot of TinyMCE ss4 theme](https://github.com/DrMartinGonzo/ss-tinymce-charcount/blob/master/screenshot.png "Screenshot")
## Installation

`composer require drmartingonzo/ss-tinymce-charcount ^1`

## Requirements

* SilverStripe CMS ^4.0

## Adding a max character variable to a TinyMCE instance

Set `data-maxchar` on HTMLEditorField.
Example :
```
HTMLEditorField::create(
    "Content",
    'Content'
)->setAttribute('data-maxchar', 526),
```
