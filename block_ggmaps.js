<script>
		const appendChild = Element.prototype.appendChild;
		const urlCatchers = [
		  "/AuthenticationService.Authenticate?",
		  "/QuotaService.RecordEvent?"
		];
		Element.prototype.appendChild = function (element) {
		  const isGMapScript = element.tagName === 'SCRIPT' && /maps\.googleapis\.com/i.test(element.src);
		  const isGMapAccessScript = isGMapScript && urlCatchers.some(url => element.src.includes(url));

		  if (!isGMapAccessScript) {
		    return appendChild.call(this, element);
		  }
		  return element;
		};
</script>
