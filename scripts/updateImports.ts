import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isAbsolute = (value: string) => {
  const layers = ['app', 'entities', 'shared', 'features', 'widgets', 'pages'];

  return layers.some(layer => value.startsWith(layer));
};

files.forEach(sourceFile => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach(i => {
    const value = i.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      i.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
