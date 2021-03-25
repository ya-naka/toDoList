<!doctype html>
<html lang="fr">
    <head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
		<link rel="stylesheet" href="style.css">
		<title>Connexion | To-do list</title>
    </head>
    <body id="landing">
		<main id="frame-container">
			<form action="<?= uri("/signin") ?>" method="POST" class="text-start" id="frame">
				<label for="email">Adresse e-mail</label>
				<input type="email" id="email" name="email" class="form-control" placeholder="mail@provider.com" required autofocus>
				<div class="error">
					Veuillez renseigner une adresse e-mail
				</div>
				<label for="password">Mot de passe</label>
				<input type="password" id="password" name="password" class="form-control" placeholder="password" required>
				<div class="error">
					Veuillez renseigner un mot de passe
				</div>
				<div class="error text-center">
					Identifiants incorrects
				</div>
				<button type="submit">
					Connexion
				</button>
				<div class="text-center">
					<a href="/oubli_mdp" title="J'ai oublié mon mot de passe">J'ai oublié mon mot de passe</a>
				</div>
				<div class="text-center">
					<a href="/inscription" title="Pas encore de compte ? Inscrivez-vous !">Pas encore de compte ? Inscrivez-vous !</a>
				</div>
			</form>
		</main>
    </body>
</html>
