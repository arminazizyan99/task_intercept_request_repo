const cypress = require('cypress')
const program = require('commander');

const argv = process.argv.slice(2)

const device = argv.includes("--mobile") ? 'mobile' : 'desktop' 

const cypressOptions = {
	env: {
		isMobile: device === 'mobile',
		isDesktop: device === 'desktop',
	},

    config: {

		...(device === 'mobile' && {
			
			viewportWidth: 375,
			viewportHeight: 812,
		}),
		...(device === 'desktop' && {
			viewportWidth: 1440,
			viewportHeight: 900,
		})
    }
}
function runCypress() {
	if (argv.includes("--open")) {
		return cypress.open(cypressOptions)
	}

	return cypress.run(cypressOptions)
}

runCypress()
	.then((results) => {
		if (results.totalFailed > 0 || results.failures > 0) {
			process.exit(1)
		}
	})
	.catch((err) => {
		console.error(err.stack || err)
		process.exit(1)
	})