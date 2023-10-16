export default function (plop) {
    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Nome do componente:'
            },
            {
                type: 'confirm',
                name: 'useProps',
                message: 'Vai usar type para as propriedades do componente?'
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/index.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'templates/stories.stories.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/styles.ts',
                templateFile: 'templates/styles.ts.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/test.tsx',
                templateFile: 'templates/test.spec.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/types.ts',
                templateFile: 'templates/types.ts.hbs'
            }
        ]
    });
};
