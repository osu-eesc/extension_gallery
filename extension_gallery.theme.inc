<?php
/**
 * Preprocess variables for the extension-gallery-insert-image.tpl.php file
 */
function template_preprocess_extension_gallery_insert_image(&$variables) {  
  $variables['file'] = file_load($variables['item']['fid']);
  $variables['style_name'] = 'gallery_preview';
  $variables['width'] = $variables['item']['width'];
  $variables['height'] = $variables['item']['height'];
  image_style_transform_dimensions('gallery_preview', $variables);
  $variables['uri'] = image_style_path('gallery_preview', $variables['file']->uri);
  $variables['path'] = image_style_url('gallery_preview', $variables['file']->uri);
}