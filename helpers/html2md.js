import TurndownService from '../3rd-party/turndown.js'

const td = new TurndownService();

export default html => td.turndown(html)
