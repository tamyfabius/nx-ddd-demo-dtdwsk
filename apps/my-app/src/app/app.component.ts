
  ● Test suite failed to run

  Jest encountered an unexpected token

  Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

  Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

  By default "node_modules" folder is ignored by transformers.

  Here's what you can do:
   • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
   • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
   • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
   • If you need a custom transformation specify a "transform" option in your config.
   • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

  You'll find more details and examples of these config options in the docs:
  https://jestjs.io/docs/configuration
  For information about custom transformations, see:
  https://jestjs.io/docs/code-transformation

  Details:

  D:\workspace\01-pres-nx\skynes\node_modules\ip-regex\index.js:36
  export default ipRegex;
  ^^^^^^

  SyntaxError: Unexpected token 'export'

    1 | import { ChannelGroupsMember } from '../interfaces/channel-groups-member.interface';
  > 2 | import ipRegex from 'ip-regex';
      | ^
    3 | import cidrRegex from 'cidr-regex';
    4 |
    5 | /**

    at Runtime.createScriptFromCode (../../../../node_modules/jest-runtime/build/index.js:1796:14)
    at Object.<anonymous> (src/lib/utils/format.util.ts:2:1)