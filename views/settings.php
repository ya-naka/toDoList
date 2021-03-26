<body>
	<header id="navbar">
		<nav class="navbar">
		<button id="open-menu-button" type="button"></button>
		Paramètres
		</nav>
	</header>
	<div id="menu">
		<button id="close-menu-button"></button>
		<a href="<?= uri("/home") ?>" title="Accueil" id="user-email">{haroun@mail.com}</a>
		<nav id="menu-lists">
			<span class="title">Mes listes</span>
			<ul>
				<!-- javascript à la place du lien ?--><li><a href="/list/{id}" title="{nom}">{nom très long qui va probablement toucher le badge à droite}<div class="badge">25</div></a></li>
				<!-- javascript à la place du lien ?--><li><a href="/list/{id}" title="{nom}">{nom}<div class="badge">3</div></a></li>
			</ul>
		</nav>
		<a href="<?= uri("/add_list") ?>" id="menu-new-list" title="Nouvelle liste">Nouvelle liste</a>
		<nav id="menu-bottom">
			<ul>
				<li>
				<a href="<?= uri("/settings") ?>" id="menu-settings" title="Paramètres">Paramètres</a>
				</li>
				<li>
				<a href="<?= uri("/signout") ?>" id="menu-logout" title="Déconnexion">Déconnexion</a>
				</li>
			</ul>
		</nav>
	</div>
	<div id="content">
		<h1 id="settings-title">Paramètres</h1>
		<form action="<?= uri("/update_mail") ?>" method="POST" class="settings-form">
			<h2>Adresse e-mail</h2>
			<div>
				<b>Adresse e-mail actuelle:</b> {adresse-email}
			</div>
			<label>Nouvelle adresse e-mail</label>
			<input type="mail" name="email" placeholder="mail@provider.com">
			<label>Confirmer l'adresse e-mail</label>
			<input type="mail" name="email_conf" placeholder="mail@provider.com">
			<button type="submit">Modifier l'adresse e-mail</button>
		</form>
		<form action="<?= uri("/update_password") ?>" method="POST" class="settings-form">
			<h2>Mot de passe</h2>
			<label>Mot de passe actuel</label>
			<input type="password" name="password" placeholder="password">
			<label>Nouveau mot de passe</label>
			<input type="password" name="new_password" placeholder="password">
			<label>Confirmer le nouveau mot de passe</label>
			<input type="password" name="new_password_conf" placeholder="password">
			<button type="submit">Modifier le mot de passe</button>
		</form>
	</div>
	<div id="menu-modal"></div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
	<script src="menu.js"></script>
</body>
