  // IMPORTANT
  // It is often better to put tinymce in a folder for static files
  // and link to it, rather then import it directly into your webpack build.
  // TinyMCE is designed to load the files it needs asynchronously
  // so by bundling it you may slow down the loading of the editor.
  // Additionally TinyMCE will only use the English translation if
  // you use this method as the translation is picked at plugin load time.
  // It will also slow down your webpack build significantly.
  
  // With those caveats, here is how you can bundle TinyMCE.
  
  
  // TinyMCE global which is used to init the editor
  import tinymce from 'tinymce/tinymce';

  // DOM model
  import 'tinymce/models/dom/model'
  // Theme
  import 'tinymce/themes/silver';
  // Toolbar icons
  import 'tinymce/icons/default';
  // Editor styles
  import 'tinymce/skins/ui/oxide/skin.min.css';

  // importing the plugin js.
  import 'tinymce/plugins/advlist';
  import 'tinymce/plugins/anchor';
  import 'tinymce/plugins/autolink';
  import 'tinymce/plugins/autoresize';
  import 'tinymce/plugins/autosave';
  import 'tinymce/plugins/charmap';
  import 'tinymce/plugins/code';
  import 'tinymce/plugins/codesample';
  import 'tinymce/plugins/directionality';
  import 'tinymce/plugins/emoticons';
  import 'tinymce/plugins/fullscreen';
  import 'tinymce/plugins/help';
  import 'tinymce/plugins/image';
  import 'tinymce/plugins/importcss';
  import 'tinymce/plugins/insertdatetime';
  import 'tinymce/plugins/link';
  import 'tinymce/plugins/lists';
  import 'tinymce/plugins/media';
  import 'tinymce/plugins/nonbreaking';
  import 'tinymce/plugins/pagebreak';
  import 'tinymce/plugins/preview';
  import 'tinymce/plugins/quickbars';
  import 'tinymce/plugins/save';
  import 'tinymce/plugins/searchreplace';
  import 'tinymce/plugins/table';
  import 'tinymce/plugins/template';
  import 'tinymce/plugins/visualblocks';
  import 'tinymce/plugins/visualchars';
  import 'tinymce/plugins/wordcount';

// importing plugin resources
import 'tinymce/plugins/emoticons/js/emojis';

  // Content styles, including inline UI like fake cursors
  // All the above CSS files are loaded on to the page but these two must
  // be loaded into the editor iframe so they are loaded as strings and passed
  // to the init function.
  import contentCss from '!!raw-loader!tinymce/skins/content/default/content.min.css';
  import contentUiCss from '!!raw-loader!tinymce/skins/ui/oxide/content.min.css';

  tinymce.init({
    // note that skin and content_css is disabled to avoid the normal
    // loading process and is instead loaded as a string via content_style
    skin: false,
    content_css: false,
    content_style: [contentCss, contentUiCss].join('\n'),
    // rest of the editor config
    selector: '.editor',
    // every plugin you load must also be imported above
    plugins: [
      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 
      'preview', 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
      'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
    ],
    toolbar: 'undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | code | help',
    height: 500,
    menubar: false,
  })