<body>
	<header id="navbar">
	    <nav class="navbar">
		<button id="open-menu-button" type="button"></button>
		Accueil / Prochaines tâches
	    </nav>
	</header>
	<div id="menu-modal"></div>
	<div id="menu-task-edit">
	    <div class="block">
			<label>Titre</label>
			<input type="text" placeholder="Titre de la tâche">
	    </div>
	    <div class="block">
			<label>Étapes</label>
			<ul>
				<li class="step-container">
				<div class="step">
					<div class="icon">
					<div class="circle checked"></div>
					</div>
					<div class="name">
					{Nom de l'étape}
					</div>
				</div>
				<div class="step-actions">
					<img src="assets/remove.svg" title="Supprimer l'étape" alt="Supprimer l'étape">
				</div>
				</li>
				<li class="step-container">
				<input type="text" class="step" placeholder="Nouvelle étape">
				<div class="step-actions">
					<img src="assets/plus.svg" title="Supprimer l'étape" alt="Supprimer l'étape">
				</div>
				</li>
			</ul>
	    </div>
	    <div class="block">
		<label>Échéance</label>
		<input type="text" placeholder="jj/mm/aaaa">
	    </div>
	    <div class="block">
		<label>Notes</label>
		<textarea placeholder="Notes de la tâche"></textarea>
	    </div>
	    <div class="double-buttons">
		<button>Enregistrer</button>
		<button class="optional">Annuler</button>
	    </div>
	</div>
	<div id="menu">
	    <button id="close-menu-button"></button>
	    <a href="<?= uri("/") ?>" title="Accueil" id="user-email">{haroun@mail.com}</a>
	    <nav id="menu-lists">
		<span class="title">Mes listes</span>
		<ul>
		    <li><a href="/list/{id}" title="{nom}">{nom très long qui va probablement toucher le badge à droite}<div class="badge">25</div></a></li>
		    <li><a href="/list/{id}" title="{nom}">{nom}<div class="badge">3</div></a></li>
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
	    <h1>Prochaines tâches</h1>
	    <ul id="tasks-list">
		<li>
		    <div class="task">
			<div class="icon">
			    <div class="circle checked"></div>
			</div>
			<div class="name done">
			    {nom}
			</div>
			<ul>
			    <li class="number">{2} sur {3}</li>
			    <li class="deadline">Échéance: {demain}</li>
			    <li class="note">{Note}</li>
			</ul>
			<?php
			//temporaire, test
			$task["id"] = 1;
			?>
			<a href="<?= uri("/delete_task?task_id={$task["id"]}") ?>" title="Supprimer la tâche">
			    <img src="assets/delete.svg" alt="Supprimer la tâche">
			</a>
		    </div>
		</li>
		<li>
		    <div class="task">
			<div class="icon">
			    <div class="circle"></div>
			</div>
			<div class="name">
			    {nom}
			</div>
			<ul>
			    <li class="number">{2} sur {3}</li>
			    <li class="deadline">Échéance: {demain}</li>
			    <li class="note">{Note}</li>
			</ul>
			<a href="<?= uri("/delete_task?task_id={$task["id"]}") ?>" title="Supprimer la tâche">
			    <img src="assets/delete.svg" alt="Supprimer la tâche">
			</a>
		    </div>
		</li>
	    </ul>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
	<script src="menu.js"></script>
	<script src="edit_task_menu.js"></script>
	
