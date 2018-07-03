import { html, svg } from '@polymer/lit-element'

export function mpe () {
	return document.querySelector('micro-panel-editor')
}

export const sharedStyles = html`
	<style>
		:host {
			line-height: 1.15;
			-webkit-text-size-adjust: 100%;
			--major-padding: var(--micro-panel-major-padding, 0.5rem);
			--roundness: var(--micro-panel-roundness, 4px);
			--neutral: var(--micro-panel-neutral, #fefefe);
			--accent: var(--micro-panel-accent, rgb(0, 137, 123));
			--light-accent: var(--micro-panel-light-accent, rgba(0, 137, 123, 0.55));
			--text: var(--micro-panel-text, #333);
			color: var(--text);
		}
		:host([hidden]) { display: none !important; }
		* { box-sizing: border-box; }

		input, textarea, button {
			text-transform: none;
			border-radius: var(--roundness);
			padding: 0.4rem;
			outline: none;
			border: 1px solid var(--accent);
			vertical-align: baseline;
		}
		::-moz-focus-inner {
			border-style: none;
			padding: 0;
		}
		input:-moz-focusring, textarea:-moz-focusring, button:-moz-focusring {
			outline: 1px dotted ButtonText;
		}
		button {
			padding: 0.4rem 0.8rem;
			overflow: visible;
			-webkit-appearance: button;
			background: var(--accent);
			color: var(--neutral);
		}

		.icon, .icon-button {
			vertical-align: middle;
		}
		.icon-button {
			padding: 0.2rem;
			border-radius: 100rem;
			background: transparent;
			color: inherit;
			border: none;
		}

		.inverted {
			background: var(--accent);
			color: var(--neutral);
		}
		.inverted button {
			background: var(--neutral);
			color: var(--accent);
			border-color: var(--neutral);
		}

		.header-bar {
			padding: var(--major-padding);
		}
		.bar {
			margin: 0;
			display: flex;
			align-items: baseline;
		}
		.bar label, .bar h1 {
			flex: 1;
		}
		.bar button {
			margin: 0 0.2rem;
		}
		.bar button:first-child {
			margin-left: 0;
		}
		.bar button:last-child {
			margin-right: 0;
		}
	</style>
`

/* https://materialdesignicons.com */
export const icons = {
	/* by Google | Apache 2 licensed: */
	plus: svg`
		<path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
	`,
	minus: svg`
		<path fill="currentColor" d="M19,13H5V11H19V13Z" />
	`,
	chevronUp: svg`
		<path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
	`,
	chevronDown: svg`
		<path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
	`,
	leadPencil: svg`
		<path fill="currentColor" d="M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.47,15.29" />
	`,
	close: svg`
		<path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
	`,
}

export function iconCode (icon, title = null) {
	return html`<svg class="icon" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden$=${title ? 'false' : 'true'} title$=${title || ''}>
		${icon}
		${title ? html`<title>${title}</title>` : ''}
	</svg>`
}