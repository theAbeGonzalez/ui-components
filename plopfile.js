module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'input',
        name: 'path',
        default: 'src/components',
        message: 'What is your component path?',
      },
      {
        type: 'input',
        name: 'hasTest',
        default: 'y',
        message: 'Generate Test file (y/n) ?',
      },
      {
        type: 'input',
        name: 'hasStories',
        default: 'y',
        message: 'Generate stories file (y/n) ?',
      },
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.component.jsx',
          templateFile: 'plop-templates/component/Component.jsx.hbs',
        },
        {
          type: 'add',
          path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.styled.js',
          templateFile: 'plop-templates/component/Component.styled.js.hbs',
        },
        {
          type: 'add',
          path: '{{path}}/{{pascalCase name}}/index.js',
          templateFile: 'plop-templates/component/Component.index.js.hbs',
        },
      ];
      if (data.hasTest.toLowerCase() === 'y') {
        actions.push({
          type: 'add',
          path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.js',
          templateFile: 'plop-templates/component/Component.test.js.hbs',
        });
      }
      if (data.hasStories.toLowerCase() === 'y') {
        actions.push({
          type: 'add',
          path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.jsx',
          templateFile: 'plop-templates/component/Component.stories.jsx.hbs',
        });
      }

      return actions;
    },
  });
};
