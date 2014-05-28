<?php
/**
 * Content to be inserted into the WYSIWYG
 */
?>
<div class="caption caption-center">
  <div class="caption-width-container" style="width: 260px;">
    <div class="caption-inner">
      <a href="<?php print base_path().'node/[node:nid]/gallery'; ?>" class="gallery-link"><img src="<?php print $path; ?>" <?php if ($width && $height): ?>width="<?php print $width; ?>" height="<?php print $height; ?>" <?php endif; ?> /><span class="caption-overlay">&nbsp;</span></a>
      <p class="caption-text">[node:field_gallery_description]</p>
    </div>
  </div>
</div>