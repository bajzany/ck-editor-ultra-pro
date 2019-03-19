/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
CKEDITOR.dtd.$removeEmpty['i'] = false;
CKEDITOR.dtd.$removeEmpty['span'] = false;

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'cs';
	// // config.uiColor = '#AADC6E';
	//
	config.removePlugins = 'easyimage, cloudservices';
	// config.extraPlugins = 'sourcedialog';
	// config.extraPlugins = 'save';



	//config.forceEnterMode = true;
	config.allowedContent = true;
	config.removeFormatAttributes = '';
	config.extraPlugins = 'lightbox,font,sharedspace,sourcedialog,glyphicons,fontawesome,texttransform,ckeditor-gwf-plugin,lineheight,fontweight,text-shadow';

	//config.skin = 'icy_orange';
	/* config.sharedSpaces = {
		 top: 'ckeoptions'
	 };
	 */
	config.sharedSpaces = {
		top: 'ckeoptions',
	};

	$('div').filter(function() {
		return this.className == 'panel current';
	});



	config.toolbarGroups = [
		{ name: 'others' },
		{ name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },


		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'text-shadow'},
		//{ name: 'margin'}
		/*
		{ name: 'others'},
		{ name: 'align'},
		{ name: 'document',  groups: [ 'mode', 'document', 'doctools' ], items: [ 'sourcedialog'] },
		{ name: 'basicstyles'},
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'list' },
		{ name: 'indent'},
		{ name: 'blocks' },
		{ name: 'links' },
		{ name: 'paragraph'},
		{ name: 'find'},
		{ name: 'selection'},
		{ name: 'spellchecker'},
		{ name: 'tools' },
		{ name: 'insert' },
		{ name: 'text-shadow'}
		//{ name: 'editing', groups: [ 'spellchecker'] },*/


		//{ name: 'basicstyles', groups: [ 'basicstyles'] },
	];

	config.fontSize_sizes = CKEDITOR.config.fontSize_sizes + ";117/117px";
	config.font_names = "Kaushan Script;CaviarDreams;Roboto;Arial;Comic Sans MS;Courier New;Lucida Sans Unicode;Tahoma;Times New Roman;sans-serif;serif;monospace;Caviar_Dreams;Caviar_Dreams_Bold";


};
