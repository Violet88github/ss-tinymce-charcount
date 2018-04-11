/* eslint-env browser */
/* globals tinymce, ss */

import jQuery from 'jquery'; /* eslint-disable-line */


tinymce.PluginManager.add('charcount', (editor) => {
  editor.on('init', () => {
    let statusBarCharCount;
    let statusbar;

    function getCharacterLength() {
      let text = editor.getContent({ format: 'text' });
      // trim and transform newlines ("\n" has a length of 2) to spaces (length = 1)
      text = text.trim().replace(/(\n)+/g, ' ');
      return text.length;
    }

    function getStatusBarText() {
      const characterLength = getCharacterLength();
      const limit = editor.targetElm.getAttribute('data-maxchar');
      let text = `${ss.i18n._t('CHARCOUNT.CHARACTERS')}: {0}`;
      if (limit) {
        const charCountSpan = statusbar.$el.find('.mce-charcount')[0];
        if (characterLength > limit) {
          charCountSpan.style.color = 'red';
        } else {
          charCountSpan.style.color = '';
        }
        text += ` / ${limit}`;
      }
      return [text, characterLength];
    }

    function update() {
      statusBarCharCount.text(getStatusBarText());
    }

    statusbar = editor.theme.panel && editor.theme.panel.find('#statusbar')[0];
    if (statusbar) {
      setTimeout(() => {
        statusbar.insert({
          type: 'label',
          name: 'charcount',
          classes: 'wordcount charcount',
          disabled: editor.settings.readonly
        }, 0);

        statusBarCharCount = editor.theme.panel.find('#charcount');
        update();

        editor.on('keyup setcontent beforeaddundo', () => {
          update();
        });
      }, 0);
    }
  });
});
