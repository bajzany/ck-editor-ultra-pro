( function() {
plugInName = 'htmlSource';
var ac;
var style_html = DIP.new(DIP.require('/js/main/style_html.js'));
CKEDITOR.plugins.add(plugInName,
{
  init: function (editor) {

    editor.addCommand('htmlDialog', new CKEDITOR.dialogCommand('htmlDialog'));
    editor.ui.addButton(plugInName, {
        label: 'Html Source',
        command: 'htmlDialog',
        icon: CKEDITOR.plugins.getPath('htmlSource')+'icons/sourcedialog.png',
    });

    CKEDITOR.dialog.add('htmlDialog', function (editor) {
        return {
            title: 'Fuente Html',

            minWidth: 600,
            minHeight: 400,
            contents: [
                        {
                            id: 'general',
                            label: 'Settings',
                            elements:
                            [
                            // UI elements of the Settings tab.
                                {
                                type: 'textarea',
                                id: 'contents',
                                rows: 25,
                                onShow: function () {
                                    var value = editor.getData();

                                    $('#ac-html').remove();
                                    $('#'+this.domId+' textarea').css('display','none');
                                    $('#'+this.domId).parents('.cke_reset_all').removeClass('cke_reset_all');

                                    $('#'+this.domId).append('<div id="ac-html" style="height:600px; width:100%;"></div>');
                                    $('#'+this.domId).find('.cke_reset_all').removeClass('cke_reset_all');
                                    var editorHtml = ace.edit('ac-html');
                                    editorHtml.setOptions({
                                        enableBasicAutocompletion: true,
                                        enableSnippets: true,
                                        enableLiveAutocompletion: true,


                                    });

                                    editorHtml.setTheme("ace/theme/monokai");
                                    editorHtml.getSession().setMode("ace/mode/html");
                                    editorHtml.setValue(style_html.beautify_html(value));
                                    ac = editorHtml;
                                },
                                commit: function (data) {              //--I get only the body part in case I paste a complete html
                                    data.contents = ac.getValue().replace(/^[\S\s]*<body[^>]*?>/i, "").replace(/<\/body[\S\s]*$/i, "");
                                    $('#ac-html').remove();
                                }

                            }
                                ]
                        }
                    ],

            onOk: function () {
                var data = {};
                this.commitContent(data);
                $(editor.container.$).html(data.contents);
            },
            onCancel: function () {
                //  console.log('Cancel');
            }
        };
    });
}


});
})();
