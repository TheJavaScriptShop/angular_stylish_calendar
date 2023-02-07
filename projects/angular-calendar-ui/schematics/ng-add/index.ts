import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// Just return the tree
export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('installing dependencies.....');
    return tree;
  };
}
