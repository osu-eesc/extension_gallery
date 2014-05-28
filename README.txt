Extension Gallery
Provides an image gallery field for nodes.

Dependencies
  ctools
  features
  field_collection
  field_group
  image
  insert
  text
  token_filter


The "Photo Gallery" field is automatically added to the "Basic Page" content type.

To add a gallery to additional content types:

1. Ensure that the feature is enabled
2. Navigate to "Manage fields" (/admin/structure/types/manage/[CONTENT TYPE]/fields)
    a. Add a new fieldgroup with the label of "Photo Gallery" and type "Fieldset"
        I. After adding, change the fieldgroup settings to "collapsed"
    b. Add the following existing fields to the fieldgroup:
        - Long text: field_gallery_description (Gallery description)
        - Field collection: field_gallery (Photo Gallery)
3. Navigate to "Manage display" -> "Gallery" (/admin/structure/types/manage/[CONTENT TYPE]/display/gallery)
    a. Show the "Photo Gallery" field with label "<Hidden>" and format "Fields only"




Browser testing version 1 - 5/19/14

  Chrome 34 (latest stable)
    Works well
    Windows 8 registers as a touch device, prev/next overlays are removed

  Firefox 29 (latest stable)
    Works well

  Opera 18 (older version)
    Works well

  Opera 21 (latest stable)
    Works well

  Internet Explorer 10
    Works okay
    Prev/next overlays only cover visible button
