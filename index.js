<script>
	function reqListener () {
  console.log(this.responseText);
}
	var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost:80/ProjetTuteure/verify_user");
oReq.send();
	</script>