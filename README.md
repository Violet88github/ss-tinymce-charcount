# Silverstripe 4 TinyMCE characters count

![Screenshot of TinyMCE plugin](https://github.com/DrMartinGonzo/ss-tinymce-charcount/blob/master/screenshot.png 'Screenshot')

## Installation

`composer require drmartingonzo/ss-tinymce-charcount ^1.1.0`

## Requirements

-   SilverStripe CMS ^4.0

## Enable plugin

In your \_config.php file, add :

```
use SilverStripe\Forms\HTMLEditor\HtmlEditorConfig;
use SilverStripe\Core\Manifest\ModuleResourceLoader;
```

Then add whatever plugins you wish to enable, + charcount

```
HtmlEditorConfig::get('cms')
->enablePlugins([
    'template',
    'fullscreen',
    'hr',
    'contextmenu',
    'charmap',
    'visualblocks',
    'lists',
    'charcount' => ModuleResourceLoader::resourceURL('drmartingonzo/ss-tinymce-charcount:client/dist/js/bundle.js'),
])
```

Finally run `dev/build` with flush to remove previous TinyMCE javascript cache.

## Adding a max character attribute to a TinyMCE instance

Set `data-maxchar` on HTMLEditorField.
Example :

```
HTMLEditorField::create(
    "Content",
    'Content'
)->setAttribute('data-maxchar', 526),
```

## Adding a max word attribute to a TinyMCE instance

Set `data-maxword` on HTMLEditorField.
Example :

```
HTMLEditorField::create(
    "Content",
    'Content'
)->setAttribute('data-maxword', 120),
```
