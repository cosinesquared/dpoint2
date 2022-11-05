// credit Mark Troyer / PurelySimple 

function stripNamespace(input) {
	var lastDot = input.lastIndexOf('.')
	if (lastDot < 0) {
		return input
	}
	return input.substring(lastDot+1)
}

function inspectold(obj) {
	if (typeof obj !== 'undefined') {
		var resultArray = []
		resultArray.push('Inspecting: ' + obj)
		
		var propertiesArray = []
		var functionsArray = []
		Object.keys(obj).forEach(key => {
			var keyType = typeof obj[key]
			if (keyType === 'string' || keyType === 'number' || keyType === 'object') {
				propertiesArray.push('  ' + key + ': ' + obj[key])
			} else if (keyType === 'function' && !key.startsWith('func_')) {
				var rawString = obj[key].toString().match(/\/\*\n(.*) .*\((.*)\)/)
				var returnType = stripNamespace(rawString[1])
				var rawParameters = []
				if (rawString[2] !== 'undefined') {
					rawParameters = rawString[2].split(',')
				}
				var parameterTypes = []
				var i
				for (i = 0; i < rawParameters.length; i++) {
					parameterTypes.push(stripNamespace(rawParameters[i]))
				}
				
				functionsArray.push('  ' + key + '(' + parameterTypes.join(', ') + ') : ' + returnType)
			} else if (keyType === 'undefined') {
				propertiesArray.push('  ' + key + ': undefined')
			}
		})
		
		propertiesArray.sort();
		propertiesArray.unshift('=== Properties ===')
		functionsArray.sort()
		functionsArray.unshift('=== functions ===')
		
		resultArray.push(propertiesArray.join('\n'))
		resultArray.push(functionsArray.join('\n'))
		console.info(resultArray.join('\n'))
	} else {
		console.info('inspected object is undefined')
	}
}


let inspect = (obj) => {
	if (typeof obj !== 'undefined') {
	  let resultArray = []
	  resultArray.push(`Inspecting: ${obj}`)
  
	  let propertiesArray = []
	  let functionsArray = []
	  Object.keys(obj).forEach(key => {
		let keyType = typeof obj[key]
		if (keyType === 'string' || keyType === 'number' || keyType === 'object') {
		  propertiesArray.push(`  ${key}: ${obj[key]}`)
		} else if (keyType === 'function' && !key.startsWith('func_')) {
		  functionsArray.push(`  ${key}: unknown`)
		} else if (keyType === 'undefined') {
		  propertiesArray.push(`  ${key}: undefined`)
		}
	  })
  
	  propertiesArray.sort()
	  propertiesArray.unshift('=== Properties ===')
	  functionsArray.sort()
	  functionsArray.unshift('=== Functions ===')
  
	  resultArray.push(propertiesArray.join('\n'))
	  resultArray.push(functionsArray.join('\n'))
	  console.info(resultArray.join('\n'))
	} else console.info('inspected object is undefined')
  }

  let inspectj = (obj) => {
	if (typeof obj !== 'undefined') {
	  let resultArray = []
	  resultArray.push(`Inspecting: ${obj}`)
  
	  let propertiesArray = []
	  let functionsArray = []
	  Object.keys(obj).forEach(key => {
		let keyType = typeof obj[key]
		if (keyType === 'string' || keyType === 'number' || keyType === 'object') {
		  propertiesArray.push(`  ${key}: ${obj[key]}`)
		} else if (keyType === 'function') {
		  functionsArray.push(`  ${key}: unknown`)
		} else if (keyType === 'undefined') {
		  propertiesArray.push(`  ${key}: undefined`)
		}
	  })
  
	  propertiesArray.sort()
	  propertiesArray.unshift('=== Properties ===')
	  functionsArray.sort()
	  functionsArray.unshift('=== Functions ===')
  
	  resultArray.push(propertiesArray.join('\n'))
	  resultArray.push(functionsArray.join('\n'))
	  console.info(resultArray.join('\n'))
	} else console.info('inspected object is undefined')
  }