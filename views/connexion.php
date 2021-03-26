<body id="landing">
	<main id="frame-container">
		<form action="<?= uri("/verify_user") ?>" method="POST" class="text-start" id="frame">
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
				<a href="<?= uri("/forgot_password") ?>" title="J'ai oublié mon mot de passe">J'ai oublié mon mot de passe</a>
			</div>
			<div class="text-center">
				<a href="<?= uri("/signup") ?>" title="Pas encore de compte ? Inscrivez-vous !">Pas encore de compte ? Inscrivez-vous !</a>
			</div>
		</form>
	</main>
</body>
