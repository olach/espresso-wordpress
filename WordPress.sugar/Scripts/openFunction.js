action.performWithContext = function(context, outError) {
	// Save current selections
	var selections = context.selectedRanges;
	
	// Find SXZone at start of first selection
	var selection = context.selectedRanges[0];
	var zone = context.syntaxTree.zoneAtCharacterIndex(selection.location);
	
	var snippet = new CETextSnippet('`open https://developer.wordpress.org/reference/functions/'+escapeForShell(zone.text)+'`$EDITOR_SELECTION');
	
	if (!context.insertTextSnippet(snippet)) return false;
	
	context.selectedRanges = selections;
	return true;
};

action.canPerformWithContext = function(context, outError) {
	// Prevent multiple selections
	if (context.selectedRanges.length > 1) return false;
	
	return true;
};

function escapeForShell(string) {
	return string.replace(/(["\s'$`\\])/g,'\\$1');
}
