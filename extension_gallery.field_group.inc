<?php
/**
 * @file
 * extension_gallery.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function extension_gallery_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_gallery|node|page|form';
  $field_group->group_name = 'group_gallery';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Photo Gallery',
    'weight' => '2',
    'children' => array(
      0 => 'field_gallery',
      1 => 'field_gallery_description',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Photo Gallery',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-gallery field-group-fieldset',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_gallery|node|page|form'] = $field_group;

  return $export;
}
