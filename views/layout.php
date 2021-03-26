<!doctype html>
<html lang="fr">
    <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
	<title><?php if(isset($data["page_title"])) echo $data["page_title"] ?> | To-do list</title>
    </head>
    <body>
        <?= $content; ?>
    </body>
</html>