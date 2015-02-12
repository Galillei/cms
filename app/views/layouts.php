<!DOCTYPE html>
<html ng-app="app">
<title>Customer Management</title>
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="<?php echo Asset::url('bast-public-less')?>">
<script src="<?php echo Asset::url('singlejs-angular'); ?>"></script>
<script src="<?php echo Asset::url('singlejs-main'); ?>"></script>
<body>

<h1>
    Customer Management

</h1>
<div ng-view>

</div>

</body>
</html>
