( function() {
        var pl_name = 'Font weight';
	function addCombo( editor, comboName, styleType, lang, entries, defaultLabel, styleDefinition, order ) {
		var config = editor.config,style = new CKEDITOR.style( styleDefinition );		
		var names = entries.split( ';' ),values = [];		
		var styles = {};
		for ( var i = 0; i < names.length; i++ ) {
			var parts = names[ i ];
			if ( parts ) {
				parts = parts.split( '/' );
				var vars = {},name = names[ i ] = parts[ 0 ];
				vars[ styleType ] = values[ i ] = parts[ 1 ] || name;
				styles[ name ] = new CKEDITOR.style( styleDefinition, vars );
				styles[ name ]._.definition.name = name;
			} else
				names.splice( i--, 1 );
		}
		editor.ui.addRichCombo( comboName, {
			label: pl_name,
			title: pl_name,
			toolbar: 'styles,' + order,
			allowedContent: style,
			requiredContent: style,
			panel: {
				css: [ CKEDITOR.skin.getPath( 'editor' ) ].concat( config.contentsCss ),
				multiSelect: false,
				attributes: { 'aria-label': pl_name}
			},
			init: function() {
				this.startGroup(pl_name);
				for ( var i = 0; i < names.length; i++ ) {
					var name = names[ i ];					
					this.add( name, styles[ name ].buildPreview(), name );
				}
			},
			onClick: function( value ) {
				editor.focus();
				editor.fire( 'saveSnapshot' );
				var style = styles[ value ];
				editor[ this.getValue() == value ? 'removeStyle' : 'applyStyle' ]( style );
				editor.fire( 'saveSnapshot' );
			},
			onRender: function() {
				editor.on( 'selectionChange', function( ev ) {
					var currentValue = this.getValue();
					var elementPath = ev.data.path,elements = elementPath.elements;
					for ( var i = 0, element; i < elements.length; i++ ) {
						element = elements[ i ];
						for ( var value in styles ) {
							if ( styles[ value ].checkElementMatch( element, true, editor ) ) {
								if ( value != currentValue )
									this.setValue( value );
								return;
							}
						}
					}
					this.setValue( '', defaultLabel );
				}, this );
			},
			refresh: function() {
				if ( !editor.activeFilter.check( style ) )
					this.setState( CKEDITOR.TRISTATE_DISABLED );
			}
		} );
	}
	CKEDITOR.plugins.add( 'fontweight', {
		requires: 'richcombo',
		init: function( editor ) {
			var config = editor.config;
			addCombo( editor, 'fontweight', 'size', pl_name, config.line_weight, pl_name, config.lineWeigh_style, 40 );
		}
	} );
} )();
CKEDITOR.config.line_weight = '100;200;300;400;500;600;700;800;900;1000';
CKEDITOR.config.lineWeigh_style = {
	element: 'span',
	styles: { 'font-weight': '#(size)' },
	overrides: [ {
		element: 'font-weight', attributes: { 'size': null }
	} ]
};
