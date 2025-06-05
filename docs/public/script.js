// Utility data - will be populated by the generate script
const utilities = {
    array: [
        {
            name: 'chunk',
            description: 'Creates an array of elements split into groups the length of size',
            tags: ['array', 'chunk', 'split'],
            examples: [
                "chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]",
                "chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]"
            ]
        },
        {
            name: 'uniq',
            description: 'Creates a duplicate-free version of an array',
            tags: ['array', 'unique', 'duplicates'],
            examples: [
                "uniq([1, 2, 2, 3, 3, 4]) // [1, 2, 3, 4]",
                "uniq(['a', 'b', 'a', 'c']) // ['a', 'b', 'c']"
            ]
        },
        {
            name: 'uniqBy',
            description: 'Creates a duplicate-free version of an array using iteratee function',
            tags: ['array', 'unique', 'duplicates', 'iteratee'],
            examples: [
                "uniqBy([{id: 1}, {id: 2}, {id: 1}], item => item.id) // [{id: 1}, {id: 2}]",
                "uniqBy(['a', 'bb', 'ccc', 'dd'], item => item.length) // ['a', 'bb', 'ccc']"
            ]
        },
        {
            name: 'flatten',
            description: 'Flattens array a single level deep',
            tags: ['array', 'flatten', 'nested'],
            examples: [
                "flatten([1, [2, 3], 4]) // [1, 2, 3, 4]",
                "flatten(['a', ['b', 'c'], 'd']) // ['a', 'b', 'c', 'd']"
            ]
        },
        {
            name: 'flattenDeep',
            description: 'Recursively flattens array to a single level',
            tags: ['array', 'flatten', 'recursive', 'deep'],
            examples: [
                "flattenDeep([1, [2, [3, [4]]]]) // [1, 2, 3, 4]",
                "flattenDeep(['a', ['b', ['c', 'd']]]) // ['a', 'b', 'c', 'd']"
            ]
        },
        {
            name: 'sample',
            description: 'Gets a random element from array',
            tags: ['array', 'random', 'sample'],
            examples: [
                "sample([1, 2, 3, 4, 5]) // Random element",
                "sample(['a', 'b', 'c']) // Random element"
            ]
        },
        {
            name: 'sampleSize',
            description: 'Gets n random elements from array',
            tags: ['array', 'random', 'sample', 'multiple'],
            examples: [
                "sampleSize([1, 2, 3, 4, 5], 3) // 3 random elements",
                "sampleSize(['a', 'b', 'c', 'd'], 2) // 2 random elements"
            ]
        }
    ],
    string: [
        {
            name: 'camelCase',
            description: 'Converts string to camelCase format',
            tags: ['string', 'case', 'conversion'],
            examples: [
                "camelCase('hello world') // 'helloWorld'",
                "camelCase('Hello_World') // 'helloWorld'"
            ]
        },
        {
            name: 'pascalCase',
            description: 'Converts string to PascalCase format',
            tags: ['string', 'case', 'conversion'],
            examples: [
                "pascalCase('hello world') // 'HelloWorld'",
                "pascalCase('hello-world') // 'HelloWorld'"
            ]
        },
        {
            name: 'kebabCase',
            description: 'Converts string to kebab-case format',
            tags: ['string', 'case', 'conversion'],
            examples: [
                "kebabCase('helloWorld') // 'hello-world'",
                "kebabCase('Hello World') // 'hello-world'"
            ]
        },
        {
            name: 'snakeCase',
            description: 'Converts string to snake_case format',
            tags: ['string', 'case', 'conversion'],
            examples: [
                "snakeCase('helloWorld') // 'hello_world'",
                "snakeCase('Hello World') // 'hello_world'"
            ]
        },
        {
            name: 'debounce',
            description: 'Creates a debounced function that delays invoking func',
            tags: ['function', 'debounce', 'timing', 'performance'],
            examples: [
                "const debouncedFn = debounce(fn, 300)",
                "const immediateFn = debounce(fn, 300, true)"
            ]
        },
        {
            name: 'throttle',
            description: 'Creates a throttled function that only invokes func at most once per limit',
            tags: ['function', 'throttle', 'timing', 'performance'],
            examples: [
                "const throttledFn = throttle(fn, 1000)",
                "throttledFn() // Called immediately"
            ]
        },
        {
            name: 'truncate',
            description: 'Truncates string with customizable options',
            tags: ['string', 'truncate', 'text'],
            examples: [
                "truncate('hello world', { length: 8 }) // 'hello...'",
                "truncate('hello world', { length: 8, omission: '---' }) // 'hello---'"
            ]
        },
        {
            name: 'capitalize',
            description: 'Capitalizes the first character of string',
            tags: ['string', 'capitalize', 'text'],
            examples: [
                "capitalize('hello') // 'Hello'",
                "capitalize('HELLO') // 'Hello'"
            ]
        },
        {
            name: 'startCase',
            description: 'Converts string to start case (Title Case)',
            tags: ['string', 'case', 'conversion', 'title'],
            examples: [
                "startCase('hello_world') // 'Hello World'",
                "startCase('helloWorld') // 'Hello World'"
            ]
        }
    ],
    number: [
        {
            name: 'clamp',
            description: 'Clamps number within the inclusive lower and upper bounds',
            tags: ['number', 'clamp', 'bounds'],
            examples: [
                "clamp(5, 1, 10) // 5",
                "clamp(-5, 1, 10) // 1",
                "clamp(15, 1, 10) // 10"
            ]
        },
        {
            name: 'inRange',
            description: 'Checks if number is between start and up to, but not including, end',
            tags: ['number', 'range', 'check'],
            examples: [
                "inRange(5, 1, 10) // true",
                "inRange(0, 1, 10) // false",
                "inRange(5, 10) // true (0 to 10)"
            ]
        },
        {
            name: 'random',
            description: 'Produces a random number between the inclusive lower and upper bounds',
            tags: ['number', 'random', 'generator'],
            examples: [
                "random(0, 10) // Random integer between 0-10",
                "random(0, 1, true) // Random float between 0-1"
            ]
        },
        {
            name: 'randomInt',
            description: 'Produces a random integer between the inclusive min and max bounds',
            tags: ['number', 'random', 'integer'],
            examples: [
                "randomInt(1, 5) // Random integer between 1-5",
                "randomInt(10, 20) // Random integer between 10-20"
            ]
        },
        {
            name: 'round',
            description: 'Rounds number to precision',
            tags: ['number', 'round', 'precision'],
            examples: [
                "round(1.2345, 2) // 1.23",
                "round(1.2365, 2) // 1.24"
            ]
        },
        {
            name: 'ceil',
            description: 'Computes number rounded up to precision',
            tags: ['number', 'ceil', 'precision'],
            examples: [
                "ceil(1.2345, 2) // 1.24",
                "ceil(1.2345) // 2"
            ]
        },
        {
            name: 'floor',
            description: 'Computes number rounded down to precision',
            tags: ['number', 'floor', 'precision'],
            examples: [
                "floor(1.2345, 2) // 1.23",
                "floor(1.2345) // 1"
            ]
        },
        {
            name: 'percentage',
            description: 'Calculates percentage with precision',
            tags: ['number', 'percentage', 'calculation'],
            examples: [
                "percentage(25, 100) // 25",
                "percentage(1, 3, 2) // 33.33"
            ]
        }
    ]
};

function createUtilityCard(utility) {
    return `
    <div class="utility-card">
      <div class="utility-header">
        <h3 class="utility-name">${utility.name}</h3>
        <button class="utility-add" onclick="copyAddCommand('${utility.name}')">
          npx awn add ${utility.name}
        </button>
      </div>
      <p class="utility-description">${utility.description}</p>
      <div class="utility-tags">
        ${utility.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="utility-example">
        <pre><code class="language-typescript">${utility.examples.join('\n')}</code></pre>
      </div>
    </div>
  `;
}

function populateUtilities() {
    const arrayContainer = document.getElementById('array-utils');
    const stringContainer = document.getElementById('string-utils');
    const numberContainer = document.getElementById('number-utils');

    arrayContainer.innerHTML = utilities.array.map(createUtilityCard).join('');
    stringContainer.innerHTML = utilities.string.map(createUtilityCard).join('');
    numberContainer.innerHTML = utilities.number.map(createUtilityCard).join('');
}

function copyAddCommand(utilityName) {
    const command = `npx awn add ${utilityName}`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(command).then(() => {
            showToast('Copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = command;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied to clipboard!');
    }
}

function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-success);
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;

    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 2 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

// Navigation highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav a');

    let currentSection = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateUtilities();

    // Highlight code blocks
    if (window.Prism) {
        Prism.highlightAll();
    }

    // Update nav on scroll
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});