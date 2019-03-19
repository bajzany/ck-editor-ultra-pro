CKEDITOR.plugins.add( 'text-shadow', {
    require: 'colordialog',
    icons: 'text-shadow',
    init: function( editor ) {
        editor.addCommand( 'shadow', new CKEDITOR.dialogCommand( 'shadowDialog' ) );
        
        editor.ui.addButton( 'text-shadow', {
            label: 'Insert Abbreviation',
            command: 'shadow',
            toolbar: 'text-shadow'
        });
        
        CKEDITOR.dialog.add( 'shadowDialog', this.path + 'dialogs/shadowDialog.js' );
    }
});