<?php
// Reusable logo include
// Usage: include 'utils/logo.php';
// Adjust path if including from different directories

// Path to the transparent PNG logo (relative to the including file)
$imgPath = 'images/packerslc.png';

// Output the logo HTML
?>
<div class="logo">
    <a class="navbar-brand" href="index">
        <img src="<?php echo $imgPath; ?>" alt="Packers LC" style="max-width:25% !important"/>
    </a>
</div>
