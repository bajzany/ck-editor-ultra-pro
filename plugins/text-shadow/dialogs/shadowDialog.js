CKEDITOR.dialog.add( 'shadowDialog', function( editor ) {
    
    var __style = {
        element : 'span', 
        styles : { 'text-shadow': '#(x)px #(y)px #(blur)px #(color)'},
        overrides: [{
                element: 'text-shadow', attributes: { 'x': null, 'y':null, 'blur': null, 'color':null}
        }]
    };
    
    var style = CKEDITOR.style( __style );;
    
    return {
        title: 'Text schadow',
        minWidth: 400,
        minHeight: 200,

        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [{
                            type: 'hbox',
                            widths: ['20%', '20%', '20%', '40%'],
                            children: [
                            {
                                type: 'text',
                                id: 'x',
                                label: 'X',
                                setup: function( attribute ) {
                                    this.setValue( attribute.x );
                                }
                            },{
                                type: 'text',
                                id: 'y',
                                label: 'Y',
                                setup: function( attribute ) {
                                    this.setValue( attribute.y );
                                }
                            },{
                                type: 'text',
                                id: 'blur',
                                label: 'Blur',
                                setup: function( attribute ) {
                                    this.setValue( attribute.blur );
                                }
                            },{
                                type: 'text',
                                id: 'colorChooser',
                                className: 'colorChooser',
                                label: 'Color',
                                setup: function( attribute ) {
                                    this.setValue( attribute.color );
                                },
                                onKeyUp: function(e) {
                                    setSpanColor(e.sender.$.value)
                                }
                            },{
                                type: 'button',
                                label: 'Select',
                                style: 'margin-top:1.35em',
                                onClick: function() {
                                    editor.getColorFromDialog(function(color) {
                                        document.getElementsByClassName('colorChooser')[0].getElementsByTagName('input')[0].value = color;
                                    }, this)
                                }
                            }]
                        }]
                    }
                ]
            }
        ],
        
        onShow: function(){

            var attribute ={x:0,y:0,blur:5,color:'#000000'};
            var span = editor.elementPath().contains( function(el){
                return el.is( 'span' ) && el.getStyle( 'text-shadow' );
            } );

            var style = span ? span.getStyle( 'text-shadow' ) : null;
            
            if(style !==null){
                var s = style.match(/(-?\d+px)|(rgb\(.+\))/g);
                var len = s.length-1;
                if(len === 2){
                    attribute.color = '#000000';
                    attribute.x = s[0].replace('px','');
                    attribute.y = s[1].replace('px','');
                    attribute.blur = s[2].replace('px','');
                }else{
                    attribute.color = s[0];
                    attribute.x = s[1].replace('px','');
                    attribute.y = s[2].replace('px','');
                    attribute.blur = s[3].replace('px','');
                }
            }

            this.setupContent( attribute );
        },
        onOk: function() {
            var dialog = this;
            var vars = {};
            
            vars.x = dialog.getValueOf( 'tab-basic', 'x' );
            vars.y = dialog.getValueOf( 'tab-basic', 'y' );
            vars.blur = dialog.getValueOf( 'tab-basic', 'blur' );
            vars.color = dialog.getValueOf( 'tab-basic', 'colorChooser' );

            editor.applyStyle(new CKEDITOR.style(__style,vars));

        }
    };
});