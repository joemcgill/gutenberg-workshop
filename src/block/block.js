/**
 * BLOCK: demo-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-demo-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Demo Block' ), // Block title.
	description: __( 'Remember when you were a kid and played with blocks? This is like that.'),
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'demo-block — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	attributes: {
		title: {
			type: 'string',
		},
		content: {
			type: 'string',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		const {
			attributes,
			setAttributes,
			className,
		} = props;

		const {
			title,
			content,
		} = attributes;

		return (
			<div className={ className }>
				<RichText
					tagName='h3'
					placeholder={ __( 'Add a title' ) }
					value={ title }
					onChange={ newTitle => setAttributes( { title: newTitle } ) }
					multiline={ false }
					format='string'
				/>
				<RichText
					tagName='p'
					placeholder={ __( 'Add a content' ) }
					value={ content }
					onChange={ newContent => setAttributes( { content: newContent } ) }
					multiline={ false }
					format='string'
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( { attributes } ) {
		const {
			title,
			content,
		} = attributes;

		return (
			<div>
				<RichText.Content tagName="h2" value={ title } />
				<RichText.Content tagName="p" value={ content } />
			</div>
		);
	},
} );
