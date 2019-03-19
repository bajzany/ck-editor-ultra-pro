CKEDITOR.dialog.add( 'marginDialog', function( editor ) {
    
    var __style = {
        element : 'span', 
        styles : { 'margin': '#(top) #(right) #(bottom)px #(left)'},
        overrides: [{
                element: 'margin', attributes: { 'top': null, 'right':null, 'bottom': null, 'left':null}
        }]
    };
    
    var style = CKEDITOR.style( __style );;
    
    return {
        title: 'Margin',
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
                            widths: ['25%', '25%', '25%', '45%'],
                            children: [
                            {
                                type: 'text',
                                id: 'top',
                                label: 'Top',
                                setup: function( attribute ) {
                                    this.setValue( attribute.x );
                                }
                            },{
                                type: 'text',
                                id: 'right',
                                label: 'Right',
                                setup: function( attribute ) {
                                    this.setValue( attribute.y );
                                }
                            },{
                                type: 'text',
                                id: 'bottom',
                                label: 'Bottom',
                                setup: function( attribute ) {
                                    this.setValue( attribute.blur );
                                }
                            },{
                                type: 'text',
                                id: 'left',
                                label: 'Left',
                                setup: function( attribute ) {
                                    this.setValue( attribute.blur );
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
                
                
                console.log(el);
                
                return el.is( 'span' ) && el.getStyle( 'margin' );
                
                
            } );
            console.log(span);
            /*
            var style = span ? span.getStyle( 'margin' ) : null;
            
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

            this.setupContent( attribute );*/
        },
        onOk: function() {
            var dialog = this;
            var vars = {};
            
            vars.top = dialog.getValueOf( 'tab-basic', 'top' );
            vars.right = dialog.getValueOf( 'tab-basic', 'right' );
            vars.bottom = dialog.getValueOf( 'tab-basic', 'bottom' );
            vars.left = dialog.getValueOf( 'tab-basic', 'left' );

            editor.applyStyle(new CKEDITOR.style(__style,vars));

        }
    };
});