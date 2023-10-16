export default function (plop) {
    plop.setGenerator('template', {
        description: 'Create a template',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Nome do Template:'
            },
            {
                type: 'confirm',
                name: 'useProps',
                message: 'Vai usar type para as propriedades?'
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/index.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/styles.ts',
                templateFile: 'templates/styles.ts.hbs'
            },
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/test.tsx',
                templateFile: 'templates/test.spec.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/types.ts',
                templateFile: 'templates/types.ts.hbs'
            }
        ]
    });
};
