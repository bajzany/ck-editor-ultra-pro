CKEDITOR.plugins.add( 'margin', {
   
    icons: 'margin',
    init: function( editor ) {
        editor.addCommand( 'margin', new CKEDITOR.dialogCommand( 'marginDialog' ) );
        
        editor.ui.addButton( 'margin', {
            label: 'Margin',
            command: 'margin',
            toolbar: 'margin'
        });
        
        CKEDITOR.dialog.add( 'marginDialog', this.path + 'dialogs/marginDialog.js' );
    }
});