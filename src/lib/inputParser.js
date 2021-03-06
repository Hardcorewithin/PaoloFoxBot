export default class InputParser{
	
	isCommandStart(text){
		const command = '/start';
		return text.match(command);
	}

	isCommandHoroscope(text){
		const command = '/oroscopo';
		return text.match(command);
	}

	isCommandHelp(text){
		const command = '/help';
		return text.match(command);
	}
}